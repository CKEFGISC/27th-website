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

function listNews(num) {
  $.get('/news/data/filepaths.txt', function(data) {
    let paths = data.split('\n');
    paths.pop();
    for (let i=0; i<num && i<paths.length; i++) {
      let name = paths[i].split('/').at(-1).split('.')[0];
      let url = `/news/posts/${name}.html`;
      $.get(paths[i], function(post) {
        let lines = post.split('\n');
        let date = lines[0];
        let title = lines[1];
        $('#news-list').append(`<li>${date} <a href=${url} class="a_news">${title}</a></li>`)
      });
    }
  });
}
