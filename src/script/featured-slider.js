const featuredTrack = document.querySelector('.featured-track');

if (featuredTrack) {
  // duplicate the card set once so the scrolling loop appears seamless
  Array.from(featuredTrack.children).forEach((item) => {
    const clone = item.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    featuredTrack.appendChild(clone);
  });
}
