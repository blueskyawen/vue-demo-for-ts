module.exports = {
  baseUrl: '/',
  outputDir: 'dist',
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-demo-for-ts/' : '/',
  lintOnSave: true,
  productionSourceMap: false,
  runtimeCompiler: true,
  devServer: {
    port: 5000
  }
}
