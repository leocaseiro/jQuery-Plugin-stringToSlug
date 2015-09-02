var gulp   = require( 'gulp' ),
    del    = require( 'del' ),
    Karma  = require( 'karma' ).Server,
    $      = require( 'gulp-load-plugins' )( { lazy: true } ),
    config = require( './gulp.config.js' )();

// List Tasks by default
gulp.task( 'default', $.taskListing );

gulp.task( 'hint', function() {
    return gulp.src( config.jsSrc )
        .pipe( $.plumber() )
        .pipe( $.jshint() )
        .pipe( $.jshint.reporter( 'jshint-stylish', { verbose: true } ) )
        .pipe( $.jscs() )
} );

gulp.task( 'minify', [ 'hint', 'clean-javascripts' ], function() {
    return gulp.src( config.jsSrc )
        .pipe( $.plumber() )
        .pipe( $.uglify( { mangle: true } ) )
        .pipe( $.rename( { extname: '.min.js' } ) )
        .pipe( gulp.dest( config.jsDest ) )
} );

gulp.task( 'tests', [ 'minify' ], function() {
    new Karma( {
       configFile: __dirname + '/karma.conf.js',
       singleRun: true
   } ).start();
} );

gulp.task( 'build', [ 'tests' ] );

gulp.task( 'clean-javascripts', function() {
    del( config.jsDest );
} );

gulp.task( 'watcher', [ 'bower', 'minify' ], function() {
    gulp.watch( [ config.jsSrc ], [ 'minify' ] );
} );

function clean( path, done ) {
    del( path, done );
}

// Make sure all libraries are up to date
gulp.task( 'bower', function() {
    $.run( 'bower install' ).exec();
} );
