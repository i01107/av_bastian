const slides = document.querySelectorAll('.hero-slide');
const bullets = document.querySelectorAll('.hero-bullet');
const titleEl = document.getElementById('heroTitle');
const descEl = document.getElementById('heroDesc');
const btnEl = document.getElementById('heroBtn');

const slideData = [
  { title: 'Z-HX Series-AS', desc: 'Line Array Speakers', href: '#speaker', fontColor: '#ffffff' },
  { title: 'ZA-D6500-AS 1', desc: 'Digital Power Amplifier', href: '#amplifier', fontColor: '#ffffff' },
  { title: 'Logitech Rally Bar', desc: 'All-in-one video bar for medium to large rooms', href: '#camera', fontColor: '#FF9100' },
  { title: 'PTZ Pro 2', desc: '1080p video camera', href: '#mic', fontColor: '#ffffff' },
  { title: 'Amplifier', desc: 'this is Amplifier', href: '#amplifier', fontColor: '#ffffff' },
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
  titleEl.style.color = slideData[currentSlide].fontColor;
  titleEl.textContent = slideData[currentSlide].title;
  descEl.style.color = slideData[currentSlide].fontColor;
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
