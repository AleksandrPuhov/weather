const gulp = require('gulp');
const argv = require('yargs').argv;
const webpack = require('webpack-stream');

const scriptsModule = () => {
    const mode = argv.prod ? 'production' : 'development';
    const devTool = argv.prod ? false : 'source-map';

    return gulp
        .src('src/assets/js/main.js')
        .pipe(
            webpack({
                mode: mode,
                devtool: devTool,
                output: {
                    filename: 'main.js',
                },
                module: {
                    rules: [
                        {
                            test: /\.js$/,
                            exclude: /(node_modules|bower_components)/,
                            use: [
                                {
                                    loader: 'babel-loader',
                                    options: {
                                        presets: ['@babel/preset-env'],
                                        plugins: [
                                            '@babel/plugin-transform-runtime',
                                            '@babel/plugin-proposal-class-properties',
                                        ],
                                    },
                                },
                            ],
                        },
                    ],
                },
            })
        )
        .pipe(gulp.dest('dist/assets/js/'));
};
module.exports = scriptsModule;
