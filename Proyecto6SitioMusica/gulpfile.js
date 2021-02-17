const { series, src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');
const concat = require('gulp-concat');

//Paths
const paths = {
    imagenes: ('src/img/**/*'),
    scss: ('src/scss/**/*.scss'),
    js: ('src/js/**/*.js')
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

function javaScript(){
    return src(paths.js)
    .pipe(concat('bundle.js'))
    .pipe(dest('./build/js'))
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
    watch(paths.scss, css); //Al utilizar el *, le estamos indicando que escuche a todos los archivos de extensión scss que se encuentren en la carpeta
    watch(paths.js, javaScript);
}

exports.css = css;
exports.minificarCss = minificarCss;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.javaScript = javaScript;
exports.watchArchivos = watchArchivos;