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
  { name: "John Doe From Canada", action: "signed up", avatar: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg` },
  { name: "Esther Madu From Nigeria", action: "subscribed to the monthly", avatar: `https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * 100)}.jpg` },
  { name: "Mike Johnson From South Africa", action: "purchased a weekly plan", avatar: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg` },
  { name: "Sarah Lee From Malasia", action: "joined the platform", avatar: `https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * 100)}.jpg` },
  { name: "Ademola Seun From Nigeria", action: "purchased a yearly plan", avatar: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg` },
  { name: "Collins Kings From Finland", action: "purchased a yearly plan", avatar: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg` },
  { name: "MEZIDON From NIgeria", action: "purchased a yearly plan", avatar: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg` },
  { name: "Arinze Samuel From Nigeria", action: "purchased a yearly plan", avatar: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg` },
  { name: "Asa Amara From UK", action: "purchased a yearly plan", avatar: `https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * 100)}.jpg` },
  { name: "Don Tee From Nigeria", action: "purchased a yearly plan", avatar: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg` },
  { name: "Rankur From India", action: "purchased a yearly plan", avatar: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg` },
  { name: "Royce From Singapore", action: "purchased a yearly plan", avatar: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg` },
  { name: "Jalal From Bangladesh", action: "purchased a yearly plan", avatar: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg` },
  { name: "Mario Castro From Coasta Rica", action: "purchased a yearly plan", avatar: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg` },
  { name: "Ismail Aremu From Nigeria", action: "purchased a monthly plan", avatar: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg` },
  { name: "Kokoyi A. From USA", action: "purchased a monthly plan", avatar: `https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * 100)}.jpg` },
  { name: "Happiness Okobi From Nigeria", action: "purchased a monthly plan", avatar: `https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * 100)}.jpg` },
  { name: "Dario Arevalo From Ecuador, South America", action: "purchased a weekly plan", avatar: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg` },
  { name: "Oswaldo Arpi From Ecuador, South America" , action: "purchased a yearly plan", avatar: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg` },
  { name: "Taiwo Olusegun From Lagos, Nigeria" , action: "purchased a yearly plan", avatar: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg` },
  { name: "Kevin Wieler From Canada" , action: "purchased a monthly plan", avatar: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg` },
  { name: "Chika Okechukwu From Nigeria" , action: "purchased a yearly plan", avatar: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg` },
  { name: "Md Faisal From Banglaesh" , action: "purchased a monthly plan", avatar: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg` },
  { name: "Keith Obri From United States" , action: "purchased a yearly plan", avatar: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg` },
  { name: "Hari Chanda From United States" , action: "purchased a yearly plan", avatar: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg` },
  { name: "Defi Womxn From UK" , action: "purchased a monthly plan", avatar: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg` },
  { name: "Jack Carson From United States" , action: "purchased a monthly plan", avatar: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg` },
  { name: "Els Magnate From Nigeria" , action: "purchased a monthly plan", avatar: `https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * 100)}.jpg` },
  { name: "Seyi Adejor from Nigeria" , action: "purchased a monthly plan", avatar: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg` },
  { name: "Theophilus isibor From Nigeria" , action: "purchased a monthly plan", avatar: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg` },
  { name: "Anderson From United States" , action: "purchased a monthly plan", avatar: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg` },
];

const socialProofWidget = document.getElementById('social-proof-widget');
const socialProofContainer = document.getElementById('social-proof-message-container');
const closeWidgetButton = document.querySelector('.close-widget');

function getRandomMessage() {
  const randomIndex = Math.floor(Math.random() * socialProofMessages.length);
  return socialProofMessages[randomIndex];
}

function getRandomTimestamp() {
  const timeUnits = [
    { unit: "second", value: 1, label: "Just now" },
    { unit: "minute", value: 60, label: "minutes ago" },
    { unit: "hour", value: 3600, label: "hours ago" },
    { unit: "day", value: 86400, label: "days ago" },
  ];

  // Randomly select a time unit (e.g., seconds, minutes, hours, days)
  const randomUnit = timeUnits[Math.floor(Math.random() * timeUnits.length)];

  // Generate a random number for the selected unit
  const randomValue = Math.floor(Math.random() * 20) + 1; // Random number between 1 and 20

  // Format the timestamp
  if (randomUnit.unit === "second" && randomValue <= 5) {
    return "Just now";
  } else {
    return `${randomValue} ${randomUnit.label}`;
  }
}

function showSocialProofMessage() {
  const message = getRandomMessage();
  const timestamp = getRandomTimestamp(); // Use random timestamp

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
setInterval(showSocialProofMessage, 10000); // Show a new message every 10 seconds

// Close widget functionality
closeWidgetButton.addEventListener('click', () => {
  socialProofWidget.style.animation = 'slideOut 0.5s forwards';
});

// Show the first message immediately
showSocialProofMessage();
