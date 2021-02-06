const gulp = require('gulp');
const server = require('browser-sync').create();
const scripts = require('./scripts');
const styles = require('./styles');
const imageMinify = require('./imageMinify');
const spriteSVG = require('./spriteSVG');
const pug = require('./pug');

const serverModule = () => {
    server.init({
        server: 'dist',
        cors: true,
    });

    gulp.watch(
        [
            'src/assets/images/common/**/*.{gif,png,jpg,svg,webp}',
            'src/assets/images/content/**/*.{gif,png,jpg,svg,webp}',
        ],
        gulp.series(imageMinify)
    ).on('change', server.reload);
    gulp.watch('src/assets/images/sprite/**/*.svg', gulp.series(spriteSVG)).on(
        'change',
        server.reload
    );
    gulp.watch('src/assets/styles/**/*.scss', gulp.series(styles)).on(
        'change',
        server.reload
    );
    gulp.watch('src/assets/js/**/*.js', gulp.series(scripts)).on(
        'change',
        server.reload
    );
    gulp.watch('src/pug/**/*.pug', gulp.series(pug));
    gulp.watch('dist/*.html').on('change', server.reload);
};

module.exports = serverModule;
