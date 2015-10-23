var gulp        = require('gulp'),
    gutil       = require('gulp-util'),
    del         = require('del'),
    include     = require('gulp-include'),
    concat      = require('gulp-concat'),
    addsrc      = require('gulp-add-src'),
    plumber     = require('gulp-plumber'),
    notify      = require('gulp-notify'),
    sass        = require('gulp-sass'),
    coffee      = require("gulp-coffee"),
    jade        = require('gulp-jade'),
    bourbon     = require('node-bourbon').includePaths,
    neat        = require('node-neat').includePaths,
    imagemin    = require('gulp-imagemin'),
    svgSymbols  = require('gulp-svg-symbols'),
    glob        = require('glob'),
    gulpicon    = require('gulpicon/tasks/gulpicon'),
    browserSync = require('browser-sync');

var paths = {
  coffee:       'source/javascripts/application.coffee',
  jsvendor:     'source/javascripts/vendor/*.js',
  jspolyfills:  'source/javascripts/polyfills/*',
  sass:         'source/stylesheets/**/*.scss',
  images:       'source/images/*',
  icons:        'source/icons/svg/*.svg',
  jade:         'source/styleguide/*.jade',
  jadePartials: 'source/partials/*.jade'
}

// STYLES
// ----------------------------------------
gulp.task('sass', function () {
  gulp.src(paths.sass)
    .pipe(sass({
      includePaths: neat
    }).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.reload({stream: true}))
});

// JADE
// ----------------------------------------
gulp.task('jade', function() {
  var YOUR_LOCALS = {};

  gulp.src(paths.jade)
    .pipe(plumber())
    .pipe(jade({
      locals: YOUR_LOCALS,
      pretty: true
    }))
    .on('error', notify.onError())
    .on('error', function(err) {
      console.log("Error:", err);
    })
    .pipe(gulp.dest('./dist/'))
    .pipe(browserSync.reload({stream: true}))
});

// JS
// ----------------------------------------
gulp.task('js:coffee', function() {
  gulp.src(paths.coffee)
    .pipe(include())
    .pipe(coffee())
    .pipe(addsrc.prepend(paths.jsvendor))
    .pipe(concat("application.js"))
    .pipe(gulp.dest('./dist/js'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('js:polyfills', function() {
  gulp.src(paths.jspolyfills)
    .pipe(gulp.dest('./dist/js/polyfills'))
});


// IMAGES
// ----------------------------------------
gulp.task('imagemin', function () {
  gulp.src(paths.images)
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}]
    }))
    .pipe(gulp.dest('dist/images'));
});

gulp.task('svgmin', function () {
  gulp.src(paths.icons)
    .pipe(imagemin({
      svgoPlugins: [{removeViewBox: false}]
    }))
    .pipe(gulp.dest('dist/images'));
});

gulp.task('svgsprite', function () {
  gulp.src(paths.icons)
    .pipe(svgSymbols({
      id:     'icon--%f',
      title:  'icon %f',
      templates: ['source/icons/templates/icon-sprite.svg']
    }))
    .pipe(gulp.dest('dist/images/icons'));
});

var gulpiconFiles = glob.sync(paths.icons)
    gulpiconOptions = {
      dest: 'dist/images/icons',
      cssprefix: '.icon--',
      pngpath: "images/icons/png",
      pngfolder: 'png',
      previewhtml: "../../../source/styleguide/icons.jade",
      template: 'source/icons/templates/_icons_stylesheet.hbs',
      previewTemplate: 'source/icons/templates/_icons_preview.hbs'
    };

gulp.task("gulpicon", gulpicon(gulpiconFiles, gulpiconOptions));

gulp.task("gulpiconCleanup", function () {
  del('dist/images/icons/*.js');
});

// Icon workflow
gulp.task('icons', ['cleanIcons', 'imagemin', 'svgsprite', 'gulpicon', 'gulpiconCleanup']);

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./dist/"
        }
    });
});

// Watch for file changes
// ----------------------------------------
gulp.task('watch', function () {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.icons, ['icons']);
  gulp.watch(paths.coffee, ['coffee']);
  gulp.watch([paths.jade, paths.jadePartials], ['jade']);
});

// Clean all dist files
// ----------------------------------------
gulp.task('clean', function () {
  return del([
    'dist/css/**/*',
    'dist/js/**/*',
    'dist/images/**/*',
    'dist/**/*.html'
  ]);
});

gulp.task('cleanIcons', function () {
  del([
    'dist/images/icons/*',
    'dist/css/icons/*',
  ]);
});

// Default & build tasks
// ----------------------------------------
gulp.task('default', ['clean', 'build'], function() {
  gulp.start('browser-sync', 'watch');
});

gulp.task('build', ['clean'], function() {
  gulp.start('icons', 'imagemin', 'sass', 'js:coffee', 'js:polyfills', 'jade');
});
