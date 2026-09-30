/**
 * KIEN LAC DIDI CENTER - Main JavaScript Application
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Header & Back to Top
  const header = document.querySelector('.site-header');
  const backToTopBtn = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    if (header) {
      if (scrollPos > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    if (backToTopBtn) {
      if (scrollPos > 300) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 2. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        if (navMenu.classList.contains('open')) {
          icon.className = 'fas fa-times';
        } else {
          icon.className = 'fas fa-bars';
        }
      }
    });

    // Close on nav link click
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        const icon = mobileToggle.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
      });
    });
  }

  // 3. Modal Image / Diagram Viewer
  const modal = document.getElementById('diagramModal');
  const modalImg = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalClose = document.getElementById('modalClose');

  window.openModal = function(src, title) {
    if (modal && modalImg && modalTitle) {
      modalImg.src = src;
      modalTitle.textContent = title || 'Chi tiết sơ đồ';
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  if (modalClose && modal) {
    modalClose.addEventListener('click', () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // 4. Contact Form Handling
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'Gửi yêu cầu';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang gửi...';
      }

      setTimeout(() => {
        alert('Cảm ơn bạn đã gửi liên hệ tới Trung tâm Kiến Lạc DIDI Center! Chúng tôi sẽ phản hồi trong thời gian sớm nhất qua email hoặc hotline 0909.860.118.');
        contactForm.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }
      }, 900);
    });
  }

  // 5. Recruitment Form Handling
  const recruitForm = document.getElementById('recruitForm');
  if (recruitForm) {
    recruitForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Hồ sơ ứng tuyển của bạn đã được gửi thành công! Ban Nhân sự Kiến Lạc DIDI Center sẽ liên hệ phỏng vấn.');
      recruitForm.reset();
    });
  }

  // 6. News Filter Tabs
  const filterBtns = document.querySelectorAll('.filter-btn');
  const newsItems = document.querySelectorAll('.news-item-filterable');

  if (filterBtns.length > 0 && newsItems.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active', 'bg-red-800', 'text-white'));
        btn.classList.add('active', 'bg-red-800', 'text-white');

        const filter = btn.getAttribute('data-filter');
        newsItems.forEach(item => {
          if (filter === 'all' || item.getAttribute('data-category') === filter) {
            item.style.display = 'flex';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }
});
