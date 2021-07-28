# portfolio2

## 概要

* Youtubeの動画に視聴者が自由にタグ付け出来ることを想定したYoutubeのクローンサイトです。
* Reactとexpressを用いて記述しています。

<img width="944" alt="portfolio2-1" src="https://user-images.githubusercontent.com/70016906/127346686-61e183c7-82ab-4ab6-81f9-fa16b08e7cd8.png">

<img width="947" alt="portfolio2-2" src="https://user-images.githubusercontent.com/70016906/127346706-7935a618-07bf-48d7-87ca-b8163894aee1.png">

#### 使用技術

* React 17.0.2
* Node.js 12.18.3
* MySQL 5.7.31
* JavaScript

#### データベース

|Column|Type|Options|
| :---: | :---: | :---: |
| id | int(11) |null:false|
| videoId | varchar(12) |null:false|
| tag | varchar(20) |null:false|

#### ライブラリ
* axios 0.21.1
* mysql 2.18.1
* youtube-api-v3-search
* react-youtube

#### 機能
* タグ登録機能(Axios)
* 検索機能
