var path = require('path');
module.exports = {
    entry: [
        'babel-polyfill',
        './app/src/index.js'
    ],
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        root: path.join(__dirname)
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react', 'stage-2']
                },
                include: [
                    path.resolve(__dirname, 'app/src'),
                    path.resolve(__dirname, 'app/test')
                ]
            }
        ]
    }
}
