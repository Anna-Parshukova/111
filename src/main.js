document.addEventListener('DOMContentLoaded', function() {
  const coversSection = document.getElementById('covers-section');
  const marqueeInner = document.querySelectorAll('.marquee__inner');

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function checkVisibility() {
    if (isInViewport(coversSection)) {
      marqueeInner.forEach(inner => inner.classList.add('moving'));
    } else {
      marqueeInner.forEach(inner => inner.classList.remove('moving'));
    }
  }

  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('resize', checkVisibility);

  checkVisibility();
});
