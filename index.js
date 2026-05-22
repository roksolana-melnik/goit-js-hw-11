import{a as f,S as m,i}from"./assets/vendor-BWrHDtJd.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const d="55975137-aff8e165c0e493ba8aeef9480",y="https://pixabay.com/api/";function g(o){return f.get(y,{params:{key:d,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),h=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(o){const r=o.map(({webformatURL:a,largeImageURL:n,tags:e,likes:t,views:s,comments:u,downloads:p})=>`
      <li class="gallery-item">
        <a href="${n}">
          <img src="${a}" alt="${e}" loading="lazy" />
        </a>
        <ul class="gallery-info">
          <li><span>Likes</span><span>${t}</span></li>
          <li><span>Views</span><span>${s}</span></li>
          <li><span>Comments</span><span>${u}</span></li>
          <li><span>Downloads</span><span>${p}</span></li>
        </ul>
      </li>`).join("");l.innerHTML=r,h.refresh()}function b(){l.innerHTML=""}function S(){c.classList.add("loader--visible")}function v(){c.classList.remove("loader--visible")}const q=document.querySelector(".form");q.addEventListener("submit",o=>{o.preventDefault();const r=o.target.elements["search-text"].value.trim();r&&(b(),S(),g(r).then(a=>{if(a.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(a.hits)}).catch(()=>{i.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{v()}))});
//# sourceMappingURL=index.js.map
