const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

const imageModule = () =>
    gulp
        .src([
            'src/assets/images/common/**/*.{gif,png,jpg,svg,webp}',
            'src/assets/images/content/**/*.{gif,png,jpg,svg,webp}',
        ])
        .pipe(
            imagemin([
                imagemin.gifsicle({ interlaced: true }),
                imagemin.mozjpeg({
                    quality: 75,
                    progressive: true,
                }),
                imagemin.optipng({ optimizationLevel: 5 }),
                imagemin.svgo({
                    plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
                }),
            ])
        )
        .pipe(gulp.dest('dist/assets/images/'));

module.exports = imageModule;
