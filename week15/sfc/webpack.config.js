module.exports = {
    entry: './main.js',
    module: {
        rules: [
            {
                test: /\.js$/, 
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            // pargma 就是个函数名
                            ['@babel/plugin-transform-react-jsx', { pragma: 'createElement' }]
                        ]
                    }
                }
            },
            {
                test: /\.view/,
                use: {
                    loader: require.resolve('./myloader.js')
                }
            }
        ]
    },
    mode: 'development',
    optimization: {
        minimize: false
    }
}