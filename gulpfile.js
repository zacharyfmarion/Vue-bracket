const gulp = require('gulp');
const concat = require('gulp-concat');
const minify = require('gulp-minify');
const cleanCss = require('gulp-clean-css');

gulp.task('pack-js', function() {
  return gulp
    .src(['js/vue-bracket.js'])
    .pipe(concat('vue-bracket.js'))
    .pipe(minify())
    .pipe(gulp.dest('build'));
});

gulp.task('pack-css', function() {
  return gulp
    .src(['css/*.css'])
    .pipe(concat('vue-bracket.css'))
    .pipe(cleanCss())
    .pipe(gulp.dest('build'));
});

gulp.task('default', ['pack-js', 'pack-css']);
