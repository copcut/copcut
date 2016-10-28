import gulp from 'gulp';
import babel from 'gulp-babel';
import nodemon from 'gulp-nodemon';

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
    const html = gulp.src('src/**/*.html')
    .pipe(gulp.dest(data.build));

    const handlebars = gulp.src('src/**/*.handlebars')
    .pipe(gulp.dest(data.build));
});

gulp.task('compile', ['js', 'html', 'css', 'images']);

gulp.task('server', ['compile'], () => {
    const stream = nodemon({
        script: data.build+'/server.js',
        watch: data.src,
        tasks: ['compile'],
        env: { 'NODE_ENV': 'development' }
    });

    return stream;
});