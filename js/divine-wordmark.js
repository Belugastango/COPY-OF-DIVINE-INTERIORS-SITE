document.addEventListener('DOMContentLoaded', () => {
  const symbol = document.querySelector('.header-logo-item:not(.item-txt)');
  if (symbol) symbol.style.display = 'none';

  const wordmark = document.querySelector('.header-logo-item.item-txt .embed-ic');
  if (!wordmark) return;

  wordmark.replaceChildren();
  const label = document.createElement('span');
  label.textContent = 'DIVINE INTERIORS';
  label.style.display = 'inline-block';
  label.style.fontFamily = 'Arial, sans-serif';
  label.style.fontSize = '18px';
  label.style.fontWeight = '600';
  label.style.color = '#000';
  label.style.letterSpacing = '0';
  label.style.lineHeight = '1';
  wordmark.appendChild(label);
});
