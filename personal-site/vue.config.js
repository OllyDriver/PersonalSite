const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import "./scss/_colours.scss";
        @import "./scss/_global.scss";
        `
      }
    }
  },
  configureWebpack: {
    cache: true,
    devtool: 'source-map',
    plugins: [new NodePolyfillPlugin()],
    resolve: {
      fallback: {
        fs: false,
        net: false,
        child_process: false
      }
    }
  }
})
