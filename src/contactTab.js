const contactTab = () => {
  let content = document.getElementById("content");

  const navbar = document.createElement('nav');
  content.appendChild(navbar);

  const homeBtn = document.createElement('button');
  homeBtn.textContent = 'Home';
  homeBtn.id = 'homeBtn';
  homeBtn.className = 'tab-link';
  navbar.appendChild(homeBtn);

  const menuBtn = document.createElement('button');
  menuBtn.id = 'menuBtn';
  menuBtn.className = 'tab-link';
  menuBtn.textContent = 'Menu';
  navbar.appendChild(menuBtn);

  const contactBtn = document.createElement('button');
  contactBtn.id = 'contactBtn';
  contactBtn.className = 'tab-link';
  contactBtn.className = 'tab-active';
  contactBtn.textContent = 'Contact';
  navbar.appendChild(contactBtn);

  const main = document.createElement('div');
  main.id = 'main';
  content.appendChild(main);

  const title = document.createElement('h1');
  title.textContent = "Contact";
  main.appendChild(title);

  const description = document.createElement('p');
  description.textContent = "How to contact us!";
  main.appendChild(description);
}

export { contactTab }