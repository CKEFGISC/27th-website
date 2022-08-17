# CKEFGISC.github.io
# 建北電資社網架設中
專案管理負責：建電一三學術長 吳亞倫 @AaronWu-train <br>
網頁架設負責：北資一三學術長 蘇怡恩 @gracesu307   <br>

## 社網架構
.  <br>
├── ./common/ <br>
│   ├── ./common/header.html <br>
│   └── ./common/footer.html <br>
├── ./styles/ <br>
│   └── ./styles/something.css <br>
├── ./scripts/ <br>
│   └── ./scripts/something.js <br>
│  <br>
│  <!-- html files --> <br>
│  <br>
├── ./index.html <br>
├── ./news.html <br>
├── ./about.html <br>
├── ./about/ <br>
│   └── ./about/history.html <br>
├── ./lesson.html/ <br>
│   ├── ./lesson.html/algo.html <br>
│   ├── ./lesson.html/python.html <br>
│   ├── ./lesson.html/web.html <br>
│   ├── ./lesson.html/math.html <br>
│   └── ./lesson.html/projectConstruction.html <br>
├── ./event.html <br>
├── ./event/ <br>
│   ├── ./event/spring.html <br>
│   ├── ./event/summer.html <br>
│   ├── ./event/autumn.html <br>
│   ├── ./event/winter.html <br>
│   ├── ./event/exhibit.html <br>
│   └── ./event/tea.html <br>
└── ./schedule.html <br>

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
