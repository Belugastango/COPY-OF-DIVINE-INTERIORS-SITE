document.addEventListener('DOMContentLoaded', () => {
  const services = [
    {
      label: 'CIVIL AND INTERIOR',
      title: 'CIVIL AND INTERIOR',
      description: 'Complete civil construction and interior execution for retail, hospitality, and office spaces - from structural build to fully finished fit-out, delivered on schedule.',
    },
    {
      label: 'MEP',
      title: 'MEP',
      description: 'Comprehensive mechanical, electrical, and plumbing systems for commercial fit-outs - coordinated, code-compliant, and installed to spec across single and multi-location projects.',
    },
    {
      label: 'HVAC',
      title: 'HVAC',
      description: 'End-to-end HVAC design and installation for retail, hospitality, and commercial spaces - keeping every project comfortable, efficient, and fully compliant.',
    },
    {
      label: 'FACADE WORKS',
      title: 'FACADE WORKS',
      description: 'External facade design and execution across retail and commercial projects - built to brand standards and compliant with mall and building authority requirements.',
    },
  ];

  document.querySelectorAll('.home-problem-item').forEach((card, index) => {
    const service = services[index];
    if (!service) return;

    const label = card.querySelector('.home-problem-item-head-title .txt');
    const title = card.querySelector('.home-problem-item-title .heading');
    const description = card.querySelector('.home-problem-item-sub .txt');

    if (label) label.textContent = service.label;
    if (title) title.textContent = service.title;
    if (description) description.textContent = service.description;
  });
});
