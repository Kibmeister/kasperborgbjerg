module.exports = {
  chainWebpack: (config) => {
    config.module.rule('svg').uses.clear()
  
    config.module
      .rule('svg')
      .test(/\/svg\/pics\/.*\.svg$/)
      .use('vue-svg-loader')
        .loader('vue-svg-loader')
        .end()
  
    config.module
      .rule('svg-file')
      .test(/\/svg\/headerButton\/.*\.svg$/)
      .use('file-loader')
        .loader('file-loader')
        .end()
  }
}
