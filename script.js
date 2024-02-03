document.addEventListener('DOMContentLoaded', function () {
  const navbarToggle = document.querySelector('.navbar-toggle');
  const navbarLinks = document.querySelector('.navbar-links');

  navbarToggle.addEventListener('click', function () {
    navbarLinks.classList.toggle('show');
    // Set max-height to auto when links are shown
    navbarLinks.style.maxHeight = navbarLinks.classList.contains('show') ? '200px' : '0';
  });
});
// animated gsap text
