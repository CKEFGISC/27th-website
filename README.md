# 建北電資社網
專案管理負責：建電一三學術長 吳亞倫 [@AaronWu-train](https://www.github.com/AaronWu-train) <br>
網頁架設負責：北資一三學術長 蘇怡恩 [@gracesu307](https://www.github.com/gracesu307)   <br>
　　　　　　　建電一三學術　 溫室蔡 [@VerstandTsai](https://github.com/VerstandTsai)  <br>
## 網站連結
[CKEFGISC.github.io](https://ckefgisc.github.io/)

## 緣起
建北電資以往皆有架設網站作為招生及宣傳用途。但是自從建電社辦的伺服器被學校沒收之後，一直以來都找不到一個良好的網站架設環境，也沒有一個地方讓學術們統一放置教材供學弟妹使用。因此，在一三接幹了之後，一二學術長檸檬便一直希望繼任的鹽亞倫可以將他們沒有做出的社網完成。因此，鹽亞倫便找了溫室菜以及北資學術長嗯嗯，嘗試從頭寫出一個網站，並且透過Github Pages進行架設。

## 製作團隊
專案管理：建電一三學術長 吳亞倫 [@AaronWu-train](https://www.github.com/AaronWu-train) <br>
網頁架設：北資一三學術長 蘇怡恩 [@gracesu307](https://www.github.com/gracesu307)   <br>
　　　　　建電一三學術　 溫室蔡 [@VerstandTsai](https://github.com/VerstandTsai)  <br>

## 編輯規則
* commit message請使用有意義文句
* 請遵守git flow, 詳請看此[文章](https://ithelp.ithome.com.tw/articles/10227605)
* 要修改時請fork develop branch 到自己帳號，除了建立架構之外，不可直接commit到main
* pull request 請寫有意義文句

## 檔案結構
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

## 網站資訊
Copyright © 2022 CKEFGISC 建北電資
本站由建北電資27th (一三) 設計與完成，並使用Github Pages服務架設。
原始碼皆開源於本社團的Github儲存庫中，並且採用MIT條款授權。版權聲明詳見LICENSE。
如果您有任何關於本站的疑問，歡迎至issues發問。如果您希望協助修正錯誤或與我們一起完善此網站，也歡迎進行Pull Request。
