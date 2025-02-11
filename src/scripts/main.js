'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider'); // Отримання павука;
  const wall = document.querySelector('.wall'); // Отримуємо стіну

  const clickX = e.clientX; // Отримання координат кліку
  const clickY = e.clientY;

  const wallRect = wall.getBoundingClientRect(); // Розмір стіни

  // Перевірка на клік в межах стіни
  if (
    clickX < wallRect.left ||
    clickX > wallRect.right ||
    clickY < wallRect.top ||
    clickY > wallRect.bottom
  ) {
    return;
  }

  // Максимальні координати для павука
  const maxX = wallRect.width - spider.offsetWidth / 2; // Макс координата X
  const minX = wallRect.left + spider.offsetWidth / 2; // Мін координата X
  const maxY = wallRect.height - spider.offsetHeight / 2; // Макс координата Y
  const minY = wallRect.top + spider.offsetHeight / 2; // Мін координата Y

  // Нові координати для павука
  const newX = Math.min(Math.max(clickX, minX), maxX);
  const newY = Math.min(Math.max(clickY, minY), maxY);

  // Переміщення павука
  spider.style.left = `${newX - spider.offsetWidth / 2}px`;
  spider.style.top = `${newY - spider.offsetHeight / 2}px`;
});
