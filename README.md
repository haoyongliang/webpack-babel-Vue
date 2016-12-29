# Vue+webpack+babel环境搭建

## 1.首先要了解Vue项目结构

```bash
简单的目录结构:
    |-index.html
    |-main.js    入口文件
    |-App.vue    vue文件，官方推荐命名法
    |-package.json    工程文件(项目依赖、名称、配置)npm init --yes 生成
    |-webpack.config.js    webpack配置文件
```

## 2.在webpack.config.js中指定入口文件和输出文件

```javascript
module.exports = {
  entry:'./main.js',//指定入口文件
  output : {
        path:__dirname,
        filename:'boundle.js'//输出文件
  }
}
```

## 3.在index.html中引入生成的boundle.js

```html
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <title>Title</title>
</head>
<body>
 <app></app>
 <script src="boundle.js"></script>
</body>
</html>
```

## 4.安装环境

### a.webpack安装配置
```bash
    cnpm install webpack --save-dev  //不带服务器版本
    cnpm install webpack-dev-server --save-dev //带服务器版本
```
**注意** 两个都要安装

在package.json中配置开发命令
```bash
"scripts":{
  "dev" : "webpack-dev-server --inline --hot --port 8082"
}
```

--inline:文件修改后则重启
--hot 模块热载
--port指定端口
### b.将App.vue 变成正常代码

```bash
cnpm install vue-loader@8.5.4 --save-dev
cnpm install vue-html-loader --save-dev
cnpm install css-loader --save-dev
cnpm install vue-style-loader --save-dev
cnpm install vue-hot-reload-api@1.3.2 --save-dev
```

vue-hot-reload-api 每次改完后验证代码有没有错误功能
在webpack.config.js中添加

```bash
module:{
  loaders:[
    {test:/\.vue$/,loader:'vue'},//将.vue文件通过vue-loader变成正常代码
    {test:/\.js$/,loader:"babel",exclude:/node_modules/},//将除了node_modules文件夹下的.js文件通过babel转换成兼容代码
  ]
}
```

### c.配置babel编译环境
安装babel相关程序
```bash
cnpm install babel-loader --save-dev
cnpm install babel-core --save-dev
cnpm install babel-plugin-transform-runtime --save-dev
cnpm install babel-preset-es2015 --save-dev
cnpm install babel-runtime --save-dev
```

在webpack.config.js中添加

```bash
//配置ES6编译环境
babel:{
  presets:['es2015'],
  plugins:['transform-runtime']//每次改完代码时时编译插件
}
```


### d.安装Vue

```bash
cnpm install vue@1.0.28 --save
```


## 5.在App.vue中添加代码

```bash
<template>
    <h1>welcome Vue</h1>
</template>
<script>
    
</script>
<style>
    body{
        background: #abc
    }
</style>
```
## 6.在入口文件main.js中添加代码

```bash
import Vue from 'vue';
import App from './App.vue';

new Vue({
    el:"body",
    components:{
        app:App
    }
});
```

## 7.配置项目规范约束和git忽略文件
.gitignore
.editorconfig