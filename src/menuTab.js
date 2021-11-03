const menuTab = () => {
  let content = document.getElementById("content");

  const navbar = document.createElement("nav");
  content.appendChild(navbar);

  const homeBtn = document.createElement("button");
  homeBtn.textContent = "Home";
  homeBtn.id = "homeBtn";
  homeBtn.className = "tab-link";
  navbar.appendChild(homeBtn);

  const menuBtn = document.createElement("button");
  menuBtn.id = "menuBtn";
  menuBtn.className = "tab-link";
  menuBtn.className = "tab-active";
  menuBtn.textContent = "Menu";
  navbar.appendChild(menuBtn);

  const contactBtn = document.createElement("button");
  contactBtn.id = "contactBtn";
  contactBtn.className = "tab-link";
  contactBtn.textContent = "Contact";
  navbar.appendChild(contactBtn);

  const main = document.createElement("div");
  main.id = "main";
  content.appendChild(main);

  const title = document.createElement("h1");
  title.textContent = "Menu";
  main.appendChild(title);

  const description = document.createElement("p");
  description.textContent = "Here are the menu items!";
  main.appendChild(description);

  const choc = document.createElement("IMG");
  choc.src = "images/Chocolate.svg";
  choc.alt = "Chocolate Icecream";
  main.appendChild(choc);

  const sundae = document.createElement("IMG");
  sundae.src = "images/Vanilla.svg";
  sundae.alt = "Vanilla Icecream";
  main.appendChild(sundae);

  const vannila_strawberry = document.createElement("IMG");
  vannila_strawberry.src = "images/strawberry.svg";
  vannila_strawberry.alt = "Strawberry Icecream";
  main.appendChild(vannila_strawberry);
};

export { menuTab };
