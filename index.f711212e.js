var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r);var a=r("2shzp");var i=r("hgmNe"),o=r("392Er"),l=r("jkVf4");const d={filmGalleryContainer:document.querySelector(".film-container")},s=new class{async fetchPopFilms(){const e=`https://api.themoviedb.org/3/trending/movie/day?api_key=3c2d3d1a4a9318a7ef02a0fdedccb03f&page=${this.page}`,{data:{results:t}}=await a.default.get(e);return console.log(e),t}icrementPage(){this.page+=1}resetPage(){this.page=1}constructor(){this.page=1}};window.addEventListener("load",(function(e){s.fetchPopFilms().then((e=>{!function(e){(0,l.saveCurrentFilmsToLocal)(e),d.filmGalleryContainer.insertAdjacentHTML("beforeend",i.default.createFilmCardMarkup(e)),(0,o.hideElement)()}(e)}))}));
//# sourceMappingURL=index.f711212e.js.map
