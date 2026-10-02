document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.home-intro-partner-inner');
  if (!track) return;

  const heading = document.querySelector('.home-intro-partner-label .txt');
  if (heading) heading.textContent = 'CLIENTS';

  track.style.display = 'flex';
  track.style.flexDirection = 'row';
  track.style.flexWrap = 'nowrap';
  track.style.overflow = 'hidden';
  track.style.width = '100%';

  const partners = [
    { name: 'Polo Ralph Lauren', image: 'assets/logo-ralph-lauren.png' },
    { name: 'MANGO', image: 'assets/logo-mango-client.png' },
    { name: 'Antony Morato', image: 'assets/logo-antony-morato.png' },
    { name: 'Domino\'s Pizza', image: 'assets/logo-dominos-client.png' },
    { name: 'ROSLYN CAFE', image: '' },
    { name: 'Godrej Interio', image: 'assets/logo-godrej-interio-client.png' },
  ];

  track.replaceChildren();
  partners.forEach((partner) => {
    const cell = document.createElement('div');
    const item = partner.image ? document.createElement('img') : document.createElement('span');
    cell.className = 'divine-partner-cell';
    cell.style.display = 'inline-flex';
    cell.style.alignItems = 'center';
    cell.style.justifyContent = 'center';
    cell.style.width = '16.6667%';
    cell.style.minWidth = '16.6667%';
    cell.style.flex = '0 0 16.6667%';
    cell.style.boxSizing = 'border-box';
    cell.style.padding = '1rem 1.5rem';
    cell.style.borderRight = '1px dashed rgba(40, 40, 40, 0.28)';
    item.className = 'img-basic divine-partner-logo';
    item.alt = partner.name;
    item.setAttribute('aria-label', partner.name);
    item.style.display = 'inline-flex';
    item.style.alignItems = 'center';
    item.style.justifyContent = 'center';
    item.style.width = '100%';
    item.style.maxWidth = '100%';
    item.style.height = '7rem';
    item.style.maxHeight = '7rem';
    item.style.objectFit = 'contain';
    item.style.color = '#282828';
    item.style.fontFamily = 'Arial, sans-serif';
    item.style.fontSize = '1.25rem';
    item.style.fontWeight = '600';
    item.style.textAlign = 'center';
    item.style.whiteSpace = 'nowrap';

    if (partner.image) {
      item.src = partner.image;
      item.loading = 'lazy';
    } else {
      item.textContent = partner.name;
    }

    cell.appendChild(item);
    track.appendChild(cell);
  });
});
