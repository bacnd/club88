var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function(done) {
    browserSync.init({
        server: {
            proxy: 'localhost:8010',
            baseDir: './',
            open: true,
            online: false,
            ghostMode: {
                scroll: true
            },
            logLevel: 'info', // 'debug', 'info', 'silent', 'warn'
            logConnections: false,
            logPrefix: 'Browser-Sync',
            notify: false
        }
    });
    done();
});

gulp.task('sass', function() {
    return gulp
        .src('./assets/sass/**/*.scss')
        .pipe(plumber({ errorHandler: notify.onError('<%= error.message %>') }))
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(sass().on('error', sass.logError)) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('./assets/css'))
        .pipe(
            browserSync.reload({
                stream: true
            })
        );
});

gulp.task('watch', ['sass', 'browserSync'], function() {
    gulp.watch('./assets/sass/**/*.scss', ['sass']);
    gulp.watch('./**/*.html', browserSync.reload);
    gulp.watch('./assets/js/**/*.js', browserSync.reload);
});

// skip if error occured
function swallowError(error) {
    console.log(error.toString());
    this.emit('end');
}

gulp.task('default', ['watch']);
