!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var i=o("bpxeT"),a=o("8MBJY"),c=o("a2hTj"),u=o("2TvXO"),l=o("dIxxU"),s=function(){"use strict";function t(){e(a)(this,t),this.searchQuery="",this.page=1}return e(c)(t,[{key:"fetchFilms",value:function(){var t=this;return e(i)(e(u).mark((function n(){var r,o;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat("https://api.themoviedb.org/3/search/movie","?api_key=").concat("3c2d3d1a4a9318a7ef02a0fdedccb03f","&query=").concat(t.searchQuery,"&page=").concat(t.page),e.next=3,l.default.get(r);case 3:return o=e.sent.data,console.log(r),e.abrupt("return",o);case 6:case"end":return e.stop()}}),n)})))()}},{key:"icrementPage",value:function(){this.page+=1}},{key:"resetPage",value:function(){this.page=1}},{key:"query",get:function(){return this.searchQuery},set:function(e){this.searchQuery=e}}]),t}(),f=o("7PxVc"),d=o("1caSa");function h(){console.log(error.message),refs.notificationEl.textContent="Sorry, something going wrong... Please try again.";setTimeout((function(){refs.notificationEl.textContent=""}),2e3)}var m={formEl:document.querySelector("#search-form"),inputEl:document.querySelector("#search"),notificationEl:document.querySelector(".text-error"),filmGalleryContainer:document.querySelector(".film-container")};m.notificationEl.textContent="";var y=new s;m.formEl.addEventListener("submit",(function(e){e.preventDefault(),function(){if(!m.inputEl.value.trim())return;y.query=m.inputEl.value.trim(),y.resetPage(),y.fetchFilms(y.query).then((function(e){if(e.results.length){m.notificationEl.textContent="",m.filmGalleryContainer.innerHTML="",function(e){console.log("Данные с бэка по запросу (data.results):"),console.log(e.results),m.filmGalleryContainer.insertAdjacentHTML("beforeend",f.default.createFilmCardMarkup(e.results))}(e),(0,d.hideElement)();var t=e.total_results;m.notificationEl.textContent="We found ".concat(t," films. Enjoy!");setTimeout((function(){m.notificationEl.textContent=""}),2e3)}else{m.notificationEl.textContent="Sorry, there are no films matching your search query. Please try again.";setTimeout((function(){m.notificationEl.textContent=""}),2e3)}})).catch(h)}()}))}();
//# sourceMappingURL=index.9bc1b2fd.js.map
