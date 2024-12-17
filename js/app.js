//open menu
const openBtn = document.querySelector('.main-burger');
const closeBtn = document.querySelector('.close-button');
const mobileMenu = document.querySelector('.burger-menu');


openBtn.addEventListener('click', function () {
  mobileMenu.style.display = "block";
});

closeBtn.addEventListener('click', function () {
  mobileMenu.style.display = "none";
});

//scroll
const scrollBtn = document.querySelector('.links-scroll');
const container = document.querySelector('.links-container');

scrollBtn.addEventListener('click', function () {
  const container = document.querySelector('.links-container');
  const scrollAmount = 150;
  container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

container.addEventListener('wheel', function (e) {
  e.preventDefault();
  container.scrollLeft += e.deltaY;
});