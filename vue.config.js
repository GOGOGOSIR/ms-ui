const path = require('path')

console.log(path.resolve(__dirname, './'))
module.exports = {
    publicPath: './',

    configureWebpack: {
        resolve: {
            alias: {
                'ms-ui': path.resolve(__dirname, './main')
            }
        }
    }
}