if(!self.define){let e,c={};const i=(i,a)=>(i=new URL(i+".js",a).href,c[i]||new Promise((c=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=c,document.head.appendChild(e)}else e=i,importScripts(i),c()})).then((()=>{let e=c[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,d)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(c[s])return;let n={};const r=e=>i(e,s),f={module:{uri:s},exports:n,require:r};c[s]=Promise.all(a.map((e=>f[e]||r(e)))).then((e=>(d(...e),n)))}}define(["./workbox-1f73f963"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"asset-manifest.json",revision:"1d3ba48b2e07632f741f8cf9a2dc3840"},{url:"Contenedor_Respuesta.png",revision:"d0ce66d5c83e4d4090a50254bc387d9d"},{url:"favicon.ico",revision:"c92b85a5b907c70211f4ec25e29a8c4a"},{url:"index.html",revision:"fff5a1e9cb2658dd2b81dcd532b6422d"},{url:"KV_834X1042_BG.png",revision:"9dc724734b4c431d7ca5ad7c3ee8a1f0"},{url:"KV_834X1042.png",revision:"65fb11e5ccab3623f141c0931cb7819d"},{url:"logo192.png",revision:"33dbdd0177549353eeeb785d02c294af"},{url:"logo512.png",revision:"917515db74ea8d1aee6a246cfbcc0b45"},{url:"manifest.json",revision:"d9d975cebe2ec20b6c652e1e4c12ccf0"},{url:"robots.txt",revision:"fa1ded1ed7c11438a9b0385b1e112850"},{url:"Selección.png",revision:"f48add4b3e5bdc4732c5c0d6e5db91fd"},{url:"static/css/main.edfabb40.css",revision:"e1ecc1ea1a461823dda3f90a82442adf"},{url:"static/js/main.988fa526.js",revision:"567cd317dcaf4b77497faa1159b2aca7"},{url:"static/js/main.988fa526.js.LICENSE.txt",revision:"fc80ec37d6d10aee0c9b29f5cc91a2d6"},{url:"static/media/AMX-Bold (1).ddbe3ceb64d214b6c62a.ttf",revision:"870d3040e706893b2c725cfc4075bfba"},{url:"static/media/icono-07.4a0f20933fbb6637826c.png",revision:"cb07f4f18901cb5ac23593809bbcec99"},{url:"static/media/KV_834X1042_BG.fe7bf1061e8274ab4620.png",revision:"9dc724734b4c431d7ca5ad7c3ee8a1f0"},{url:"static/media/KV_834X1042.e4c202111895c439d5fc.png",revision:"65fb11e5ccab3623f141c0931cb7819d"},{url:"static/media/Recurso 1Te las sabes (1).c13e9e50bf4822689749.png",revision:"1cb098f050ef650b210a3c3071b804c7"},{url:"static/media/Recurso 3intenta mañana (4).5110d08df84f1802614d.png",revision:"1e7062b0a24007dab194ad3fb9a6da01"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/,/^source/]})}));
//# sourceMappingURL=y.js.map