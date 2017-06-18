const path = require('path');

const config = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'www/js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {test: /\.txt$/, use: 'raw-loader'}
        ]
    }
};

module.exports = config;