(()=>{"use strict";const t=()=>{let t=document.getElementById("content");const e=document.createElement("nav");t.appendChild(e);const n=document.createElement("button");n.textContent="Home",n.id="homeBtn",n.className="tab-link",e.appendChild(n);const c=document.createElement("button");c.id="menuBtn",c.className="tab-link",c.textContent="Menu",e.appendChild(c);const o=document.createElement("button");o.id="contactBtn",o.className="tab-link",o.textContent="Contact",e.appendChild(o);const d=document.createElement("div");d.id="main",t.appendChild(d);const a=document.createElement("h1");a.textContent="Restaurant",d.appendChild(a);const m=document.createElement("p");m.textContent="Mmmh, this restaurant is delicious!",d.appendChild(m)};t(),function e(){Array.from(document.getElementsByClassName("tab-link")).forEach((n=>n.addEventListener("click",(()=>{document.getElementById("content").removeChild(document.querySelector("nav")),document.getElementById("content").removeChild(document.getElementById("main")),"homeBtn"==n.id&&t(),"menuBtn"==n.id&&(()=>{let t=document.getElementById("content");const e=document.createElement("nav");t.appendChild(e);const n=document.createElement("button");n.textContent="Home",n.id="homeBtn",n.className="tab-link",e.appendChild(n);const c=document.createElement("button");c.id="menuBtn",c.className="tab-link",c.textContent="Menu",e.appendChild(c);const o=document.createElement("button");o.id="contactBtn",o.className="tab-link",o.textContent="Contact",e.appendChild(o);const d=document.createElement("div");d.id="main",t.appendChild(d);const a=document.createElement("h1");a.textContent="Menu",d.appendChild(a);const m=document.createElement("p");m.textContent="Here are the menu items!",d.appendChild(m)})(),"contactBtn"==n.id&&(()=>{let t=document.getElementById("content");const e=document.createElement("nav");t.appendChild(e);const n=document.createElement("button");n.textContent="Home",n.id="homeBtn",n.className="tab-link",e.appendChild(n);const c=document.createElement("button");c.id="menuBtn",c.className="tab-link",c.textContent="Menu",e.appendChild(c);const o=document.createElement("button");o.id="contactBtn",o.className="tab-link",o.textContent="Contact",e.appendChild(o);const d=document.createElement("div");d.id="main",t.appendChild(d);const a=document.createElement("h1");a.textContent="Contact",d.appendChild(a);const m=document.createElement("p");m.textContent="How to contact us!",d.appendChild(m)})(),e()}))))}()})();