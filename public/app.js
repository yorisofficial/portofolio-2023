const iconNav = document.querySelectorAll('#icon-nav ion-icon');

iconNav.forEach((icon) => {
  const parent = icon.closest('a');

  parent.addEventListener('mouseenter', () => {
    icon.setAttribute('name', icon.getAttribute('name').replace('-outline', ''));
  });

  parent.addEventListener('mouseleave', () => {
    icon.setAttribute('name', icon.getAttribute('name') + '-outline');
  });
});
