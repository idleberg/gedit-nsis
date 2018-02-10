// Dependencies
var gulp = require('gulp'),
    debug = require('gulp-debug'),
    xmlVal = require('gulp-xml-validator');

// File patterns
var xmlFiles = [
    'nsis.lang'
];

// Validate XML
gulp.task('lint:xml', gulp.series( (done) => {
  gulp.src(xmlFiles)
    .pipe(debug({title: 'xml-validator'}))
    .pipe(xmlVal());
  done();
}));

// Available tasks
gulp.task('lint', gulp.parallel('lint:xml', (done) => {
  done();
}));