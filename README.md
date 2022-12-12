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

![image](images/社網架構.png)

## 編輯規則
* commit message請使用有意義文句
* 請遵守git flow, 詳請看此[文章](https://ithelp.ithome.com.tw/articles/10227605)
* 要修改時請fork develop branch 到自己帳號，除了建立架構之外，不可直接commit到main
* pull request 好好寫

## 檔案結構
各分頁.html請放在/(root)中 <br>
子分頁請放對應的資料夾 <br>
js, css, images請整理到相對應資料夾中 <br>
