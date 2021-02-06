const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');
const imagemin = require('gulp-imagemin');

const svgSpriteModule = () =>
    gulp
        .src('src/assets/images/sprite/**/*.svg')
        .pipe(
            imagemin([
                imagemin.svgo({
                    plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
                }),
            ])
        )
        .pipe(
            svgSprite({
                mode: {
                    symbol: {
                        sprite: 'sprite.svg',
                    },
                },
            })
        )
        .pipe(gulp.dest('dist/assets/images/sprite'));

module.exports = svgSpriteModule;
