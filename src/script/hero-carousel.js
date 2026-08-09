const slides = document.querySelectorAll('.hero-slide');
const bullets = document.querySelectorAll('.hero-bullet');
const titleEl = document.getElementById('heroTitle');
const descEl = document.getElementById('heroDesc');
const btnEl = document.getElementById('heroBtn');

const slideData = [
  { title: 'Speaker', desc: 'this is Speaker', href: '#speaker' },
  { title: 'Headset', desc: 'this is Headset', href: '#headset' },
  { title: 'IEM', desc: 'this is IEM', href: '#iem' },
  { title: 'Mic', desc: 'this is Mic', href: '#mic' },
  { title: 'Amplifier', desc: 'this is Amplifier', href: '#amplifier' },
];

const slideIntervalMs = 5000;
let currentSlide = 0;
let timerId;

function goToSlide(index) {
  slides[currentSlide].classList.remove('is-active');
  bullets[currentSlide].classList.remove('is-active');

  currentSlide = index;

  slides[currentSlide].classList.add('is-active');
  bullets[currentSlide].classList.add('is-active');
  titleEl.textContent = slideData[currentSlide].title;
  descEl.textContent = slideData[currentSlide].desc;
  btnEl.setAttribute('href', slideData[currentSlide].href);
}

function goToNextSlide() {
  goToSlide((currentSlide + 1) % slides.length);
}

function restartTimer() {
  clearInterval(timerId);
  timerId = setInterval(goToNextSlide, slideIntervalMs);
}

bullets.forEach((bullet) => {
  bullet.addEventListener('click', () => {
    goToSlide(Number(bullet.dataset.slideTo));
    restartTimer();
  });
});

restartTimer();
