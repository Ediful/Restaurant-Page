const homeTab = () => {
  let content = document.getElementById("content");

  const navbar = document.createElement('nav');
  content.appendChild(navbar);

  const homeBtn = document.createElement('button');
  homeBtn.textContent = 'Home';
  homeBtn.id = 'homeBtn';
  homeBtn.className = 'tab-link';
  homeBtn.className = 'tab-active';
  navbar.appendChild(homeBtn);

  const menuBtn = document.createElement('button');
  menuBtn.id = 'menuBtn';
  menuBtn.className = 'tab-link';
  menuBtn.textContent = 'Menu';
  navbar.appendChild(menuBtn);

  const contactBtn = document.createElement('button');
  contactBtn.id = 'contactBtn';
  contactBtn.className = 'tab-link';
  contactBtn.textContent = 'Contact';
  navbar.appendChild(contactBtn);

  const main = document.createElement('div');
  main.id = "main";
  content.appendChild(main);

  const title = document.createElement('h1');
  title.textContent = "Eddie's Icecream Shop";
  main.appendChild(title);

  const logo = document.createElement("IMG");
  logo.src = "../images/ice-cream-selection.jpg";
  logo.alt = "Ice Cream Shop Logo";
  main.appendChild(logo);

  const description = document.createElement('p');
  description.textContent = "Mmmh, this restaurant is delicious!";
  main.appendChild(description);
}

export { homeTab }