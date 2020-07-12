const { watch, src, dest } = require('gulp');
const minify = require('gulp-uglifycss');
const concat = require('gulp-concat');


function minifyCss(done) {
  src('assets/css/*.css')
    .pipe(concat('style.min.css'))
    .pipe(minify())
    .pipe(dest('assets/css'))

  done()
}

exports.default = function (done) {

  watch('assets/css/*.css', { ignoreInitial: false }, minifyCss)

  done()

}