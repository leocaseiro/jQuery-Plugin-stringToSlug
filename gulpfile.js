var gulp = require( 'gulp' ),
    args = require( 'yargs' ).argv,
    del = require( 'del' ),
    $ = require('gulp-load-plugins')({lazy: true} ),
    config = require('./gulp.config.js')(),
    build = false;

// List Tasks by default
gulp.task( 'default' , $.taskListing);

gulp.task( 'javascripts', function() {
    return gulp.src( './jquery.stringToSlug.js' )
        .pipe( $.jshint() )
        .pipe( $.jshint.reporter( 'jshint-stylish', { verbose: true } ) )
        .pipe( $.jscs() )
} );

gulp.task('clean-javascripts', function(done){
    $.if( args.build, clean(config.jsDirDest + '**/*.*', done) );
});

gulp.task('build', ['bower', 'clean-javascripts', 'javascripts'], function(done){
    return gulp.src( './jquery.stringToSlug.js' )
        .pipe( $.uglify( { mangle: true } ) )
        .pipe( $.rename( { extname: '.min.js' } ) )
        .pipe( gulp.dest( '.' ) )
});

gulp.task('watcher', ['bower', 'javascripts'], function() {
    gulp.watch([config.jsDir], ['javascripts']);
});

function clean(path, done) {
    del(path, done);
}

// Make sure all libraries are up to date
gulp.task( 'bower', function () {
    run( 'bower install' ).exec();
} );
