AOS.init({ once: true, duration: 1000, easing: 'ease-in-out' });

    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    menuBtn.addEventListener('click', () => {
      if (mobileMenu.classList.contains('closed')) {
        mobileMenu.classList.remove('closed');
        mobileMenu.classList.add('open');
      } else {
        mobileMenu.classList.remove('open');
        mobileMenu.classList.add('closed');
      }
    });