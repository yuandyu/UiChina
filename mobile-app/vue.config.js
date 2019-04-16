module.exports = {
  productionSourceMap: false,

  css: {
    loaderOptions: {
      css: {
        // options here will be passed to css-loader
      },
      postcss: {
        // options here will be passed to postcss-loader
        plugins: [require('postcss-px2rem')({
          remUnit: 37.5
        })]
      }
    }
  },

  lintOnSave: undefined
};
