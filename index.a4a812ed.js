function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=a),a.register("hgmNe",(function(t,n){e(t.exports,"default",(function(){return o}));var r=a("459vf");const i={notificationEl:document.querySelector(".text-error")};var o={createFilmCardMarkup:function(e){try{return e.map((({poster_path:e,title:t,original_title:n,name:a,genre_ids:i,release_date:o,first_air_date:l,vote_average:s})=>{return`<div class="film__card">\n          <img class="film-card__image" src="${null===e?"https://cdn.pixabay.com/photo/2019/04/12/19/23/film-35mm-4122911_960_720.jpg":"https://image.tmdb.org/t/p/w500"+e}" alt="${t}" loading="lazy" title="Click to enlarge"/>\n          <div class="film-card__features-wrap">\n            <p class="film-card__title">${t||n||a}</p>\n            <div class="film-card__tech-wrap">\n              <p class="film-card__features">${(0,r.findGenreById)(i)}<span class="film-card__features-mark"> |</span></p>\n              <p class="film-card__date">${c=o||l,c?c.slice(0,4):""}</p>\n              <p class="film-card__rating">${Math.round(10*s)/10}</p>\n            </div>\n          </div>\n        </div>\n        `;var c})).join("")}catch(e){console.log(e.message),i.notificationEl.textContent="Sorry, something going wrong... Please try again.";setTimeout((()=>{i.notificationEl.textContent=""}),2e3)}}}})),a.register("392Er",(function(t,n){function r(){const e=document.querySelectorAll(".film-card__rating");for(const t of e)t.classList.add("elem-isHidden")}e(t.exports,"hideElement",(function(){return r}))}));var i=a("2shzp");var o=a("hgmNe"),l=a("392Er"),s=a("jkVf4");const c={filmGalleryContainer:document.querySelector(".film-container")},d=new class{async fetchPopFilms(){const e=`https://api.themoviedb.org/3/trending/movie/day?api_key=3c2d3d1a4a9318a7ef02a0fdedccb03f&page=${this.page}`,{data:{results:t}}=await i.default.get(e);return console.log(e),t}icrementPage(){this.page+=1}resetPage(){this.page=1}constructor(){this.page=1}};window.addEventListener("load",(function(e){d.fetchPopFilms().then((e=>{!function(e){(0,s.saveCurrentFilmsToLocal)(e),c.filmGalleryContainer.insertAdjacentHTML("beforeend",o.default.createFilmCardMarkup(e)),(0,l.hideElement)()}(e)}))}));
//# sourceMappingURL=index.a4a812ed.js.map
