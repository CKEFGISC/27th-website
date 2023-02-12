# CKEFGISC.github.io
# 建北電資社網架設中
專案管理負責：建電一三學術長 吳亞倫 [@AaronWu-train](https://www.github.com/AaronWu-train) <br>
網頁架設負責：北資一三學術長 蘇怡恩 [@gracesu307](https://www.github.com/gracesu307)   <br>

## 社網架構
```
.
├── LICENSE.txt
├── README.md
├── UnderConstruction.html
├── about
│   ├── about.css
│   ├── index.html
│   ├── site.css
│   ├── site.html
│   ├── team.css
│   └── team.html
├── common
│   ├── csslinks.html
│   ├── footer.html
│   └── header.html
├── event
│   ├── event.css
│   └── index.html
├── gennews (shell script)
├── images
├── included license
│   └── underConstructionPageLICENSE.txt
├── index.html
├── lesson
│   ├── algo.html
│   ├── fgisc_python.html
│   ├── fgisc_web.html
│   ├── index.html
│   ├── math.html
│   ├── project.html
│   ├── python.html
│   ├── scripts
│   │   └── detail_slides_click.js
│   ├── styles
│   │   ├── detail.css
│   │   ├── detail_slides.css
│   │   ├── detail_slides_click.css
│   │   └── lesson.css
│   ├── template
│   │   ├── detail.html
│   │   ├── detail_slides.html
│   │   └── detail_slides_click.html
│   └── web.html
├── news
│   ├── data
│   │   └── filepaths.txt
│   ├── index.html
│   ├── posts
│   │   ├── test.html
│   │   ├── test.txt
│   └── template.html
├── schedule
├── scripts
│   ├── include.js
│   └── news.js
└── styles
    ├── UnderConstruction.css
    ├── footer.css
    ├── global.css
    ├── header.css
    ├── index.css
    └── news-template.css
```

## 編輯規則
* commit message請使用有意義文句
* 請遵守git flow, 詳請看此[文章](https://ithelp.ithome.com.tw/articles/10227605)
* 要修改時請fork develop branch 到自己帳號，除了建立架構之外，不可直接commit到main
* pull request 好好寫

## 檔案結構
各分頁.html請放在/(root)中 <br>
子分頁請放對應的資料夾 <br>
js, css, images請整理到相對應資料夾中 <br>

`styles`下面有header跟footer的CSS，<br>
以及全體共用的`global.css`<br>

`common`下面有header、footer以及共用的CSS links，<br>
CSS links除了有styles裡面需要共用的CSS，<br>
還有外部的CSS，包括字體跟Font Awesome等<br>

`scripts`下面的`include.js`用來把`common`裡面的HTML都加進頁面裡，<br>
因為用了jQuery，所以要用時請在`<head>`裡面加上這兩行：
```html
<script src="https://code.jquery.com/jquery-3.6.1.min.js"></script>
<script src="/scripts/include.js"></script>
```
並將`<body>`如下安排：
```html
<body>
  <header></header>
  <div id="main-container">
    <!--你自己的code-->
  </div>
  <footer></footer>
</body>

```

## 公告系統
以`.txt`檔撰寫公告，存放於`/news/posts`底下
### 檔案格式
第一行為日期`YYYY-MM-DD` <br>
第二行為標題 <br>
第三行及以下為公告內容 <br>
範例如下：
```
2022-12-25
[測試]公告系統測試
本公告乃為測試公告系統是否正常運作
以及提供做為演示用途的範例
```
### HTML生成
使用`gennews`來生成 HTML 網頁：
```
./gennews test
```
注意參數僅為其「檔名」，而不包含完整路徑或副檔名

