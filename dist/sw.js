if(!self.define){let s,e={};const n=(n,r)=>(n=new URL(n+".js",r).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(r,i)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let t={};const o=s=>n(s,l),u={module:{uri:l},exports:t,require:o};e[l]=Promise.all(r.map((s=>u[s]||o(s)))).then((s=>(i(...s),t)))}}define(["./workbox-5ffe50d4"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/AdminSettings-D3YDGe_x.js",revision:null},{url:"assets/CartSummary-DBShql5t.js",revision:null},{url:"assets/CategoryGrid-DmPhQ0tD.js",revision:null},{url:"assets/Checkout-wQ-XMMwu.js",revision:null},{url:"assets/demoModeStore-Ba8Qd-Nc.js",revision:null},{url:"assets/index-BXFMK3q3.css",revision:null},{url:"assets/index-Cmb3fh58.js",revision:null},{url:"assets/InfoPage-CC0VAWmb.js",revision:null},{url:"assets/LandingPage-CjdmsejE.js",revision:null},{url:"assets/OrderConfirmation-CEAvm7ZB.js",revision:null},{url:"assets/TimeSelectionPage-lXJN88Hs.js",revision:null},{url:"assets/vendor-firebase-DU3MYe4I.js",revision:null},{url:"assets/vendor-react-S76kyUnC.js",revision:null},{url:"assets/vendor-stripe-B6hATUCK.js",revision:null},{url:"assets/vendor-utils-BGzRgZPY.js",revision:null},{url:"assets/workbox-window.prod.es5-B9K5rw8f.js",revision:null},{url:"index.html",revision:"36390ac554405cdc5aa2e4789fcd3eef"},{url:"manifest.webmanifest",revision:"b9d49b16151330ae5e0ead66d1d594f9"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map