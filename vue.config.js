module.exports = {
    css: {
        /** modules: true,
        loader: "less-loader", **/
        loaderOptions:{
          less: { 
            /**modifyVars: {
                'primary-color': 'green',
                'link-color': '#1DA57A',
                'border-radius-base': '2px',
            }, **/
            javascriptEnabled: true 
          }
        }
    },
    configureWebpack: {
      externals: {
        "BMap": "BMap"
      }
    }
}

/**  
由于cli3隐藏了webpack配置文件，所以我们需要在根目录创建一个vue.config.js文件，并写入下面代码
module.exports = {
  configureWebpack: {
    externals: {
      "BMap": "BMap"
    }
  }
}

<!-- externals: {
      'BMap': 'BMap',
      'BMap_Symbol_SHAPE_POINT': 'BMap_Symbol_SHAPE_POINT'
    } -->

**/