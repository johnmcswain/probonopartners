const path = require('path');

const config = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, './build/'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {test: /\.js$/, use: 'raw-loader'}
        ]
    }
};

module.exports = config;