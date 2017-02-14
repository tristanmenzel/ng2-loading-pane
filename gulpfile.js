var gulp = require('gulp'),
    sass = require('gulp-angular2-embed-sass'),
    html = require('gulp-angular-embed-templates'),
    bump = require('gulp-bump'),
    del = require('del'),
    exec = require('child_process').exec;

var tsConfig = require('./tsconfig.json');


gulp.task('prebuild', ['clean'], function(){
    return gulp.src([
        'src/**/*.ts'
    ]).pipe(sass())
        .pipe(html())
        .pipe(gulp.dest('build'));
});



gulp.task('build', ['prebuild'], function (cb) {
    exec('"node_modules/.bin/ngc" -p tsconfig.json', function (err, stdout, stderr) {
        console.log(stdout);
        console.error(stderr);
        console.log('\x1b[32mngc compilation complete\x1b[0m');
        cb(err);
    });
});

gulp.task('clean', function () {
    return del('dist');
});

gulp.task('prepublish', ['build'], function () {
    // It seems npm has already cached the package.json by the time
    // this runs so the version isn't used till next publish but as long
    // as it runs every time it still 'works'. The package.json version
    // simply reflects the 'next' version.
    return gulp.src('./package.json')
        .pipe(bump())
        .pipe(gulp.dest('./'));
});