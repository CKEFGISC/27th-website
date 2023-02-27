function isMobile() {
  return window.innerWidth < 800;
}

function loadNews(filename) {
  $.get(filename, function(data) {
    let lines = data.split('\n');
    let date = lines[0];
    let title = lines[1];
    let content = lines.slice(2);
    $('#news-title').append(`<p>${title}</p>`);
    for (let i=0; i<content.length; i++) {
      $('#news-content').append(`<p>${content[i]}</p>`);
    }
  })
}

function listNews(start, numposts) {
  let breakOrSpace = isMobile() ? '<br>' : ' ';
  let paths = [];
  $.ajax({
    url: '/news/data/filepaths.txt',
    async: false,
    success: function(data) {
      paths = data.split('\n');
      paths.pop();
    }
  });

  for (let i=start; i<start+numposts && i<paths.length; i++) {
    let name = paths[i].split('/').at(-1).split('.')[0];
    let url = `/news/posts/${name}.html`;
    $.ajax({
      url: paths[i],
      async: false,
      success: function(post) {
        let lines = post.split('\n');
        let date = lines[0];
        let title = lines[1];
        $('#news-list').append(`<li>${date}${breakOrSpace}<a href="${url}">${title}</a></li>`);
      }
    });
  }
}

function showNews(postsPerPage) {
  let numPages = 0;
  $.ajax({
    url: '/news/data/filepaths.txt',
    async: false,
    success: function(data) {
      numPages = Math.ceil((data.split('\n').length - 1) / postsPerPage);
    }
  });
  listNews(0, postsPerPage);
  for (let i=0; i<numPages; i++) {
    $('.page-selector').append(`<li onclick="$('#news-list').empty();listNews(${i*postsPerPage}, ${postsPerPage});">${i+1}</li>`);
  }
}

