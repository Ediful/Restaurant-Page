(()=>{"use strict";const e=()=>{let e=document.getElementById("content");const t=document.createElement("nav");e.appendChild(t);const n=document.createElement("button");n.textContent="Home",n.id="homeBtn",n.className="tab-link",n.className="tab-active",t.appendChild(n);const c=document.createElement("button");c.id="menuBtn",c.className="tab-link",c.textContent="Menu",t.appendChild(c);const a=document.createElement("button");a.id="contactBtn",a.className="tab-link",a.textContent="Contact",t.appendChild(a);const o=document.createElement("div");o.id="main",e.appendChild(o);const d=document.createElement("h1");d.textContent="Eddie's Icecream Shop",o.appendChild(d);const m=document.createElement("IMG");m.src="images/home.svg",m.alt="Ice Cream Shop Logo",o.appendChild(m);const l=document.createElement("p");l.textContent="Mmmh, this restaurant is delicious!",o.appendChild(l)};e(),function t(){Array.from(document.getElementsByClassName("tab-link")).forEach((n=>n.addEventListener("click",(()=>{document.getElementById("content").removeChild(document.querySelector("nav")),document.getElementById("content").removeChild(document.getElementById("main")),"homeBtn"==n.id&&e(),"menuBtn"==n.id&&(()=>{let e=document.getElementById("content");const t=document.createElement("nav");e.appendChild(t);const n=document.createElement("button");n.textContent="Home",n.id="homeBtn",n.className="tab-link",t.appendChild(n);const c=document.createElement("button");c.id="menuBtn",c.className="tab-link",c.className="tab-active",c.textContent="Menu",t.appendChild(c);const a=document.createElement("button");a.id="contactBtn",a.className="tab-link",a.textContent="Contact",t.appendChild(a);const o=document.createElement("div");o.id="main",e.appendChild(o);const d=document.createElement("h1");d.textContent="Menu",o.appendChild(d);const m=document.createElement("p");m.textContent="Here are the menu items!",o.appendChild(m);const l=document.createElement("IMG");l.src="images/Chocolate.svg",l.alt="Chocolate Icecream",o.appendChild(l);const i=document.createElement("IMG");i.src="images/Vanilla.svg",i.alt="Vanilla Icecream",o.appendChild(i);const s=document.createElement("IMG");s.src="images/strawberry.svg",s.alt="Strawberry Icecream",o.appendChild(s)})(),"contactBtn"==n.id&&(()=>{let e=document.getElementById("content");const t=document.createElement("nav");e.appendChild(t);const n=document.createElement("button");n.textContent="Home",n.id="homeBtn",n.className="tab-link",t.appendChild(n);const c=document.createElement("button");c.id="menuBtn",c.className="tab-link",c.textContent="Menu",t.appendChild(c);const a=document.createElement("button");a.id="contactBtn",a.className="tab-link",a.className="tab-active",a.textContent="Contact",t.appendChild(a);const o=document.createElement("div");o.id="main",e.appendChild(o);const d=document.createElement("h1");d.textContent="Contact",o.appendChild(d);const m=document.createElement("p");m.textContent="How to contact us!",o.appendChild(m)})(),t()}))))}()})();