document.addEventListener('DOMContentLoaded', () => {
  const sectionAnchors = {
    'home-problem-wrap': 'services',
    'home-why-wrap': 'about',
    'home-usecase-wrap': 'portfolio',
    'home-cta-wrap': 'contact',
  };

  Object.entries(sectionAnchors).forEach(([selector, id]) => {
    const section = document.querySelector(selector);
    if (section) section.id = id;
  });

  const servicesMenu = document.querySelector('.header-menu-item.has-submenu .btn-fill-label');
  if (servicesMenu) {
    servicesMenu.querySelectorAll('.txt').forEach((label) => {
      label.textContent = 'Our Services';
    });
  }

  const sectionLinks = {
    '[data-sub-link="ai-practices"]': '#about',
    '[data-sub-link="design-workflows"]': '#contact',
  };

  Object.entries(sectionLinks).forEach(([selector, href]) => {
    const link = document.querySelector(selector);
    if (link) link.setAttribute('href', href);
  });

  document.querySelectorAll('.home-intro-control').forEach((control) => {
    const label = control.querySelector('.btn-fill-label');
    if (!label) return;
    const text = control.dataset.direct === 'left' ? 'Previous project' : 'Next project';
    label.querySelectorAll('.txt').forEach((item) => {
      item.textContent = text;
    });
  });
});
