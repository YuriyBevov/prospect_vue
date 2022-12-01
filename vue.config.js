const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/styles/_main.scss";`
      }
    }
  },

  publicPath: process.env.NODE_ENV === 'production'
    ? '/prospect_vue/dist/'
    : '/prospect_vue/dist/'
});
