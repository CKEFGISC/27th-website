# CKEFGISC.github.io
# 建北電資社網架設中
專案管理負責：建電一三學術長 吳亞倫 @AaronWu-train <br>
網頁架設負責：北資一三學術長 蘇怡恩 @gracesu307   <br>

## 社網架構


![image](images/社網架構.png)
## 編輯規則
* commit message請使用有意義文句
* 建立branch，除了建立架構之外，不可直接commit到main
* pull request 好好寫

## 檔案結構
各分頁.html請放在/(root)中 <br>
子分頁請放對應的資料夾 <br>
js, css, images請整理到相對應資料夾中 <br>

`styles`下面有header跟footer的CSS，
以及一個`colors.css`用來放顏色的變數

`common`下面有header、footer以及共用的CSS links，
CSS links除了有styles裡面需要共用的CSS，
還有外部的CSS，包括字體跟Font Awesome等

`scripts`下面的`include.js`用來把`common`裡面的HTML都加進頁面裡，
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
