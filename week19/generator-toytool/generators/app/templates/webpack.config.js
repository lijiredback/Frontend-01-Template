module.exports = {
    entry: './src/main.js',
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
            }
        ]
    },
    plugins: [
        new (require('html-webpack-plugin'))
    ],
    mode: 'development',
    optimization: {
        minimize: false
    },
    devServer: {
        open: true,
        compress: false,
        contentBase: './src'
    }
}