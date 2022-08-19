# CKEFGISC.github.io
# 建北電資社網架設中
專案管理負責：建電一三學術長 吳亞倫 @AaronWu-train <br>
網頁架設負責：北資一三學術長 蘇怡恩 @gracesu307   <br>

## 社網架構
```
.
├── ./common/
│   ├── ./common/header.html
│   └── ./common/footer.html
├── ./styles/
│   └── ./styles/something.css
├── ./scripts/
│   └── ./scripts/something.js
├── ./index.html
├── ./news.html
├── ./about.html
├── ./about/
│   └── ./about/history.html
├── ./lesson.html/
│   ├── ./lesson.html/algo.html
│   ├── ./lesson.html/python.html
│   ├── ./lesson.html/web.html
│   ├── ./lesson.html/math.html
│   └── ./lesson.html/projectConstruction.html
├── ./event.html
├── ./event/
│   ├── ./event/spring.html
│   ├── ./event/summer.html
│   ├── ./event/autumn.html
│   ├── ./event/winter.html
│   ├── ./event/exhibit.html
│   └── ./event/tea.html
└── ./schedule.html
```
<img width="473" alt="image" src="https://user-images.githubusercontent.com/99801904/185097983-3223b5ef-7e0e-4927-b018-ef9589d262e0.png">

[edit link](https://bit.ly/3QFXPzs) 

ps. please change link after edit

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
