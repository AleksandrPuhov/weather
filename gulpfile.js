const gulp = require('gulp');
const clean = require('./gulp/tasks/clean');
const serverWatch = require('./gulp/tasks/dev-server');
const scripts = require('./gulp/tasks/scripts');
const styles = require('./gulp/tasks/styles');
const fonts = require('./gulp/tasks/fonts');
const favicon = require('./gulp/tasks/favicon');
const imageMinify = require('./gulp/tasks/imageMinify');
const pug = require('./gulp/tasks/pug');
const spriteSVG = require('./gulp/tasks/spriteSVG');
const libsJS = require('./gulp/tasks/libsJS');

const dev = gulp.parallel(
    pug,
    scripts,
    styles,
    imageMinify,
    spriteSVG,
    fonts,
    favicon
    //    libsJS
);

exports.default = gulp.series(clean, dev, serverWatch);
