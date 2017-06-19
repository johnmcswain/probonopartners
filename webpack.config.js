const path = require('path');

const config = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, './src/js/output/'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {test: /\.js$/, use: 'raw-loader'}
        ]
    }
};

module.exports = config;