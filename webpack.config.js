module.exports = {
    entry:'./main.js',//指定入口文件
    output : {
        path:__dirname,
        filename:'boundle.js'//输出文件
    },
    module:{
    	loaders:[
    		{test:/\.vue$/,loader:'vue'},//将.vue文件通过vue-loader变成正常代码
    		{test:/\.js$/,loader:"babel",exclude:/node_modules/},//将除了node_modules文件夹下的.js文件通过babel转换成兼容代码
    	]
    },
    //配置ES6编译环境
    babel:{
    	presets:['es2015'],
    	plugins:['transform-runtime']//每次改完代码时时编译插件
    }
}