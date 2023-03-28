const gulp  = require('gulp'),
      sass  = require('gulp-sass')(require('sass')),
      pug   = require('gulp-pug'),
      sync  = require('browser-sync').create();

// Compile Pug to HTML
const views = () => {
  return gulp.src('src/pug/views/*.pug')
    .pipe(pug( { pretty: true } ))
    .pipe(gulp.dest('dist'))
    .pipe(sync.stream());
}


// Compile Sass/SCSS to CSS
const styles = () => {
  return gulp.src('src/sass/**/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('dist/assets/css'))
    .pipe(sync.stream());
}

// Copy JS files and folders to dist
const scripts = () => {
  return gulp.src('src/js/**/*.js')
    .pipe(gulp.dest('dist/assets/js'))
    .pipe(sync.stream());
}

// Watch for changes
const watch = () => {
  sync.init({
    server: {
      baseDir: './dist',
      port: 5000,
      notify: false
    }
  });
  gulp.watch('src/pug/views/**/*.pug', views);
  gulp.watch('src/sass/**/*.sass', styles);
  gulp.watch('src/js/**/*.js', scripts);
  gulp.watch('dist/**/*.*').on('change', sync.reload);
}

// Export tasks
exports.views = views;
exports.styles = styles;
exports.scripts = scripts;
exports.watch = watch;