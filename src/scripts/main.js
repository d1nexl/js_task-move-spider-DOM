'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider'); // Отримання павука;

  const clickX = e.clientX + window.scrollX; // Отримання координат кліку
  const clickY = e.clientY + window.ScrollY;

  const spiderRect = spider.getBoundingClientRect(); // Розмір павука
  const wall = document.querySelector('.wall'); // Отримуємо стіну
  const wallRect = wall.getBoundingClientRect(); // Розмір стіни

  // Максимальні координати для павука
  const maxX = wallRect.right - spiderRect.width / 2; // Макс координата X
  const minX = wallRect.left + spiderRect.width / 2; // Мінімальна координата X
  const maxY = wallRect.bottom - spiderRect.height / 2; // Макс координата Y
  const minY = wallRect.top + spiderRect.height / 2; // Мінімальна координата Y

  // Нові координати для павука
  const newX = Math.min(Math.max(clickX, minX), maxX);
  const newY = Math.min(Math.max(clickY, minY), maxY);

  // Переміщення павука
  spider.style.left = `${newX - spiderRect.width / 2}px`;
  spider.style.top = `${newY - spiderRect.height / 2}px`;
});
