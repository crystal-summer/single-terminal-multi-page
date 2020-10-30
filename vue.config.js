'use strict'
const path = require('path')

module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'static',
    pages:{
        login:{
            // page 的入口，相当于单页面应用的 main.js ， 必需
            entry: path.join(__dirname, `./src/views/login/login.js`),
            // 模板来源，相当于单页面应用的 public/index.html，非必需，省略时默认与模块名一致
            template: path.join(__dirname, './src/views/login/login.html'),
            // 当使用 title 选项时，template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'gov Page',
            favicon: path.join(__dirname, './public/favicon.ico'),
            // 在这个页面中包含的块，默认情况下会包含提取出来的通用 chunk 和 vendor chunk。
            chunks:['chunk-vendors', 'chunk-common', 'login']
          },
        homePage:{
            entry: path.join(__dirname, `./src/views/homePage/homePage.js`),
            template: path.join(__dirname, './src/views/homePage/homePage.html'),
            title: 'gov Page',
            favicon: path.join(__dirname, './public/favicon.ico'),
            chunks:['chunk-vendors', 'chunk-common', 'homePage']
        }
    },
    lintOnSave: process.env.NODE_ENV === 'development',
    productionSourceMap: false,
    devServer: {
      port: '9001',
      open: true,
      overlay: {
        warnings: false,
        errors: true
      },
      proxy: {
            [process.env.VUE_APP_BASE_API]: {
                target: `http://10.1.1.139:8444`,
                changeOrigin: true, 
                pathRewrite: { 
                    ['^' + process.env.VUE_APP_BASE_API]: ''  
                }
            }
        }
    },
    chainWebpack(config){
        config
        .plugin('copy')
        .init((CopyWebpackPlugin) => new CopyWebpackPlugin([{
  
          from: path.resolve(__dirname, './static'),
          to: path.resolve(__dirname, './dist/static')
        }])).end()
    }
  }