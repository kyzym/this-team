function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},t.parcelRequired7c6=o);var r=o("fb9GJ"),a=o("2shzp");var l=o("hgmNe"),c=o("6Xidn"),s=(c=o("6Xidn"),o("dRsRU")),u=o("B4GFe"),f=o("392Er");function d(e){console.log(e.message);const t=document.querySelector(".text-error");t.style.color="#ff001b",t.textContent="Sorry, something going wrong... Please try again."}o("gjiCh");var m=o("jkVf4");const y={formEl:document.querySelector("#search-form"),inputEl:document.querySelector("#search"),notificationEl:document.querySelector(".text-error"),filmGalleryContainer:document.querySelector(".film-container"),paginationInHome:document.querySelector(".pagination"),notificationPictureEl:document.querySelector("#notification-picture")},p=new class{async fetchFilms(e){const t=`https://api.themoviedb.org/3/search/movie?api_key=3c2d3d1a4a9318a7ef02a0fdedccb03f&query=${this.searchQuery}&page=${e}`,{data:n}=await a.default.get(t);return n}get query(){return this.searchQuery}set query(e){this.searchQuery=e}constructor(){this.searchQuery="",this.lastQuery=""}},g=new(e(r))("pagination",{totalItems:0,itemsPerPage:20,visiblePages:5,page:1,centerAlign:!0}),h=g.getCurrentPage();function E(e){const t=e.page;p.fetchFilms(t).then((e=>{(0,s.scrollOnTop)(0),(0,u.clearMurkup)(),v(e.results)})).catch(d)}function v(e){y.filmGalleryContainer.insertAdjacentHTML("beforeend",l.default.createFilmCardMarkup(e)),(0,m.saveCurrentFilmsToLocal)(e),(0,f.hideElement)(),(0,f.hideSpan)()}y.notificationEl.style.color="#ff001b",y.notificationEl.textContent="",y.formEl.addEventListener("submit",(function(e){e.preventDefault(),function(){if(!y.inputEl.value.trim()){y.notificationEl.style.color="#ff001b",y.notificationEl.textContent="Please, type something.";setTimeout((()=>{y.notificationEl.textContent=""}),3e3);return}if(p.query=y.inputEl.value.trim(),p.lastQuery===p.searchQuery)return;c.pagination.off("afterMove",c.popular),g.off("afterMove",E),p.fetchFilms(h).then((e=>{if(!e.results.length){(0,u.clearMurkup)(),y.notificationEl.style.color="#ff001b",y.notificationEl.textContent="Sorry, there are no films matching your search query. Please, try again.",y.paginationInHome.classList.add("tui-pagination-isHidden"),y.notificationPictureEl.classList.add("section-main__bcg");setTimeout((()=>{y.notificationEl.textContent=""}),3e3);return}p.lastQuery=p.query,y.notificationEl.textContent="",y.paginationInHome.classList.remove("tui-pagination-isHidden"),y.notificationPictureEl.classList.remove("section-main__bcg"),(0,u.clearMurkup)(),v(e.results),g.reset(e.total_results),(0,f.hideElement)(),g.on("afterMove",E);const t=e.total_results;y.notificationEl.style.color="#00ff22",y.notificationEl.textContent=`We found ${t} films. Enjoy!`;setTimeout((()=>{y.notificationEl.textContent=""}),3e3)})).catch(d)}()}));
//# sourceMappingURL=index.9be082db.js.map
