module.exports = {
    devServer: {
        port: 8088,
        proxy: {
            '/api': {
                target: 'http://localhost:3000' // 개발서버
            }
        }
    }
}