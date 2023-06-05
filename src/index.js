/**
 * @fileOverview JavaScript functionality for the portfolio website.
 * @version 1.0.0
 */

/**
 * Represents the portfolio website functionality.
 * @namespace
 */
const Portfolio = {
  /**
   * Initialize the portfolio website.
   */
  init: function() {
    // Click event on portfolio items
    const portfolioItems = document.querySelectorAll('#portfolio li');
    portfolioItems.forEach(function(item) {
      item.addEventListener('click', function() {
        this.classList.toggle('hidden');
      });
    });

    // Hover effect on navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(function(link) {
      link.addEventListener('mouseenter', function() {
        this.style.color = '#00FF00';
      });
      link.addEventListener('mouseleave', function() {
        this.style.color = '#66006';
      });
    });

    // Toggle dark mode
    const settingsToggle = document.getElementById('settings-toggle');
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.style.display = 'none'; // Hide the "Toggle Dark Mode" button initially

    settingsToggle.addEventListener('click', function() {
      themeToggle.style.display = 'block'; // Show the "Toggle Dark Mode" button
    });

    themeToggle.addEventListener('click', Portfolio.toggleDarkMode);
  },

  /**
   * Toggle dark mode for the portfolio website.
   */
  toggleDarkMode: function() {
    const themeToggle = document.getElementById('theme-toggle');
    document.body.classList.toggle('dark-mode');
    themeToggle.style.display = 'none';

  }
};

// Initialize the portfolio website
Portfolio.init();
