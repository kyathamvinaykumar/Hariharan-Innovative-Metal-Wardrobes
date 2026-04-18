/* ====================================================
   METAL WARDROBES — MAIN SCRIPT
==================================================== */

(function () {
  'use strict';

  /* ── DOM REFS ────────────────────────────────── */
  const navbar      = document.getElementById('navbar');
  const hamburger   = document.getElementById('hamburger-btn');
  const mobileMenu  = document.getElementById('mobile-menu');
  const navLinks    = document.querySelectorAll('.nav-link');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  const sections    = document.querySelectorAll('section[id]');
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');

  /* ── NAVBAR SCROLL SHADOW ────────────────────── */
  function onScroll() {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    updateActiveNav();
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load

  /* ── ACTIVE NAV LINK ON SCROLL ───────────────── */
  const sectionIds = ['home', 'products', 'gallery', 'why-us', 'about', 'contact'];

  function updateActiveNav() {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionTop    = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href').replace('#', '');
      if (href === current) link.classList.add('active');
    });
  }

  /* ── MOBILE MENU TOGGLE ──────────────────────── */
  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    mobileMenu.setAttribute('aria-hidden', !isOpen);
    // Prevent body scroll when menu open
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
  
  // Mobile Dropdown Toggle
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const parent = toggle.closest('.mobile-nav-item.dropdown');
      const menu = parent.querySelector('.mobile-dropdown-menu');
      const isActive = toggle.classList.toggle('active');
      menu.classList.toggle('open', isActive);
    });
  });

  function closeMenu() {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  mobileLinks.forEach(link => link.addEventListener('click', closeMenu));

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && !mobileMenu.contains(e.target)) {
      closeMenu();
    }
  });

  /* ── REVEAL ON SCROLL (IntersectionObserver) ─── */
  const revealElements = document.querySelectorAll(
    '.product-card, .why-card, .gallery-item, .trust-item, .about-grid, .contact-grid'
  );

  revealElements.forEach((el, i) => {
    el.classList.add('reveal');
    // Stagger delay for grid children
    const parent = el.closest('.products-grid, .why-grid, .gallery-grid, .trust-container');
    if (parent) {
      const siblings = Array.from(parent.children).filter(c => c === el || c.classList.contains(el.classList[0]));
      const idx = Array.from(parent.children).indexOf(el);
      if (idx < 6) el.style.transitionDelay = `${idx * 0.08}s`;
    }
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  /* ── CONTACT FORM HANDLER ────────────────────── */
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name    = document.getElementById('form-name').value.trim();
      const phone   = document.getElementById('form-phone').value.trim();
      const message = document.getElementById('form-message').value.trim();

      // Basic validation
      if (!name) {
        showFormMessage('Please enter your name.', false);
        document.getElementById('form-name').focus();
        return;
      }
      if (!phone) {
        showFormMessage('Please enter your phone number.', false);
        document.getElementById('form-phone').focus();
        return;
      }
      if (!message) {
        showFormMessage('Please describe your requirements.', false);
        document.getElementById('form-message').focus();
        return;
      }

      // Simulate form submission (replace with actual endpoint/WhatsApp redirect later)
      const submitBtn = document.getElementById('submit-btn');
      submitBtn.textContent = 'Sending…';
      submitBtn.disabled = true;

      setTimeout(() => {
        showFormMessage('✓ Message sent! We\'ll get back to you shortly.', true);
        contactForm.reset();
        submitBtn.textContent = 'Send Message';
        submitBtn.disabled = false;
      }, 1200);
    });
  }

  function showFormMessage(msg, success) {
    formSuccess.textContent = msg;
    formSuccess.style.color = success ? '#1A1A1A' : '#8B0000';
  }

  /* ── SMOOTH ANCHOR SCROLLING (fallback) ─────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').slice(1);
      const target   = document.getElementById(targetId);
      if (!target) return;
      e.preventDefault();
      const offset = navbar.offsetHeight;
      const top    = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ── GALLERY LIGHTBOX (simple) ───────────────── */
  const galleryItems = document.querySelectorAll('.gallery-item');

  // Create lightbox DOM
  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-modal', 'true');
  lightbox.setAttribute('aria-label', 'Image lightbox');
  lightbox.style.cssText = `
    display:none; position:fixed; inset:0; z-index:9999;
    background:rgba(0,0,0,0.9); align-items:center; justify-content:center;
    cursor:zoom-out;
  `;

  const lbImg = document.createElement('img');
  lbImg.style.cssText = `
    max-width:90vw; max-height:88vh; object-fit:contain;
    border-radius:6px; box-shadow:0 8px 48px rgba(0,0,0,0.6);
    animation: lbFadeIn 0.25s ease;
  `;

  const lbClose = document.createElement('button');
  lbClose.innerHTML = '&times;';
  lbClose.setAttribute('aria-label', 'Close lightbox');
  lbClose.style.cssText = `
    position:absolute; top:20px; right:28px;
    background:none; border:none; color:#fff;
    font-size:2.4rem; cursor:pointer; line-height:1;
    font-family: sans-serif;
    transition: color 0.2s;
  `;
  lbClose.addEventListener('mouseenter', () => lbClose.style.color = '#C9A84C');
  lbClose.addEventListener('mouseleave', () => lbClose.style.color = '#fff');

  const lbStyle = document.createElement('style');
  lbStyle.textContent = `@keyframes lbFadeIn { from{opacity:0;transform:scale(0.95)} to{opacity:1;transform:scale(1)} }`;
  document.head.appendChild(lbStyle);

  lightbox.appendChild(lbImg);
  lightbox.appendChild(lbClose);
  document.body.appendChild(lightbox);

  window.openLightbox = function(src, alt) {
    lbImg.src  = src;
    lbImg.alt  = alt || '';
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    lbClose.focus();
  }

  function closeLightbox() {
    lightbox.style.display = 'none';
    document.body.style.overflow = '';
  }

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (img) openLightbox(img.src, img.alt);
    });
    item.setAttribute('tabindex', '0');
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        item.click();
      }
    });
  });

  lbClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });

  /* ── HERO SLIDER ──────────────────────────────── */
  const slides = document.querySelectorAll('.hero-slide');
  const btnPrev = document.getElementById('hero-btn-prev');
  const btnNext = document.getElementById('hero-btn-next');
  let currentSlide = 0;
  let slideInterval;

  if (slides.length > 0) {
    function goToSlide(n) {
      slides[currentSlide].classList.remove('active');
      currentSlide = (n + slides.length) % slides.length;
      slides[currentSlide].classList.add('active');
    }

    function nextSlide() { goToSlide(currentSlide + 1); }
    function prevSlide() { goToSlide(currentSlide - 1); }

    if (btnNext) {
      btnNext.addEventListener('click', () => { nextSlide(); resetInterval(); });
    }
    if (btnPrev) {
      btnPrev.addEventListener('click', () => { prevSlide(); resetInterval(); });
    }

    function startInterval() { slideInterval = setInterval(nextSlide, 5000); }
    function resetInterval() { clearInterval(slideInterval); startInterval(); }
    startInterval();
  }

  /* ── REVIEWS AUTO-SCROLL LOOP ────────────────── */
  const reviewTrack = document.getElementById('reviews-track');
  if (reviewTrack) {
    // Duplicate the cards to make the scroll seamless
    const cards = reviewTrack.innerHTML;
    reviewTrack.innerHTML += cards;
  }

  /* ── GALLERY SHOW MORE (STRICT LOGIC) ──────── */
  const btnShowMore = document.getElementById('gallery-show-more-btn');
  const mainGalleryGrid = document.getElementById('main-gallery-grid');

  if (btnShowMore && mainGalleryGrid) {
    btnShowMore.addEventListener('click', () => {
      // Append remaining images from /gallary/. Do not clear existing initial images.
      btnShowMore.textContent = 'Loading...';
      btnShowMore.style.pointerEvents = 'none';

      // The exact files uploaded by the user in the "gallary" folder (optimized):
      const gallaryFiles = [
        "123.webp", "2.webp", "202.webp", "22.webp", "222.webp", "6.webp",
        "dfear copy.webp", "dfqawqd copy.webp", "efe (1).webp", "efe (2).webp", 
        "efe (4).webp", "fawe.webp", "fawrdi copy.webp", "fef.webp", 
        "ggggggggg.webp", "IMG-20200812-WA0040.webp", "NYJB6075.webp", "q.webp", 
        "Screenshot_20220520-105537_WhatsAppBusiness.webp", "Screenshot_20220520-105546_WhatsAppBusiness.webp", 
        "T4R.webp", "ttttttttttttt.webp", "uuuuuuuuuuu.webp", "vse.webp", 
        "wdcwe copy.webp", "wefwed copy.webp", "WhatsApp Image 2026-01-30 at 11.53.03 AM.webp",
        "WhatsApp Image 2026-04-18 at 1.01.09 PM (2).webp", "WhatsApp Image 2026-04-18 at 1.01.11 PM (2).webp",
        "WhatsApp Image 2026-04-18 at 1.01.22 PM (1).webp", "WhatsApp Image 2026-04-18 at 1.01.35 PM (1).webp",
        "WhatsApp Image 2026-04-18 at 1.01.35 PM (2).webp"
      ];

      // Use a Set to handle potential duplicates and ensure we don't reload featured images
      const featuredInHtml = ["123.webp", "2.webp", "202.webp", "22.webp", "222.webp", "6.webp", "dfear copy.webp", "dfqawqd copy.webp"];
      const remainingFiles = gallaryFiles.filter(f => !featuredInHtml.includes(f));

      remainingFiles.forEach((filename, i) => {
        const div = document.createElement('div');
        div.className = 'gallery-item';
        div.style.animation = 'lbFadeIn 0.6s ease';
        
        const imgEl = document.createElement('img');
        imgEl.alt = `Gallery Item ${i + 7}`;
        imgEl.src = `gallary/${filename}`;
        imgEl.loading = 'lazy';
        imgEl.width = 800; // Standardize for gallery
        imgEl.height = 600;
        imgEl.decoding = 'async'; // Offloads decoding off main-thread to fix lag
        
        // Add zoom overlay
        const overlay = document.createElement('div');
        overlay.className = 'gallery-overlay';
        overlay.innerHTML = `
          <svg class="gallery-zoom-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="11" r="7" stroke="white" stroke-width="2"/>
            <path d="M20 20l-4-4" stroke="white" stroke-width="2" stroke-linecap="round"/>
            <path d="M8 11h6M11 8v6" stroke="white" stroke-width="2" stroke-linecap="round"/>
          </svg>
        `;

        imgEl.onerror = () => {
          div.remove();
        };

        div.addEventListener('click', () => {
          openLightbox(imgEl.src, imgEl.alt);
        });
        
        div.appendChild(imgEl);
        div.appendChild(overlay);
        mainGalleryGrid.appendChild(div);
      });

      // Hide the show more button's parent container
      setTimeout(() => {
        btnShowMore.parentElement.style.display = 'none';
      }, 500);
    });
  }

})();
