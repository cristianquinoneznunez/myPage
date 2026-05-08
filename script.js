document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!menuToggle || !mobileMenu) {
    return;
  }

  // Set initial styles for fade
  mobileMenu.style.opacity = '0';
  mobileMenu.style.display = 'none';
  mobileMenu.style.transition = 'opacity 0.3s ease';

  menuToggle.addEventListener('click', function () {
    if (mobileMenu.classList.contains('open')) {
      // Fade out
      mobileMenu.style.opacity = '0';
      setTimeout(() => {
        mobileMenu.classList.remove('open');
        mobileMenu.style.display = 'none';
      }, 300);
    } else {
      // Fade in
      mobileMenu.classList.add('open');
      mobileMenu.style.display = 'block';
      mobileMenu.style.opacity = '0';
      setTimeout(() => {
        mobileMenu.style.opacity = '1';
      }, 10);
    }
  });

  mobileMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      // Fade out when link is clicked
      mobileMenu.style.opacity = '0';
      setTimeout(() => {
        mobileMenu.classList.remove('open');
        mobileMenu.style.display = 'none';
      }, 300);
    });
  });
});
