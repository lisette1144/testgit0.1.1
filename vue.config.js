const { defineConfig } = require('@vue/cli-service')
module.exports = {
  devServer: {
    port: 8085, // your desired port number
    proxy: 'http://pm2.derive.co.th/',
  },
};
// module.exports = {
//   pwa: {
//       workboxOptions: {
//         exclude: [/_redirects/]
//       }
//     }
// }
// module.exports = {
//   publicPath: process.env.NODE_ENV === 'production'
//     ? '/ThailandAccessibleTourism/'
//     : '/'
// }