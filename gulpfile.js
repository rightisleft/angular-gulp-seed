var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var jsfiles = ['*.js', 'src/**/*.js'];

var wiredep = require('wiredep').stream;
var nodemon = require('gulp-nodemon');

gulp.task('style', function () {
    gulp.src(jsfiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {
            verbose: true
        }))
        .pipe(jscs());
});

gulp.task('inject', function() {
    var inject = require('gulp-inject');
    var injectSrc = gulp.src(['./public/css/*.css', './public/js/*.js'], {read: false});
    var injectOptions = {
        ignorePath: 'public/'
    };

    var options = {
        bowerJson: require('./bower.json'),
        directory: './public/lib',
        ignorePath: '../../public/'
    };

    var src = gulp.src(['./src/views/*.ejs', './src/views/*.html'])
        .pipe(wiredep(options))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./src/views'));

    return src;
});

gulp.task('serve', ['style', 'inject'], function() {
    var options = {
        script: 'app.js',
        delayTime: 1,
        env: {
            'PORT': 5000
        },
        watch: ['*.ejs', '*.js', '*.css', 'src/**/*.js', 'src/**/*.ejs', 'public/**/*.css']
    };

    return nodemon(options)
        .on('restart', function(ev) {
            console.log('restarting...');
        });
});