import gulp from 'gulp'
import babel from 'gulp-babel'
import nodemon from 'gulp-nodemon'
import source from 'vinyl-source-stream'
import buffer from 'vinyl-buffer'
import browserify from 'browserify'
import babelify from 'babelify'
import sourcemaps from 'gulp-sourcemaps'

const data = {
    src: 'src',
    build: 'build'
}

gulp.task('images', () => {
    const png = gulp.src('src/**/*.png')
    .pipe(gulp.dest(data.build));

    const jpg = gulp.src('src/**/*.jpg')
    .pipe(gulp.dest(data.build));
})

gulp.task('css', () => {
    const stream = gulp.src('src/**/*.css')
    .pipe(gulp.dest(data.build));
})

gulp.task('js', () => {
    const stream = gulp.src('src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest(data.build));
});

gulp.task('html', () => {
    const stream = gulp.src('src/**/*.html')
    .pipe(gulp.dest(data.build));
    return stream;
});

gulp.task('browserify', () => {
    const stream = browserify({
        entries: 'src/app/app.js',
        debug: true,
    })
    .transform(babelify, {presets: ["es2015", "react"]})
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(data.build+'/app'));

    return stream;
});

gulp.task('compile', ['js', 'browserify', 'html', 'css', 'images']);

gulp.task('server', ['compile'], () => {
    const stream = nodemon({
        script: data.build+'/server/server.js',
        watch: data.src,
        tasks: ['compile'],
        env: { 'NODE_ENV': 'development' }
    });

    return stream;
});