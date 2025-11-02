(function () {
    const stage = document.querySelector('.stage');
    const logoBtn = document.getElementById('logoBtn');
    const menu = document.getElementById('menu');
  
    function openMenu() {
      stage.setAttribute('data-state', 'menu');
      menu.setAttribute('aria-hidden', 'false');
      const firstLink = menu.querySelector('a');
      firstLink && firstLink.focus();
    }
  
    function closeMenu() {
      stage.setAttribute('data-state', 'logo');
      menu.setAttribute('aria-hidden', 'true');
      logoBtn.focus();
    }
  
    logoBtn.addEventListener('click', openMenu);
    logoBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openMenu();
      }
    });
  
    // 검정 화면 아무 곳이나 클릭하면 닫힘
    menu.addEventListener('click', (e) => {
        const isMenuOpen = stage.dataset.state === 'menu';
        if (isMenuOpen && e.target === menu) {
          // e.target이 nav#menu 본체일 때(= 배경 클릭)
          closeMenu();
        }
      });
  })();
  