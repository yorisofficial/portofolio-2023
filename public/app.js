const navBtn = document.getElementById('btn-nav');
const navMenu = document.getElementById('menu-nav');
const btnAction = document.getElementById('btn-action');
const navAnchor = document.querySelectorAll('.nav-item');

function changeBtnStyle(button, classNames, duration) {
  button.classList.add('focus:ring-4');
  button.classList.add('focus:ring-gray-600');
  button.classList.add('bg-gray-800');

  setTimeout(() => {
    button.classList.remove('focus:ring-4');
    button.classList.remove('focus:ring-gray-600');
    button.classList.remove('bg-gray-800');
  }, duration);
}

function toggleNavMenu() {
  if (navMenu.classList.contains('hidden')) {
    navMenu.classList.remove('hidden');
    navMenu.classList.add('flex');
    document.addEventListener('click', outsideClickHandler);
  } else {
    navMenu.classList.add('hidden');
    navMenu.classList.remove('flex');
    document.removeEventListener('click', outsideClickHandler);
  }
}

function outsideClickHandler(event) {
  if (!navMenu.contains(event.target) && !navBtn.contains(event.target)) {
    toggleNavMenu();
  }
}

btnAction.addEventListener('click', () => {
  changeBtnStyle(btnAction, ['focus:ring-4', 'focus:ring-gray-600', 'bg-gray-800'], 1000);
});

navBtn.addEventListener('click', () => {
  changeBtnStyle(navBtn, ['focus:ring-4', 'focus:ring-gray-600', 'bg-gray-800'], 1000);
  toggleNavMenu();
});

navAnchor.forEach((link) => {
  link.addEventListener('click', () => {
    toggleNavMenu();
  });
});
