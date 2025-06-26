// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Navbar scroll effect
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Form submission handling
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(this);
      const formObject = {};
      formData.forEach((value, key) => {
        formObject[key] = value;
      });

      // Here you would typically send the data to a server
      console.log("Form submitted:", formObject);

      // Show success message
      const submitButton = this.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";

      // Simulate form submission (replace with actual API call)
      setTimeout(() => {
        submitButton.textContent = "Message Sent!";
        submitButton.classList.add("btn-success");
        this.reset();

        // Reset button after 3 seconds
        setTimeout(() => {
          submitButton.disabled = false;
          submitButton.textContent = originalText;
          submitButton.classList.remove("btn-success");
        }, 3000);
      }, 1500);
    });
  }

  // Intersection Observer for fade-in animations
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe sections and cards for fade-in animation
  document
    .querySelectorAll(".feature-card, .amenity-card, .about-section img")
    .forEach((element) => {
      observer.observe(element);
    });
  image.png;

  // Back to top button functionality
  const backToTopButton = document.getElementById("backToTop");
  if (backToTopButton) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        backToTopButton.style.opacity = "1";
      } else {
        backToTopButton.style.opacity = "0";
      }
    });

    backToTopButton.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});

// Remove the injected CSS for image opacity
const style = document.createElement("style");
style.textContent = `
    .fade-in {
        animation: fadeIn 0.6s ease-out forwards;
    }
`;
document.head.appendChild(style);

// Load Navbar
fetch("../component/navbar.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("navbar").innerHTML = data;
  });

// Load Footer
fetch("../component/footer.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });
