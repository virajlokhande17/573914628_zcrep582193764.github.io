

const specializationItems = document.querySelectorAll('.specialization-item');

specializationItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.style.transform = 'scale(1.05)';
  });

  item.addEventListener('mouseout', () => {
    item.style.transform = 'scale(1)';
  });
});
