var gulp    = require('gulp'),
    plumber = require('gulp-plumber'),
    uglify  = require('gulp-uglifyjs'),
    concat  = require('gulp-concat'),
    minify  = require('gulp-minify-css'),
    watch   = require('gulp-watch'),
    cached  = require('gulp-cached')
;

var js = {
    ios     : [
        'js/zepto/zep.js',
        'js/zepto/ev.js',
        'js/zepto/aj.js',
        'js/tt/ppu.js',
        'js/tt/cm.js',
        'js/fc.js',
        'js/md.js',
        'js/bt.js',
    ],
    android : [
        'js/zepto/zep.js',
        'js/zepto/ev.js',
        'js/zepto/aj.js',
        'js/tt/ppu.js',
        'js/tt/cm.js',
        'js/fc.js',
        'js/md.js',
        'js/bt.js',
    ],
    pc      : [
        'js/zepto/zep.js',
        'js/zepto/ev.js',
        'js/zepto/aj.js',
        'js/tt/ppu.jp',
        'js/tt/cm.jp',
        'js/fc.js',
        'js/md.js',
        'js/btn_a.js',
    ],
};


var css = {
    ios     : [
        'css/ios/tt/pp.css',
        'css/ios/ba.css',
        'css/ios/d/tc.css'
    ],
    android : [
        'css/android/tt/pp.css',
        'css/android/ba.css',
        'css/android/d/tc.css'
    ],
    pc      : [
        'css/ios/mn.css',
        'css/ios/tt/pp.css',
        'css/ios/ba.css',
        'css/ios/d/tc.css'
    ]
};



gulp.task('uglifyjs', function() {
    for (var i in js) {
        gulp.src(js[i])
            .pipe(cached('uglify'))
            .pipe(plumber())
            .pipe(uglify('tt.'+i+'.min.js'))
            .pipe(plumber.stop())
            .pipe(gulp.dest('./dest/js'))
        ;
    }
});


gulp.task('minifycss', function() {
    for (var i in css) {
        gulp.src(css[i])
            .pipe(cached('minify'))
            .pipe(plumber())
            .pipe(minify())
            .pipe(concat('style.'+i+'.min.css'))
            .pipe(plumber.stop())
            .pipe(gulp.dest('./dest/css'))
        ;
    }
});

gulp.task('watcher', function() {
    var _js = [], _css = [];

    for (var i in js) {
        _js = _js.concat(js[i]);
    }
    for (var i in css) {
        _css = _css.concat(css[i]);
    }
    _js = _js.filter(function(x,i,self) {
        return self.indexOf(x) === i;
    });
    _css = _css.filter(function(x,i,self) {
        return self.indexOf(x) === i;
    });

    for (var i in _js) {
        gulp.watch(_js[i], function(e) {
            gulp.run('uglifyjs');
        });
    }
    for (var i in _css) {
        gulp.watch(_css[i], function(e) {
            gulp.run('minifycss');
        });
    }

});

gulp.task('default',['uglifyjs', 'minifycss', 'watcher'], function() {
});
