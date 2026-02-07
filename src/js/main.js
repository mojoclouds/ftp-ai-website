// ============================================
// FTP.ai — Main JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  // --- Mobile Nav Toggle ---
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      toggle.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);

      // Focus first nav link when opening
      if (isOpen) {
        const firstLink = navLinks.querySelector('a');
        if (firstLink) firstLink.focus();
      }
    });

    // Close nav when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('open');
        navLinks.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close nav on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) {
        toggle.classList.remove('open');
        navLinks.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  // --- Scroll Fade-In Animations ---
  const fadeEls = document.querySelectorAll('.fade-in');

  if (fadeEls.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    fadeEls.forEach(el => observer.observe(el));
  }

  // --- Email Signup Form ---
  const signupForm = document.getElementById('signupForm');

  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('emailInput');
      const btn = signupForm.querySelector('button[type="submit"]');
      const email = input.value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(email)) {
        input.style.borderColor = '#ef4444';
        input.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.2)';
        return;
      }

      // TODO: Replace this URL with your Mailchimp form action URL
      // Example: https://ftp.us21.list-manage.com/subscribe/post?u=XXXXX&id=XXXXX
      const MAILCHIMP_URL = '';

      if (MAILCHIMP_URL) {
        const formData = new FormData();
        formData.append('EMAIL', email);

        fetch(MAILCHIMP_URL, {
          method: 'POST',
          body: formData,
          mode: 'no-cors'
        }).catch(() => {});
      }

      btn.textContent = '\u2713 Noted!';
      btn.style.background = '#10b981';
      btn.style.boxShadow = '0 0 20px rgba(16, 185, 129, 0.3)';
      input.disabled = true;
      btn.disabled = true;
    });
  }

  // Active nav link is now handled server-side by Eleventy via the
  // activeNav frontmatter variable in each page template.

  // --- Terminal Typing Animation ---
  const terminal = document.getElementById('terminal-anim');

  if (terminal) {
    const lines = terminal.querySelectorAll('.terminal-line');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // Show all lines immediately for reduced motion
      lines.forEach(line => {
        line.classList.add('typed');
      });
    } else {
      // Animate lines when terminal scrolls into view
      const terminalObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            lines.forEach((line, i) => {
              const delay = parseInt(line.dataset.delay, 10) || (i * 600);

              // Show cursor on current line
              setTimeout(() => {
                // Remove cursor from previous line
                if (i > 0) lines[i - 1].classList.remove('typing');
                line.classList.add('typed', 'typing');
              }, delay);

              // Remove cursor from last line after it appears
              if (i === lines.length - 1) {
                setTimeout(() => {
                  line.classList.remove('typing');
                }, delay + 800);
              }
            });
            terminalObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });

      terminalObserver.observe(terminal);
    }
  }
});
