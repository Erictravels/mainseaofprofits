// Testimonials Slideshow
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
const totalTestimonials = testimonials.length;

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.remove('active');
    if (i === index) {
      testimonial.classList.add('active');
    }
  });
}

function nextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
  showTestimonial(currentTestimonial);
}

function prevTestimonial() {
  currentTestimonial = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
  showTestimonial(currentTestimonial);
}

// Auto-rotate testimonials every 5 seconds
let autoSlideInterval = setInterval(nextTestimonial, 5000);

// Pause auto-slide on hover
const testimonialSlider = document.querySelector('.testimonial-slider');
testimonialSlider.addEventListener('mouseenter', () => {
  clearInterval(autoSlideInterval);
});

testimonialSlider.addEventListener('mouseleave', () => {
  autoSlideInterval = setInterval(nextTestimonial, 5000);
});

// Manual controls
document.querySelector('.next').addEventListener('click', () => {
  nextTestimonial();
  clearInterval(autoSlideInterval); // Reset interval on manual click
  autoSlideInterval = setInterval(nextTestimonial, 5000);
});

document.querySelector('.prev').addEventListener('click', () => {
  prevTestimonial();
  clearInterval(autoSlideInterval); // Reset interval on manual click
  autoSlideInterval = setInterval(nextTestimonial, 5000);
});

// Show the first testimonial initially
showTestimonial(currentTestimonial);

// Dark Mode Toggle
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  // Save user preference in localStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Check for saved user preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
}

// Back-to-Top Button
window.addEventListener('scroll', () => {
  const backToTop = document.querySelector('.back-to-top');
  if (window.scrollY > 200) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

document.querySelector('.back-to-top').addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
