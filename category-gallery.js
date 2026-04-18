(function () {
  'use strict';

  const categoryData = {
    'school-furniture': {
      title: 'School Furniture',
      folder: 'School Furniture',
      images: [
        "WhatsApp Image 2026-04-18 at 12.57.06 PM (1).webp", "WhatsApp Image 2026-04-18 at 12.57.06 PM.webp",
        "WhatsApp Image 2026-04-18 at 12.57.07 PM (1).webp", "WhatsApp Image 2026-04-18 at 12.57.07 PM (2).webp",
        "WhatsApp Image 2026-04-18 at 12.57.07 PM (3).webp", "WhatsApp Image 2026-04-18 at 12.57.07 PM.webp",
        "WhatsApp Image 2026-04-18 at 12.57.08 PM (1).webp", "WhatsApp Image 2026-04-18 at 12.57.08 PM (2).webp",
        "WhatsApp Image 2026-04-18 at 12.57.08 PM.webp", "WhatsApp Image 2026-04-18 at 12.57.09 PM (1).webp",
        "WhatsApp Image 2026-04-18 at 12.57.09 PM (2).webp", "WhatsApp Image 2026-04-18 at 12.57.09 PM (3).webp",
        "WhatsApp Image 2026-04-18 at 12.57.09 PM.webp", "WhatsApp Image 2026-04-18 at 12.57.10 PM (1).webp",
        "WhatsApp Image 2026-04-18 at 12.57.10 PM (2).webp", "WhatsApp Image 2026-04-18 at 12.57.10 PM (3).webp",
        "WhatsApp Image 2026-04-18 at 12.57.10 PM.webp", "WhatsApp Image 2026-04-18 at 12.57.12 PM (1).webp",
        "WhatsApp Image 2026-04-18 at 12.57.12 PM.webp", "WhatsApp Image 2026-04-18 at 12.57.13 PM (1).webp",
        "WhatsApp Image 2026-04-18 at 12.57.13 PM (2).webp", "WhatsApp Image 2026-04-18 at 12.57.13 PM.webp",
        "WhatsApp Image 2026-04-18 at 12.57.14 PM (1).webp", "WhatsApp Image 2026-04-18 at 12.57.14 PM (2).webp",
        "WhatsApp Image 2026-04-18 at 12.57.14 PM.webp", "WhatsApp Image 2026-04-18 at 12.57.15 PM (1).webp",
        "WhatsApp Image 2026-04-18 at 12.57.15 PM (2).webp", "WhatsApp Image 2026-04-18 at 12.57.15 PM.webp",
        "WhatsApp Image 2026-04-18 at 12.57.16 PM (1).webp", "WhatsApp Image 2026-04-18 at 12.57.16 PM (2).webp",
        "WhatsApp Image 2026-04-18 at 12.57.16 PM.webp", "WhatsApp Image 2026-04-18 at 12.57.17 PM (1).webp",
        "WhatsApp Image 2026-04-18 at 12.57.17 PM (2).webp", "WhatsApp Image 2026-04-18 at 12.57.17 PM (3).webp",
        "WhatsApp Image 2026-04-18 at 12.57.17 PM.webp", "WhatsApp Image 2026-04-18 at 12.57.18 PM (1).webp",
        "WhatsApp Image 2026-04-18 at 12.57.18 PM (2).webp", "WhatsApp Image 2026-04-18 at 12.57.18 PM.webp",
        "WhatsApp Image 2026-04-18 at 12.57.19 PM (1).webp", "WhatsApp Image 2026-04-18 at 12.57.19 PM.webp"
      ]
    },
    'fabrication': {
      title: 'Fabrications',
      folder: 'Fabrication',
      images: [
        "WhatsApp Image 2026-04-18 at 1.00.46 PM.webp", "WhatsApp Image 2026-04-18 at 1.00.47 PM (1).webp",
        "WhatsApp Image 2026-04-18 at 1.00.47 PM (2).webp", "WhatsApp Image 2026-04-18 at 1.00.47 PM.webp",
        "WhatsApp Image 2026-04-18 at 1.00.48 PM (1).webp", "WhatsApp Image 2026-04-18 at 1.00.48 PM (2).webp",
        "WhatsApp Image 2026-04-18 at 1.00.48 PM (3).webp", "WhatsApp Image 2026-04-18 at 1.00.48 PM.webp",
        "WhatsApp Image 2026-04-18 at 1.00.49 PM (1).webp", "WhatsApp Image 2026-04-18 at 1.00.49 PM (2).webp",
        "WhatsApp Image 2026-04-18 at 1.00.49 PM.webp", "WhatsApp Image 2026-04-18 at 1.00.50 PM (1).webp",
        "WhatsApp Image 2026-04-18 at 1.00.50 PM (2).webp", "WhatsApp Image 2026-04-18 at 1.00.50 PM.webp",
        "WhatsApp Image 2026-04-18 at 1.00.51 PM (1).webp", "WhatsApp Image 2026-04-18 at 1.00.51 PM (2).webp",
        "WhatsApp Image 2026-04-18 at 1.00.51 PM.webp", "WhatsApp Image 2026-04-18 at 1.00.52 PM (1).webp",
        "WhatsApp Image 2026-04-18 at 1.00.52 PM (2).webp", "WhatsApp Image 2026-04-18 at 1.00.52 PM.webp",
        "WhatsApp Image 2026-04-18 at 1.00.53 PM (1).webp", "WhatsApp Image 2026-04-18 at 1.00.53 PM (2).webp",
        "WhatsApp Image 2026-04-18 at 1.00.53 PM.webp", "WhatsApp Image 2026-04-18 at 1.00.54 PM (1).webp",
        "WhatsApp Image 2026-04-18 at 1.00.54 PM (2).webp", "WhatsApp Image 2026-04-18 at 1.00.54 PM (3).webp",
        "WhatsApp Image 2026-04-18 at 1.00.54 PM.webp", "WhatsApp Image 2026-04-18 at 1.00.55 PM (1).webp",
        "WhatsApp Image 2026-04-18 at 1.00.55 PM (2).webp", "WhatsApp Image 2026-04-18 at 1.00.55 PM.webp",
        "WhatsApp Image 2026-04-18 at 1.00.56 PM (1).webp", "WhatsApp Image 2026-04-18 at 1.00.56 PM (2).webp",
        "WhatsApp Image 2026-04-18 at 1.00.56 PM.webp", "WhatsApp Image 2026-04-18 at 1.00.57 PM (1).webp",
        "WhatsApp Image 2026-04-18 at 1.00.57 PM (2).webp", "WhatsApp Image 2026-04-18 at 1.00.57 PM.webp",
        "WhatsApp Image 2026-04-18 at 1.00.58 PM (1).webp", "WhatsApp Image 2026-04-18 at 1.00.58 PM (2).webp",
        "WhatsApp Image 2026-04-18 at 1.00.58 PM.webp", "WhatsApp Image 2026-04-18 at 1.00.59 PM (1).webp",
        "WhatsApp Image 2026-04-18 at 1.00.59 PM (2).webp", "WhatsApp Image 2026-04-18 at 1.00.59 PM.webp",
        "WhatsApp Image 2026-04-18 at 1.01.00 PM (1).webp", "WhatsApp Image 2026-04-18 at 1.01.00 PM (2).webp",
        "WhatsApp Image 2026-04-18 at 1.01.00 PM.webp", "WhatsApp Image 2026-04-18 at 1.01.01 PM (1).webp",
        "WhatsApp Image 2026-04-18 at 1.01.01 PM (2).webp", "WhatsApp Image 2026-04-18 at 1.01.01 PM.webp",
        "WhatsApp Image 2026-04-18 at 1.01.02 PM (1).webp", "WhatsApp Image 2026-04-18 at 1.01.02 PM (2).webp",
        "WhatsApp Image 2026-04-18 at 1.01.02 PM.webp", "WhatsApp Image 2026-04-18 at 1.01.03 PM (1).webp",
        "WhatsApp Image 2026-04-18 at 1.01.03 PM (2).webp", "WhatsApp Image 2026-04-18 at 1.01.03 PM.webp",
        "WhatsApp Image 2026-04-18 at 1.01.04 PM (1).webp", "WhatsApp Image 2026-04-18 at 1.01.04 PM (2).webp",
        "WhatsApp Image 2026-04-18 at 1.01.04 PM.webp", "WhatsApp Image 2026-04-18 at 1.01.05 PM (1).webp",
        "WhatsApp Image 2026-04-18 at 1.01.05 PM (2).webp", "WhatsApp Image 2026-04-18 at 1.01.05 PM.webp",
        "WhatsApp Image 2026-04-18 at 1.01.06 PM (1).webp", "WhatsApp Image 2026-04-18 at 1.01.06 PM.webp",
        "WhatsApp Image 2026-04-18 at 1.01.07 PM (1).webp", "WhatsApp Image 2026-04-18 at 1.01.07 PM (2).webp",
        "WhatsApp Image 2026-04-18 at 1.01.07 PM.webp", "WhatsApp Image 2026-04-18 at 1.01.08 PM (1).webp",
        "WhatsApp Image 2026-04-18 at 1.01.08 PM (2).webp", "WhatsApp Image 2026-04-18 at 1.01.08 PM.webp",
        "WhatsApp Image 2026-04-18 at 1.01.09 PM (1).webp", "WhatsApp Image 2026-04-18 at 1.01.09 PM (2).webp",
        "WhatsApp Image 2026-04-18 at 1.01.09 PM.webp", "WhatsApp Image 2026-04-18 at 1.01.10 PM (1).webp",
        "WhatsApp Image 2026-04-18 at 1.01.10 PM.webp", "WhatsApp Image 2026-04-18 at 1.01.11 PM (1).webp",
        "WhatsApp Image 2026-04-18 at 1.01.11 PM (2).webp", "WhatsApp Image 2026-04-18 at 1.01.11 PM.webp",
        "WhatsApp Image 2026-04-18 at 1.01.12 PM (1).webp", "WhatsApp Image 2026-04-18 at 1.01.12 PM (2).webp",
        "WhatsApp Image 2026-04-18 at 1.01.12 PM (3).webp", "WhatsApp Image 2026-04-18 at 1.01.12 PM.webp",
        "WhatsApp Image 2026-04-18 at 1.01.13 PM (1).webp", "WhatsApp Image 2026-04-18 at 1.01.13 PM.webp",
        "WhatsApp Image 2026-04-18 at 1.01.14 PM (1).webp", "WhatsApp Image 2026-04-18 at 1.01.14 PM.webp",
        "WhatsApp Image 2026-04-18 at 1.01.15 PM (1).webp", "WhatsApp Image 2026-04-18 at 1.01.15 PM (2).webp",
        "WhatsApp Image 2026-04-18 at 1.01.15 PM.webp", "WhatsApp Image 2026-04-18 at 1.01.16 PM (1).webp",
        "WhatsApp Image 2026-04-18 at 1.01.16 PM (2).webp", "WhatsApp Image 2026-04-18 at 1.01.16 PM.webp",
        "WhatsApp Image 2026-04-18 at 1.01.17 PM (1).webp", "WhatsApp Image 2026-04-18 at 1.01.17 PM (2).webp",
        "WhatsApp Image 2026-04-18 at 1.01.17 PM.webp", "WhatsApp Image 2026-04-18 at 1.01.18 PM (1).webp",
        "WhatsApp Image 2026-04-18 at 1.01.18 PM (2).webp", "WhatsApp Image 2026-04-18 at 1.01.18 PM.webp",
        "WhatsApp Image 2026-04-18 at 1.01.19 PM (1).webp", "WhatsApp Image 2026-04-18 at 1.01.19 PM (2).webp",
        "WhatsApp Image 2026-04-18 at 1.01.19 PM (3).webp", "WhatsApp Image 2026-04-18 at 1.01.19 PM.webp",
        "WhatsApp Image 2026-04-18 at 1.01.20 PM (1).webp", "WhatsApp Image 2026-04-18 at 1.01.20 PM (2).webp",
        "WhatsApp Image 2026-04-18 at 1.01.20 PM (3).webp", "WhatsApp Image 2026-04-18 at 1.01.20 PM.webp",
        "WhatsApp Image 2026-04-18 at 1.01.21 PM (1).webp", "WhatsApp Image 2026-04-18 at 1.01.21 PM (2).webp",
        "WhatsApp Image 2026-04-18 at 1.01.21 PM (3).webp", "WhatsApp Image 2026-04-18 at 1.01.21 PM.webp",
        "WhatsApp Image 2026-04-18 at 1.01.22 PM (1).webp", "WhatsApp Image 2026-04-18 at 1.01.22 PM (2).webp",
        "WhatsApp Image 2026-04-18 at 1.01.22 PM.webp", "WhatsApp Image 2026-04-18 at 1.01.23 PM (1).webp",
        "WhatsApp Image 2026-04-18 at 1.01.23 PM (2).webp", "WhatsApp Image 2026-04-18 at 1.01.23 PM.webp",
        "WhatsApp Image 2026-04-18 at 1.01.24 PM (1).webp", "WhatsApp Image 2026-04-18 at 1.01.24 PM (2).webp",
        "WhatsApp Image 2026-04-18 at 1.01.24 PM.webp", "WhatsApp Image 2026-04-18 at 1.01.25 PM (1).webp",
        "WhatsApp Image 2026-04-18 at 1.01.25 PM (2).webp", "WhatsApp Image 2026-04-18 at 1.01.25 PM.webp",
        "WhatsApp Image 2026-04-18 at 1.01.26 PM (1).webp", "WhatsApp Image 2026-04-18 at 1.01.26 PM (2).webp",
        "WhatsApp Image 2026-04-18 at 1.01.26 PM.webp", "WhatsApp Image 2026-04-18 at 1.01.27 PM (1).webp",
        "WhatsApp Image 2026-04-18 at 1.01.27 PM (2).webp", "WhatsApp Image 2026-04-18 at 1.01.27 PM.webp",
        "WhatsApp Image 2026-04-18 at 1.01.28 PM (1).webp", "WhatsApp Image 2026-04-18 at 1.01.28 PM (2).webp",
        "WhatsApp Image 2026-04-18 at 1.01.28 PM.webp", "WhatsApp Image 2026-04-18 at 1.01.29 PM (1).webp",
        "WhatsApp Image 2026-04-18 at 1.01.29 PM (2).webp", "WhatsApp Image 2026-04-18 at 1.01.29 PM.webp",
        "WhatsApp Image 2026-04-18 at 1.01.30 PM (1).webp", "WhatsApp Image 2026-04-18 at 1.01.30 PM (2).webp",
        "WhatsApp Image 2026-04-18 at 1.01.30 PM.webp", "WhatsApp Image 2026-04-18 at 1.01.31 PM (1).webp",
        "WhatsApp Image 2026-04-18 at 1.01.31 PM (2).webp", "WhatsApp Image 2026-04-18 at 1.01.31 PM (3).webp",
        "WhatsApp Image 2026-04-18 at 1.01.31 PM.webp", "WhatsApp Image 2026-04-18 at 1.01.32 PM (1).webp",
        "WhatsApp Image 2026-04-18 at 1.01.32 PM (2).webp", "WhatsApp Image 2026-04-18 at 1.01.32 PM.webp",
        "WhatsApp Image 2026-04-18 at 1.01.33 PM (1).webp", "WhatsApp Image 2026-04-18 at 1.01.33 PM (2).webp",
        "WhatsApp Image 2026-04-18 at 1.01.33 PM (3).webp", "WhatsApp Image 2026-04-18 at 1.01.33 PM.webp",
        "WhatsApp Image 2026-04-18 at 1.01.34 PM (1).webp", "WhatsApp Image 2026-04-18 at 1.01.34 PM (2).webp",
        "WhatsApp Image 2026-04-18 at 1.01.34 PM.webp", "WhatsApp Image 2026-04-18 at 1.01.35 PM (1).webp",
        "WhatsApp Image 2026-04-18 at 1.01.35 PM (2).webp", "WhatsApp Image 2026-04-18 at 1.01.35 PM.webp",
        "WhatsApp Image 2026-04-18 at 1.01.36 PM (1).webp", "WhatsApp Image 2026-04-18 at 1.01.36 PM (2).webp",
        "WhatsApp Image 2026-04-18 at 1.01.36 PM.webp", "WhatsApp Image 2026-04-18 at 1.01.37 PM (1).webp",
        "WhatsApp Image 2026-04-18 at 1.01.37 PM (2).webp", "WhatsApp Image 2026-04-18 at 1.01.37 PM.webp",
        "WhatsApp Image 2026-04-18 at 1.01.38 PM (1).webp", "WhatsApp Image 2026-04-18 at 1.01.38 PM (2).webp",
        "WhatsApp Image 2026-04-18 at 1.01.38 PM.webp", "WhatsApp Image 2026-04-18 at 1.01.39 PM (1).webp",
        "WhatsApp Image 2026-04-18 at 1.01.39 PM (2).webp", "WhatsApp Image 2026-04-18 at 1.01.39 PM.webp",
        "WhatsApp Image 2026-04-18 at 1.01.40 PM (1).webp", "WhatsApp Image 2026-04-18 at 1.01.40 PM (2).webp",
        "WhatsApp Image 2026-04-18 at 1.01.40 PM.webp", "WhatsApp Image 2026-04-18 at 1.01.41 PM (1).webp",
        "WhatsApp Image 2026-04-18 at 1.01.41 PM (2).webp", "WhatsApp Image 2026-04-18 at 1.01.41 PM.webp",
        "WhatsApp Image 2026-04-18 at 1.01.42 PM (1).webp", "WhatsApp Image 2026-04-18 at 1.01.42 PM (2).webp",
        "WhatsApp Image 2026-04-18 at 1.01.42 PM (3).webp", "WhatsApp Image 2026-04-18 at 1.01.42 PM.webp",
        "WhatsApp Image 2026-04-18 at 1.01.43 PM (1).webp", "WhatsApp Image 2026-04-18 at 1.01.43 PM (2).webp",
        "WhatsApp Image 2026-04-18 at 1.01.43 PM.webp"
      ]
    },
    'office-furniture': {
      title: 'Office Furniture',
      folder: 'Office Furniture',
      images: [
        "WhatsApp Image 2026-04-18 at 12.54.17 PM (1).webp", "WhatsApp Image 2026-04-18 at 12.54.17 PM.webp",
        "WhatsApp Image 2026-04-18 at 12.54.18 PM (1).webp", "WhatsApp Image 2026-04-18 at 12.54.18 PM (2).webp",
        "WhatsApp Image 2026-04-18 at 12.54.18 PM.webp", "WhatsApp Image 2026-04-18 at 12.54.19 PM (1).webp",
        "WhatsApp Image 2026-04-18 at 12.54.19 PM.webp", "WhatsApp Image 2026-04-18 at 12.55.12 PM.webp"
      ]
    },
    'residential-furniture': {
      title: 'Residential Furniture',
      folder: 'Residential furniture',
      images: [
        "123.webp", "2.webp", "202.webp", "22.webp", "222.webp", "6.webp", "dfear copy.webp",
        "efe (1).webp", "efe (2).webp", "efe (4).webp", "fawe.webp", "fawrdi copy.webp",
        "fef.webp", "ggggggggg.webp", "q.webp", "Screenshot_20220520-105537_WhatsAppBusiness.webp",
        "T4R.webp", "ttttttttttttt.webp", "uuuuuuuuuuu.webp", "vse.webp", "wdcwe copy.webp", "wefwed copy.webp"
      ]
    }
  };

  function initGallery() {
    const bodyCategory = document.body.dataset.category;
    const currentPath  = window.location.pathname;
    const pathParts    = currentPath.split(/[\/\\]/);
    const fileName     = pathParts.pop() || "";
    const pageName     = fileName.replace('.html', '').toLowerCase();
    
    // console.log('Active Category Detection:', { bodyCategory, pageName });
    
    // Prioritize data attribute (lowercase it), then fallback to filename
    const activeKey = (bodyCategory ? bodyCategory.toLowerCase() : pageName);
    const data = categoryData[activeKey];

    if (data) {
      const grid = document.getElementById('category-grid');
      const titleEl = document.getElementById('category-title');
      if (titleEl) titleEl.textContent = data.title;

      if (!grid) return;
      grid.innerHTML = ''; // Clear any placeholders

      data.images.forEach((img, i) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        // Add reveal animation style
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.6s ease';
        
        const imgPath = `${data.folder}/${img}`;
        
        // Use encodeURIComponent for filenames with spaces/special chars
        // But we need to keep the slash / between folder and filename
        const encodedPath = `${encodeURIComponent(data.folder)}/${encodeURIComponent(img)}`;

        item.innerHTML = `
          <img src="${encodedPath}" alt="${data.title} ${i + 1}" loading="lazy" decoding="async" width="800" height="600">
          <div class="gallery-overlay">
            <svg class="gallery-zoom-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="11" r="7" stroke="white" stroke-width="2"/>
              <path d="M20 20l-4-4" stroke="white" stroke-width="2" stroke-linecap="round"/>
              <path d="M8 11h6M11 8v6" stroke="white" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
        `;

        item.addEventListener('click', () => {
          if (window.openLightbox) {
            window.openLightbox(encodedPath, `${data.title} ${i + 1}`);
          }
        });

        grid.appendChild(item);
        
        // Trigger reveal
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        }, i * 50);
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGallery);
  } else {
    initGallery();
  }

})();
