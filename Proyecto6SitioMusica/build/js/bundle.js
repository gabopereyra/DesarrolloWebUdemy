function navegacionFija(){const e=document.querySelector(".header");new IntersectionObserver((function(n){console.log(n[0]),n[0].isIntersecting?e.classList.remove("fijo"):e.classList.add("fijo")})).observe(document.querySelector(".imagen"))}function scrollNav(){document.querySelectorAll(".navegacion-principal a").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();document.querySelector(e.target.attributes.href.value).scrollIntoView({behavior:"smooth"})}))}))}function crearGaleria(){const e=document.querySelector(".galeria-imagenes");for(let n=1;n<=12;n++){const t=document.createElement("IMG");t.src=`build/img/thumb/${n}.webp`,t.dataset.imagenId=n,t.onclick=mostrarImagen;const o=document.createElement("LI");o.appendChild(t),e.appendChild(o)}}function mostrarImagen(e){const n=parseInt(e.target.dataset.imagenId),t=document.createElement("IMG");t.src=`build/img/grande/${n}.webp`;const o=document.createElement("DIV");o.appendChild(t),o.classList.add("overlay"),o.onclick=function(){o.remove()};const c=document.createElement("P");c.textContent="X",c.classList.add("btn-cerrar"),c.onclick=function(){o.remove()},o.appendChild(c);const a=document.querySelector("body");a.appendChild(o),a.classList.add("fijar-body")}document.addEventListener("DOMContentLoaded",(function(){scrollNav(),navegacionFija()})),document.addEventListener("DOMContentLoaded",(function(){crearGaleria()}));
//# sourceMappingURL=bundle.js.map
