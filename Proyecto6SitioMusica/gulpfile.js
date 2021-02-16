const { series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass');

//funcion que compila SASS
function css(){
    return src('src/scss/app.scss')
        .pipe(sass())
        .pipe(dest('./build/css'))
}

function minificarCss(){
    return src('src/scss/app.scss')
        .pipe(sass({
            outputStyle: "compressed"
        }))
        .pipe(dest('./build/css'))
}

function watchArchivos(){
    watch('src/scss/**/*.scss', css) //Al utilizar el *, le estamos indicando que escuche a todos los archivos de extensión scss que se encuentren en la carpeta
}

exports.css = css;
exports.minificarCss = minificarCss;
exports.watchArchivos = watchArchivos;