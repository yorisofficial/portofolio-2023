window.onload = function() {
    scrollToTop();
  };
  
  function scrollToTop() {
    window.scrollTo(0, 0);
  }
  

window.addEventListener('scroll', function() {
    let navBar = document.getElementById('nav-me');
    let btnGrup1 = document.getElementById('btn-grup1');
    let btnGrup2 = document.getElementById('btn-grup2');
    let isScrolled = window.scrollY > 5;

    navBar.classList.toggle('bg-white', isScrolled);
    navBar.classList.toggle('drop-shadow-xl', isScrolled);
    btnGrup1.classList.toggle('text-gray-50', !isScrolled);
    btnGrup1.classList.toggle('text-gray-800', isScrolled);
    btnGrup2.classList.toggle('text-gray-50', !isScrolled);
    btnGrup2.classList.toggle('text-gray-800', isScrolled);
});

