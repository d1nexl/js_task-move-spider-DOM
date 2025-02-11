'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider'); // Отримання павука
  const wall = document.querySelector('.wall'); // Отримання стіни

  // Отримуємо координати кліку відносно стіни
  const wallRect = wall.getBoundingClientRect();
  const clickX = e.clientX - wallRect.left; // Коригуємо координати
  const clickY = e.clientY - wallRect.top; // Коригуємо координати

  // Перевірка, чи клік в межах стіни
  if (
    clickX < 0 ||
    clickX > wallRect.width ||
    clickY < 0 ||
    clickY > wallRect.height
  ) {
    return;
  }

  // Отримуємо розміри павука
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  // Обчислюємо нові координати, щоб центр павука був по кліку
  const newX = Math.min(
    Math.max(clickX - spiderWidth / 2, 0),
    wallRect.width - spiderWidth,
  );

  const newY = Math.min(
    Math.max(clickY - spiderHeight / 2, 0),
    wallRect.height - spiderHeight,
  );

  // Переміщуємо павука відносно стіни
  spider.style.position = 'absolute';
  spider.style.left = `${newX}px`;
  spider.style.top = `${newY}px`;
});
