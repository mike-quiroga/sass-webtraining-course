'use strict';

// CommonJS -> packages!
const gulp = require( 'gulp' );
const sass = require( 'gulp-sass' );
const rename = require( "gulp-rename" );
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');

gulp.task( 'sass', () => {
	return gulp.src( './scss/main.scss' )
		.pipe(sourcemaps.init())
		.pipe( sass().on( 'error', sass.logError ) )
		.pipe( rename( "style.css" ) )
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(sourcemaps.write())
		.pipe( gulp.dest( './css' ) );
} );

gulp.task( 'sass:watch', () => {
	gulp.watch( './scss/**/*.scss', [ 'sass' ] );
} );