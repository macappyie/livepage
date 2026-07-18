// ===================== MONEY ASSURE — script.js =====================

// Active nav link based on current page
document.addEventListener('DOMContentLoaded', function () {
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link-ma').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === path) link.classList.add('active');
  });

  // Reveal-on-scroll
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // Bootstrap tooltip / validation for contact form
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!contactForm.checkValidity()) {
        e.stopPropagation();
        contactForm.classList.add('was-validated');
        return;
      }
      var successBox = document.getElementById('formSuccess');
      contactForm.reset();
      contactForm.classList.remove('was-validated');
      if (successBox) {
        successBox.classList.remove('d-none');
        setTimeout(function () { successBox.classList.add('d-none'); }, 6000);
      }
    });
  }

  // Pricing toggle (monthly/one-time) if present
  var billToggle = document.getElementById('billToggle');
  if (billToggle) {
    billToggle.addEventListener('change', function () {
      document.querySelectorAll('[data-price-monthly]').forEach(function (el) {
        var monthly = el.getAttribute('data-price-monthly');
        var full = el.getAttribute('data-price-full');
        el.textContent = billToggle.checked ? monthly : full;
      });
      document.querySelectorAll('.price-suffix').forEach(function (el) {
        el.textContent = billToggle.checked ? '/mo (3-mo plan)' : 'one-time';
      });
    });
  }

  // Navbar collapse on link click (mobile)
  document.querySelectorAll('.navbar-collapse .nav-link-ma').forEach(function (link) {
    link.addEventListener('click', function () {
      var nav = document.querySelector('.navbar-collapse.show');
      if (nav) new bootstrap.Collapse(nav).hide();
    });
  });
});

