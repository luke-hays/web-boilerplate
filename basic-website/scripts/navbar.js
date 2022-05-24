const routes = {
  home: '/index.html',
  about: '/views/about.html'
}

const navbarContainer = document.createElement('div')

const navbarList = document.createElement('ul')

navbarContainer.id = 'navbar-container'
navbarList.id = 'navbar-list'

navbarContainer.appendChild(navbarList);

Object.keys(routes).forEach((element) => {
  const navbarListElement = document.createElement('li')
  const navbarLink = document.createElement('a');
  
  navbarLink.href = routes[element];
  navbarLink.text = element;

  navbarListElement.className = 'navbar-list-element'
  navbarLink.className = 'navbar-link'
  
  navbarListElement.appendChild(navbarLink);
  navbarList.appendChild(navbarListElement);
});

navbarContainer.append(navbarList);
document.querySelector('#navbar').append(navbarContainer);
console.log(navbarContainer);