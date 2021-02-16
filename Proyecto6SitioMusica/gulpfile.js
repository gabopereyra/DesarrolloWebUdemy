const { series, src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');

//Paths
const paths = {
    imagenes: ('src/img/**/*'),
    scss: ('src/scss/**/*.scss')
}

//funcion que compila SASS
function css(){
    return src(paths.scss)
        .pipe(sass())
        .pipe(dest('./build/css'))
}

function minificarCss(){
    return src(paths.scss)
        .pipe(sass({
            outputStyle: "compressed"
        }))
        .pipe(dest('./build/css'))
}

function imagenes(){
    return src(paths.imagenes)
    .pipe(imagemin())
    .pipe(dest('./build/img'))
    .pipe(notify({message: 'Imagen minificada'}));
}

function versionWebp(){
    return src('src/img/**/*')
    .pipe(webp())
    .pipe(dest('./build/img'))
    .pipe(notify({message: 'Imagen webp'}));
}

function watchArchivos(){
    watch(paths.scss, css) //Al utilizar el *, le estamos indicando que escuche a todos los archivos de extensión scss que se encuentren en la carpeta
}

exports.css = css;
exports.minificarCss = minificarCss;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.watchArchivos = watchArchivos;