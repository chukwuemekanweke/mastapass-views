const { watch, src, dest } = require('gulp');
const minify = require('gulp-uglifycss');
const uglify = require('gulp-minify');
const concat = require('gulp-concat');


function minifyCss(done) {
  src('assets/css/*.css')
    .pipe(concat('style.min.css'))
    .pipe(minify())
    .pipe(dest('assets'))

  done()
}

function minifyJs(done) {
  src('assets/js/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(dest('assets'))

  done()
}

exports.default = function (done) {

  watch('assets/css/*.css', { ignoreInitial: false }, minifyCss)
  watch('assets/js/*.js', { ignoreInitial: false }, minifyJs)

  done()

}