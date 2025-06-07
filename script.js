// Theme toggle functionality
  const themeToggleBtn = document.getElementById('themeToggle');
  const rootElement = document.documentElement;

  // Check saved theme in localStorage, if none, use system preference or dark by default
  function getPreferredTheme() {
    if (localStorage.getItem('theme')) {
      return localStorage.getItem('theme');
    }
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
    return 'dark';
  }

  function setTheme(theme) {
    rootElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateToggleIcon(theme);
  }

  function updateToggleIcon(theme) {
    // Change icon color or style if needed in future, currently primary color helps
  }

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = rootElement.getAttribute('data-theme') || 'dark';
    if (currentTheme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  });

  // Initialize theme on page load
  setTheme(getPreferredTheme());

  // Smooth scroll nav
  document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const targetId = anchor.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Optional: form submit handler with validation message
  const form = document.querySelector('.contact-form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!form.checkValidity()) {
      alert('Please fill in all required fields with valid information.');
      return;
    }
    alert('Thank you for your message! I will get back to you soon.');
    form.reset();
  });