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

// FAQs Accordion
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {
    // Close all other FAQ items
    document.querySelectorAll('.faq-item').forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
      }
    });
    // Toggle current FAQ item
    item.classList.toggle('active');
  });
});

// Disclaimer Pop-up
document.addEventListener('DOMContentLoaded', function () {
  const disclaimerPopup = document.getElementById('disclaimer-popup');
  const acceptDisclaimerButton = document.getElementById('accept-disclaimer');
  const closeDisclaimerButton = document.getElementById('close-disclaimer');

  // Check if the user has already accepted the disclaimer
  if (!localStorage.getItem('disclaimerAccepted')) {
    // Show the disclaimer pop-up
    disclaimerPopup.style.display = 'flex';
  }

  // When the user clicks the "I Understand" button
  acceptDisclaimerButton.addEventListener('click', function () {
    // Hide the disclaimer pop-up
    disclaimerPopup.style.display = 'none';
    // Save the user's acceptance in localStorage
    localStorage.setItem('disclaimerAccepted', 'true');
  });

  // When the user clicks the close button
  closeDisclaimerButton.addEventListener('click', function () {
    disclaimerPopup.style.display = 'none';
  });
});


// Social Proof Widget
const socialProofMessages = [
  { name: "John Doe", action: "signed up", avatar: "https://i.pravatar.cc/40?img=1" },
  { name: "Jane Smith", action: "subscribed to the newsletter", avatar: "https://i.pravatar.cc/40?img=2" },
  { name: "Mike Johnson", action: "purchased a weekly plan", avatar: "https://i.pravatar.cc/40?img=3" },
  { name: "Sarah Lee", action: "joined the platform", avatar: "https://i.pravatar.cc/40?img=4" },
  { name: "Alex Brown", action: "started a free trial", avatar: "https://i.pravatar.cc/40?img=5" },
];

const socialProofWidget = document.getElementById('social-proof-widget');
const socialProofContainer = document.getElementById('social-proof-message-container');
const closeWidgetButton = document.querySelector('.close-widget');

function getRandomMessage() {
  const randomIndex = Math.floor(Math.random() * socialProofMessages.length);
  return socialProofMessages[randomIndex];
}

function showSocialProofMessage() {
  const message = getRandomMessage();
  const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const messageElement = document.createElement('div');
  messageElement.classList.add('social-proof-message');

  messageElement.innerHTML = `
    <img src="${message.avatar}" alt="${message.name}">
    <div class="message-content">
      <p><strong>${message.name}</strong> ${message.action}.</p>
      <span class="timestamp">${timestamp}</span>
    </div>
  `;

  // Append the message to the container
  socialProofContainer.innerHTML = ''; // Clear previous message
  socialProofContainer.appendChild(messageElement);

  // Trigger the slide-in animation
  socialProofWidget.style.animation = 'slideIn 0.5s forwards';

  // After 5 seconds, trigger the slide-out animation
  setTimeout(() => {
    socialProofWidget.style.animation = 'slideOut 0.5s forwards';
  }, 5000);
}

// Start the social proof simulation
setInterval(showSocialProofMessage, 7000); // Show a new message every 7 seconds

// Close widget functionality
closeWidgetButton.addEventListener('click', () => {
  socialProofWidget.style.animation = 'slideOut 0.5s forwards';
});

// Show the first message immediately
showSocialProofMessage();
