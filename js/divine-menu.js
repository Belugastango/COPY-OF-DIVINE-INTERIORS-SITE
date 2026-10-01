document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.header-menu');
  if (!menu) return;

  const items = Array.from(menu.querySelectorAll(':scope > .header-menu-item-wrap'));
  const setLabel = (element, text) => {
    element?.querySelectorAll('.btn-fill-label .txt').forEach((label) => {
      label.textContent = text;
    });
  };

  setLabel(items[0], 'Our Services');
  setLabel(items[2], 'Portfolio');
  items[1]?.setAttribute('hidden', '');

  if (items[0]) {
    const serviceLinks = items[0].querySelectorAll('.header-menu-dropdown-item');
    ['Interior Design', 'Turnkey Execution'].forEach((text, index) => {
      setLabel(serviceLinks[index], text);
      serviceLinks[index]?.setAttribute('href', 'index.html#services');
    });
  }

  if (items[2]) {
    const portfolioLinks = items[2].querySelectorAll('.header-menu-dropdown-item');
    ['Residential Spaces', 'Commercial Spaces', 'Hospitality Spaces'].forEach((text, index) => {
      setLabel(portfolioLinks[index], text);
      portfolioLinks[index]?.setAttribute('href', 'index.html#portfolio');
    });
  }

  items[3]?.setAttribute('hidden', '');
});
