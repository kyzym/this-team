!function(){function e(e){return e&&e.__esModule?e.default:e}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=a.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,a.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,a){n[e]=a},a.parcelRequired7c6=r),r.register("7PxVc",(function(e,a){var t,n,i,c;t=e.exports,n="default",i=function(){return l},Object.defineProperty(t,n,{get:i,set:c,enumerable:!0,configurable:!0});var o=r("8y4hi");var l={createFilmCardMarkup:function(e){return e.map((function(e){var a=e.poster_path,t=e.title,n=e.original_title,r=e.name,i=e.genre_ids,c=e.release_date,l=e.first_air_date,d=e.vote_average;return'<div class="film__card">\n          <img class="film-card__image" src="'.concat(null===a?"https://pixabay.com/get/g9b007b1f29e9adc0ae515b947bf22984ff721d4bc4a6c9569ee9e3e56c787e6fe6d0ccd309ad89af33b0973e7d3810b7aeb75335e9a93324c7a7b93a69f4f327_1280.jpg":"https://image.tmdb.org/t/p/w500"+a,'" alt="').concat(t,'" loading="lazy" title="Click to enlarge"/>\n          <div class="film-card__features-wrap">\n            <p class="film-card__title">').concat(t||n||r,'</p>\n            <div class="film-card__tech-wrap">\n              <p class="film-card__features">').concat((0,o.findGenreById)(i)||"",'<span class="film-card__features-mark"> |</span></p>\n              <p class="film-card__date">').concat(c.slice(0,4)||l.slice(0,4)||"",'</p>\n              <p class="film-card__rating">').concat(Math.round(10*d)/10,"</p>\n            </div>\n          </div>\n        </div>\n        ")})).join("")}}}));var i=r("bpxeT"),c=r("8MBJY"),o=r("a2hTj"),l=r("2TvXO"),d=r("dIxxU"),s=function(){"use strict";function a(){e(c)(this,a),this.page=1}return e(o)(a,[{key:"fetchPopFilms",value:function(){var a=this;return e(i)(e(l).mark((function t(){var n,r,i;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat("https://api.themoviedb.org/3/trending","/movie/day?api_key=").concat("3c2d3d1a4a9318a7ef02a0fdedccb03f","&page=").concat(a.page),e.next=3,d.default.get(n);case 3:return r=e.sent,i=r.data.results,console.log(n),e.abrupt("return",i);case 7:case"end":return e.stop()}}),t)})))()}},{key:"icrementPage",value:function(){this.page+=1}},{key:"resetPage",value:function(){this.page=1}}]),a}(),f=r("7PxVc"),u=r("f3gYz");function p(e){u.default.save("display-films",e)}var g={filmGalleryContainer:document.querySelector(".film-container")},m=new s;window.addEventListener("load",(function(e){console.log("Загрузка страницы и приход популярных фильмов с бэка:"),m.fetchPopFilms().then((function(e){!function(e){console.log(e),p(e),g.filmGalleryContainer.insertAdjacentHTML("beforeend",f.default.createFilmCardMarkup(e))}(e)}))}))}();
//# sourceMappingURL=index.bfa73147.js.map
