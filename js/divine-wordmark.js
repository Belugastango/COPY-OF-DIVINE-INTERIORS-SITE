document.addEventListener('DOMContentLoaded', () => {
  const symbol = document.querySelector('.header-logo-item:not(.item-txt)');
  if (symbol) symbol.style.display = 'none';

  const logoItem = document.querySelector('.header-logo-item.item-txt');
  if (logoItem) {
    logoItem.style.width = 'auto';
    logoItem.style.maxWidth = 'none';
    logoItem.style.whiteSpace = 'nowrap';
    logoItem.style.transform = 'none';

    // Ensure the official logo image is present
    let brandImg = logoItem.querySelector('.header-logo-brand-img');
    if (!brandImg) {
      brandImg = document.createElement('img');
      brandImg.src = 'assets/divine-logo-dark.png';
      brandImg.alt = 'DIVINE INTERIORS';
      brandImg.className = 'header-logo-brand-img';
      brandImg.style.height = '32px';
      brandImg.style.width = 'auto';
      brandImg.style.display = 'block';
      brandImg.style.objectFit = 'contain';
      const existingTxt = logoItem.querySelector('.header-logo-txt');
      if (existingTxt) existingTxt.replaceWith(brandImg);
      else logoItem.appendChild(brandImg);
    }
  }

  // Active scroll guard: Keep Divine Interiors logo completely still and top bar intact
  const freezeNavbarAndLogo = () => {
    const h = document.querySelector('.header');
    const hInner = document.querySelector('.header-inner');
    const logoTxt = document.querySelector('.header-logo-item.item-txt');
    if (h && h.classList.contains('on-hide')) {
      h.classList.remove('on-hide');
    }
    if (hInner && hInner.style.transform && hInner.style.transform !== 'none') {
      hInner.style.transform = 'none';
    }
    if (logoTxt && logoTxt.style.transform && logoTxt.style.transform !== 'none') {
      logoTxt.style.transform = 'none';
    }
  };

  window.addEventListener('scroll', freezeNavbarAndLogo, { passive: true });
  window.addEventListener('resize', freezeNavbarAndLogo, { passive: true });
  requestAnimationFrame(function poll() {
    freezeNavbarAndLogo();
    requestAnimationFrame(poll);
  });
});
