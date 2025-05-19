// <!-- ------------------------------------------------------Navbar------------------------------------------------------------------------- -->

function handleScroll() {
    const navbar = document.querySelector('.navbar');
    const navbarCollapse = document.getElementById('navbarContent');

    function updateNavbar() {
      const isScrolled = window.scrollY > 1 || navbarCollapse.classList.contains('show');
      if (isScrolled) {
        navbar.classList.add('navbar-sticky', 'navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-sticky', 'navbar-scrolled');
      }
    }

    window.addEventListener('scroll', updateNavbar);
    navbarCollapse.addEventListener('shown.bs.collapse', updateNavbar);
    navbarCollapse.addEventListener('hidden.bs.collapse', updateNavbar);
  }

  handleScroll();


// <!-- ------------------------------------------------------Stats------------------------------------------------------------------------- -->

function incrementStats() {
  const counters = document.querySelectorAll('.counter');

  counters.forEach((counter) => {
    counter.innerText = 0;

    const updateCounter = () => {
      const target = +counter.getAttribute('data-target');
      const c = +counter.innerText;

      const increment = target / 200;

      if (c < target) {
        counter.innerText = Math.ceil(c + increment);
        setTimeout(updateCounter, 1);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
}

document.addEventListener("DOMContentLoaded", function () {
  handleScroll();
});

// <!-- ------------------------------------------------------Modal------------------------------------------------------------------------- -->

// 1) Select your form and initialize the Bootstrap Modal

const form = document.getElementById('contactForm');
// or 'form' if it's the only form
const thankYouModal = new bootstrap.Modal(document.getElementById('thankYouModal'));

form.addEventListener('submit', function (e) {
  // 2) Prevent the browser from performing the normal POST / reload
  e.preventDefault();
  // 3) Show the thank-you popup
  thankYouModal.show();

  setTimeout(() => thankYouModal.hide(), 10000);  //10second

  // 4) Reset all form fields back to their defaults
  form.reset();
});


// <!-- --------------------------------------------------Hero text change------------------------------------------------------------------------- -->
 const texts = [" Events", " Trips", " Seminars"];
    let index = 0;

    setInterval(() => {
      index = (index + 1) % texts.length;
      document.getElementById("textElement").textContent = texts[index];
    }, 1000); // 2 seconds



// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', handleScroll);

document.addEventListener('DOMContentLoaded', incrementStats);