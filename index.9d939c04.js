!function(){function e(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},r={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in a)return a[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},n.parcelRequired7c6=i),i.register("7PxVc",(function(t,n){e(t.exports,"default",(function(){return o}));var a=i("8y4hi"),r={notificationEl:document.querySelector(".text-error")};var o={createFilmCardMarkup:function(e){try{return e.map((function(e){var t,n=e.poster_path,r=e.title,i=e.original_title,o=e.name,c=e.genre_ids,l=e.release_date,s=e.first_air_date,d=e.vote_average;return'<div class="film__card">\n          <img class="film-card__image" src="'.concat(null===n?"https://cdn.pixabay.com/photo/2019/04/12/19/23/film-35mm-4122911_960_720.jpg":"https://image.tmdb.org/t/p/w500"+n,'" alt="').concat(r,'" loading="lazy" title="Click to enlarge"/>\n          <div class="film-card__features-wrap">\n            <p class="film-card__title">').concat(r||i||o,'</p>\n            <div class="film-card__tech-wrap">\n              <p class="film-card__features">').concat((0,a.findGenreById)(c),'<span class="film-card__features-mark"> |</span></p>\n              <p class="film-card__date">').concat((t=l||s,t?t.slice(0,4):""),'</p>\n              <p class="film-card__rating">').concat(Math.round(10*d)/10,"</p>\n            </div>\n          </div>\n        </div>\n        ")})).join("")}catch(e){console.log(e.message),r.notificationEl.textContent="Sorry, something going wrong... Please try again.";setTimeout((function(){r.notificationEl.textContent=""}),2e3)}}}})),i.register("1caSa",(function(t,n){function a(){var e=document.querySelectorAll(".film-card__rating"),t=!0,n=!1,a=void 0;try{for(var r,i=e[Symbol.iterator]();!(t=(r=i.next()).done);t=!0){r.value.classList.add("elem-isHidden")}}catch(e){n=!0,a=e}finally{try{t||null==i.return||i.return()}finally{if(n)throw a}}}e(t.exports,"hideElement",(function(){return a}))}));var o=i("bpxeT"),c=i("8MBJY"),l=i("a2hTj"),s=i("2TvXO"),d=i("dIxxU"),u=function(){"use strict";function e(){t(c)(this,e),this.page=1}return t(l)(e,[{key:"fetchPopFilms",value:function(){var e=this;return t(o)(t(s).mark((function n(){var a,r,i;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="".concat("https://api.themoviedb.org/3/trending","/movie/day?api_key=").concat("3c2d3d1a4a9318a7ef02a0fdedccb03f","&page=").concat(e.page),t.next=3,d.default.get(a);case 3:return r=t.sent,i=r.data.results,console.log(a),t.abrupt("return",i);case 7:case"end":return t.stop()}}),n)})))()}},{key:"icrementPage",value:function(){this.page+=1}},{key:"resetPage",value:function(){this.page=1}}]),e}(),f=i("7PxVc"),p=i("1caSa"),m=i("3dnU7"),g={filmGalleryContainer:document.querySelector(".film-container")},_=new u;window.addEventListener("load",(function(e){_.fetchPopFilms().then((function(e){!function(e){(0,m.saveCurrentFilmsToLocal)(e),g.filmGalleryContainer.insertAdjacentHTML("beforeend",f.default.createFilmCardMarkup(e)),(0,p.hideElement)()}(e)}))}))}();
//# sourceMappingURL=index.9d939c04.js.map
