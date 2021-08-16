const menuTab = () => {
  let content = document.getElementById("content");

  const navbar = document.createElement('nav');
  content.appendChild(navbar);

  const homeBtn = document.createElement('button');
  homeBtn.textContent = 'Home';
  homeBtn.id = 'homeBtn';
  navbar.appendChild(homeBtn);

  const menuBtn = document.createElement('button');
  menuBtn.id = 'menuBtn';
  menuBtn.textContent = 'Menu';
  navbar.appendChild(menuBtn);

  const contactBtn = document.createElement('button');
  contactBtn.id = 'contactBtn';
  contactBtn.textContent = 'Contact';
  navbar.appendChild(contactBtn);

  const main = document.createElement('div');
  content.appendChild(main);

  const title = document.createElement('h1');
  title.textContent = "Menu";
  main.appendChild(title);

  const description = document.createElement('p');
  description.textContent = "Here are the menu items!";
  main.appendChild(description);
}

export { menuTab }