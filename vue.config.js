module.exports = {
  devServer: {
    proxy: {
      '/v2': {
        target: 'https://api.douban.com'
      },
      '/api/v1': {
        target: 'https://cnodejs.org'
      }
    }
  },

  lintOnSave: true
}
