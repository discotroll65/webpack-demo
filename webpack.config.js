const path = require('path');

module.exports = {
    //entry: './src/index.js',
    entry: './src/entry.jsx',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules: [
                // JavaScript/JSX Files
                {
                  test: [/\.jsx$/],
                  exclude: /node_modules/,
                  use: [
                      {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-react']

                        }
                      }
                    ]
                }
        ]
    }

}