# testgulp
js、cssのミニファイ化

使用までの手順は

#### 1. nodejsを入れる
　┗ npm(node package manager)が使えるか確認する
`npm -v`
でバージョン情報確認できればOK

#### 2. gulpのインストール
`sudo npm install --global gulp`
Macの場合はsudoが必要

/destの中で再度ローカルインストール
`npm install -D gulp`

`gulp -v`
でバージョン情報確認できればOK

#### 3. /destの中でgulpモジュール群をnpmコマンドでインストールする
　┗ 
`npm install --save-dev gulp gulp-plumber gulp-uglifyjs gulp-concat gulp-minify-css gulp-watch gulp-cached`

　　　┗  同ディレクトリに「node_modules」というディレクトリができているか確認する(ll node_modules でモジュールが存在しているか確認)

#### 4. 作業ディレクトリでgulpコマンドを実行
　┗ 
`gulp`

#### 5. /dest配下にコンパイルされたデータが保存される

#### 6. gulpを終了する場合は「ctr C」



windowsの場合は下記を参照（実施済）

<http://qiita.com/59naga/items/ec49758921a0030add20>
