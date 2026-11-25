/**
 * BABA COSMETICS - Global Application Architecture & Resilient Client Runtime
 * Location: Janta galli, Itahari-6, Sunsari, Koshi Province, Nepal
 * Features: Universal Event Delegation, Modal Scroll-Locking, Universal Form Validation,
 * Floating Toast Engine, Live Search & Filter, FAQ Accordions, and Zero-White-Screen Router.
 */

(function() {
  'use strict';

  // Floating Toast Notification Engine
  window.showToast = function(message, type = 'success', duration = 4500) {
    try {
      let toastContainer = document.getElementById('baba-toast-container');
      if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'baba-toast-container';
        toastContainer.className = 'toast-container';
        toastContainer.setAttribute('aria-live', 'polite');
        document.body.appendChild(toastContainer);
      }

      const toast = document.createElement('div');
      toast.className = `toast-item toast-${type}`;
      
      const icon = type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ';
      toast.innerHTML = `
        <div class="toast-icon">${icon}</div>
        <div class="toast-body">
          <div class="toast-title">${type === 'success' ? 'Success' : type === 'error' ? 'Validation Notice' : 'Information'}</div>
          <div class="toast-message">${message}</div>
        </div>
        <button type="button" class="toast-close" aria-label="Close notification">&times;</button>
      `;

      toastContainer.appendChild(toast);

      // Trigger animation
      requestAnimationFrame(() => {
        toast.classList.add('toast-visible');
      });

      const removeToast = () => {
        toast.classList.remove('toast-visible');
        setTimeout(() => {
          if (toast.parentNode) {
            toast.parentNode.removeChild(toast);
          }
        }, 300);
      };

      const timer = setTimeout(removeToast, duration);

      toast.querySelector('.toast-close').addEventListener('click', () => {
        clearTimeout(timer);
        removeToast();
      });
    } catch (e) {
      console.error('showToast error:', e);
      alert(message);
    }
  };

  // Modal Management with Body Scroll Locking
  const ModalController = {
    open: function(modalId, contextTitle) {
      try {
        const modal = document.getElementById(modalId);
        if (!modal) return;

        if (contextTitle) {
          const titleEl = modal.querySelector('.modal-dynamic-title');
          if (titleEl) titleEl.textContent = contextTitle;
        }

        modal.classList.add('active');
        document.body.classList.add('modal-locked');
        modal.setAttribute('aria-hidden', 'false');

        // Focus first input
        const firstInput = modal.querySelector('input:not([type="hidden"]), select, textarea');
        if (firstInput) {
          setTimeout(() => firstInput.focus(), 100);
        }
      } catch (err) {
        console.error('Modal open error:', err);
      }
    },

    close: function(modal) {
      try {
        if (!modal) {
          const openModals = document.querySelectorAll('.baba-modal.active');
          openModals.forEach(m => ModalController.close(m));
          return;
        }
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        
        // If no more open modals, restore body scroll
        if (!document.querySelector('.baba-modal.active')) {
          document.body.classList.remove('modal-locked');
        }
      } catch (err) {
        console.error('Modal close error:', err);
      }
    }
  };

  window.BabaModal = ModalController;

  // 1. Universal Event Delegation for Modals & CTAs
  document.addEventListener('click', function(e) {
    try {
      const target = e.target;

      // Close modal button or backdrop click
      const closeBtn = target.closest('.modal-close-trigger, .modal-backdrop');
      if (closeBtn) {
        const modal = target.closest('.baba-modal');
        if (modal) {
          ModalController.close(modal);
          return;
        }
      }

      // Modal triggers via explicit attributes
      const modalTrigger = target.closest('[data-modal-open]');
      if (modalTrigger) {
        e.preventDefault();
        const targetModalId = modalTrigger.getAttribute('data-modal-open');
        const context = modalTrigger.getAttribute('data-modal-context') || '';
        ModalController.open(targetModalId, context);
        return;
      }

      const consultBtn = target.closest('#book-consultation-btn, .btn-consultation, [data-action="consultation"]');
      if (consultBtn) {
        e.preventDefault();
        ModalController.open('modal-consultation', 'Book Commercial Consultation');
        return;
      }

      // Wholesale Quote Button Delegation
      const quoteBtn = target.closest('#request-quote-btn, .btn-quote, [data-action="quote"]');
      if (quoteBtn) {
        e.preventDefault();
        ModalController.open('modal-quote', 'Request Wholesale Quotation & Rate Sheet');
        return;
      }

      // Stock Check Button Delegation
      const stockBtn = target.closest('#check-stock-btn, .btn-stock, [data-action="stock"]');
      if (stockBtn) {
        e.preventDefault();
        ModalController.open('modal-stock', 'Check Live In-Store Stock Availability');
        return;
      }

      // FAQ Accordion Toggle Delegation
      const faqTrigger = target.closest('.faq-question-btn');
      if (faqTrigger) {
        e.preventDefault();
        const item = faqTrigger.closest('.faq-accordion-item');
        if (item) {
          const isOpen = item.classList.contains('active');
          // Close all in this group if desired, or toggle
          item.classList.toggle('active', !isOpen);
          faqTrigger.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
        }
        return;
      }

      // Mobile Navigation Menu Toggle
      const mobileToggle = target.closest('.mobile-nav-toggle');
      if (mobileToggle) {
        e.preventDefault();
        const nav = document.getElementById('primary-nav');
        if (nav) {
          const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
          mobileToggle.setAttribute('aria-expanded', !isExpanded);
          nav.classList.toggle('nav-open', !isExpanded);
        }
        return;
      }

      // Mobile navigation link click closes menu
      if (target.closest('#primary-nav a')) {
        const nav = document.getElementById('primary-nav');
        const mobileToggle = document.querySelector('.mobile-nav-toggle');
        if (nav && nav.classList.contains('nav-open')) {
          nav.classList.remove('nav-open');
          if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'false');
        }
      }
    } catch (err) {
      console.error('Click delegation error:', err);
    }
  });

  // Keyboard accessibility: Escape key to close modals
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' || e.keyCode === 27) {
      ModalController.close();
    }
  });

  // 2. Universal Form Validation & Toast Feedback
  document.addEventListener('submit', function(e) {
    try {
      const form = e.target;
      if (!form.matches('.baba-form, form[data-baba-form]')) return;

      e.preventDefault();

      // Basic field checks
      const requiredInputs = form.querySelectorAll('[required]');
      let hasError = false;
      let firstErrorField = null;

      requiredInputs.forEach(input => {
        const val = input.value.trim();
        if (!val) {
          hasError = true;
          input.classList.add('input-error');
          if (!firstErrorField) firstErrorField = input;
        } else {
          input.classList.remove('input-error');
        }

        // Phone check if applicable
        if (input.type === 'tel' && val) {
          const cleanPhone = val.replace(/[\s-]/g, '');
          if (cleanPhone.length < 9) {
            hasError = true;
            input.classList.add('input-error');
            if (!firstErrorField) firstErrorField = input;
          }
        }
      });

      if (hasError) {
        if (firstErrorField) firstErrorField.focus();
        window.showToast('Please fill in all required fields accurately.', 'error');
        return;
      }

      // Retrieve form values
      const formData = new FormData(form);
      const formName = form.getAttribute('data-form-type') || 'Enquiry';
      const personName = formData.get('fullName') || formData.get('name') || 'Customer';
      const phone = formData.get('phone') || formData.get('whatsapp') || '';

      // Submit feedback
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.textContent : 'Submit';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Processing...';
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        }

        form.reset();

        // Close parent modal if inside one
        const parentModal = form.closest('.baba-modal');
        if (parentModal) {
          ModalController.close(parentModal);
        }

        window.showToast(
          `Namaste ${personName}! Your ${formName} has been received. Our team at Janta Galli, Itahari will contact you at ${phone} promptly via WhatsApp/Phone.`,
          'success',
          6000
        );
      }, 700);

    } catch (err) {
      console.error('Form submission interception error:', err);
      window.showToast('Submission error. Please call our store directly at +977-25-580123.', 'error');
    }
  });

  // 3. Live Search & Tag Filtering for Knowledge Hub / Blog
  function initKnowledgeSearch() {
    try {
      const searchInput = document.getElementById('kb-search-input');
      const tagButtons = document.querySelectorAll('.kb-tag-btn');
      const articles = document.querySelectorAll('.kb-card');
      const noResultsEl = document.getElementById('kb-no-results');

      if (!articles.length) return;

      let activeTag = 'all';

      const filterArticles = () => {
        const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
        let visibleCount = 0;

        articles.forEach(card => {
          const title = card.getAttribute('data-title')?.toLowerCase() || '';
          const snippet = card.getAttribute('data-snippet')?.toLowerCase() || '';
          const category = card.getAttribute('data-category')?.toLowerCase() || '';
          const keywords = card.getAttribute('data-keywords')?.toLowerCase() || '';

          const matchesQuery = !query || title.includes(query) || snippet.includes(query) || keywords.includes(query);
          const matchesTag = activeTag === 'all' || category === activeTag.toLowerCase();

          if (matchesQuery && matchesTag) {
            card.style.display = '';
            visibleCount++;
          } else {
            card.style.display = 'none';
          }
        });

        if (noResultsEl) {
          noResultsEl.style.display = visibleCount === 0 ? 'block' : 'none';
        }
      };

      if (searchInput) {
        searchInput.addEventListener('input', filterArticles);
      }

      tagButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          tagButtons.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          activeTag = btn.getAttribute('data-tag') || 'all';
          filterArticles();
        });
      });
    } catch (e) {
      console.error('Knowledge search init error:', e);
    }
  }

  // 4. Robust Dropdown Navigation System (Desktop Instant Switch, Click Toggle & Mobile Accordion)
  function initDropdownNavigation() {
    try {
      const dropdownItems = Array.from(document.querySelectorAll('.nav-item-dropdown'));
      if (!dropdownItems.length) return;

      let leaveTimer = null;
      let activeDropdown = null;

      function closeAllDropdowns() {
        if (leaveTimer) {
          clearTimeout(leaveTimer);
          leaveTimer = null;
        }
        dropdownItems.forEach(item => {
          item.classList.remove('hovered', 'open');
          const btn = item.querySelector('.dropdown-chevron-btn');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        });
        activeDropdown = null;
      }

      function setActiveDropdown(targetDropdown) {
        if (leaveTimer) {
          clearTimeout(leaveTimer);
          leaveTimer = null;
        }

        // Immediately close any other open dropdown (zero delay, never simultaneous)
        dropdownItems.forEach(item => {
          if (item !== targetDropdown) {
            item.classList.remove('hovered', 'open');
            const btn = item.querySelector('.dropdown-chevron-btn');
            if (btn) btn.setAttribute('aria-expanded', 'false');
          }
        });

        targetDropdown.classList.add('hovered');
        const btn = targetDropdown.querySelector('.dropdown-chevron-btn');
        if (btn) btn.setAttribute('aria-expanded', 'true');
        activeDropdown = targetDropdown;
      }

      function scheduleClose(targetDropdown) {
        if (leaveTimer) clearTimeout(leaveTimer);
        leaveTimer = setTimeout(() => {
          if (activeDropdown === targetDropdown && !targetDropdown.classList.contains('open')) {
            targetDropdown.classList.remove('hovered');
            const btn = targetDropdown.querySelector('.dropdown-chevron-btn');
            if (btn) btn.setAttribute('aria-expanded', 'false');
            activeDropdown = null;
          }
        }, 220);
      }

      dropdownItems.forEach(dropdown => {
        const chevronBtn = dropdown.querySelector('.dropdown-chevron-btn');
        const mainLink = dropdown.querySelector('.dropdown-main-link');
        const menu = dropdown.querySelector('.dropdown-menu');

        // Desktop Hover triggers: immediate switch
        dropdown.addEventListener('mouseenter', () => {
          if (window.innerWidth > 768) {
            setActiveDropdown(dropdown);
          }
        });

        dropdown.addEventListener('mouseleave', () => {
          if (window.innerWidth > 768) {
            scheduleClose(dropdown);
          }
        });

        // Explicit listeners on dropdown-menu to guarantee persistence while hovering menu items
        if (menu) {
          menu.addEventListener('mouseenter', () => {
            if (window.innerWidth > 768) {
              setActiveDropdown(dropdown);
            }
          });
          menu.addEventListener('mouseleave', () => {
            if (window.innerWidth > 768) {
              scheduleClose(dropdown);
            }
          });
        }

        // Mobile Tap Toggle: On screens <= 768px, tapping the main link expands/collapses the submenu accordion
        if (mainLink) {
          mainLink.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
              e.preventDefault();
              toggleDropdownClick(dropdown);
            }
          });
        }

        // Chevron Click / Tap Toggle (Desktop & Mobile)
        if (chevronBtn) {
          chevronBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleDropdownClick(dropdown);
          });

          // Keyboard Enter / Space support
          chevronBtn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              toggleDropdownClick(dropdown);
            }
          });
        }
      });

      // Hovering over other non-dropdown nav items immediately closes open dropdowns
      const otherNavLinks = document.querySelectorAll('.nav-list > li > a.nav-link:not(.dropdown-main-link)');
      otherNavLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
          if (window.innerWidth > 768) {
            closeAllDropdowns();
          }
        });
      });

      function toggleDropdownClick(targetDropdown) {
        const isCurrentlyOpen = targetDropdown.classList.contains('open');

        // Close all other dropdowns immediately
        dropdownItems.forEach(item => {
          if (item !== targetDropdown) {
            item.classList.remove('open', 'hovered');
            const btn = item.querySelector('.dropdown-chevron-btn');
            if (btn) btn.setAttribute('aria-expanded', 'false');
          }
        });

        if (isCurrentlyOpen) {
          targetDropdown.classList.remove('open', 'hovered');
          const btn = targetDropdown.querySelector('.dropdown-chevron-btn');
          if (btn) btn.setAttribute('aria-expanded', 'false');
          activeDropdown = null;
        } else {
          targetDropdown.classList.add('open');
          const btn = targetDropdown.querySelector('.dropdown-chevron-btn');
          if (btn) btn.setAttribute('aria-expanded', 'true');
          activeDropdown = targetDropdown;
        }
      }

      // Dismiss open dropdowns when clicking outside
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-item-dropdown')) {
          closeAllDropdowns();
        }
      });

      // Dismiss open dropdowns and return focus when pressing Escape
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) {
          const openItem = dropdownItems.find(d => d.classList.contains('open') || d.classList.contains('hovered'));
          closeAllDropdowns();
          if (openItem) {
            const btn = openItem.querySelector('.dropdown-chevron-btn');
            if (btn) btn.focus();
          }
        }
      });

      // Clicking any menu item closes the dropdown and navigates
      document.querySelectorAll('.dropdown-item-link').forEach(link => {
        link.addEventListener('click', () => {
          closeAllDropdowns();
        });
      });

    } catch (err) {
      console.error('Dropdown init error:', err);
    }
  }

  // Store Photo Gallery Lightbox Engine
  function initGalleryLightbox() {
    const gallery = document.getElementById('store-photo-gallery');
    const lightbox = document.getElementById('gallery-lightbox');
    if (!gallery || !lightbox) return;

    const items = Array.from(gallery.querySelectorAll('.gallery-item'));
    if (!items.length) return;

    const imgEl = document.getElementById('lightbox-img');
    const captionEl = document.getElementById('lightbox-caption');
    const counterEl = document.getElementById('lightbox-counter');
    const btnClose = lightbox.querySelector('.lightbox-close');
    const btnPrev = lightbox.querySelector('.lightbox-prev');
    const btnNext = lightbox.querySelector('.lightbox-next');
    const backdrop = lightbox.querySelector('.lightbox-backdrop');

    let currentIndex = 0;

    function showPhoto(index) {
      if (index < 0) index = items.length - 1;
      if (index >= items.length) index = 0;
      currentIndex = index;

      const item = items[currentIndex];
      const fullSrc = item.getAttribute('data-full');
      const caption = item.getAttribute('data-caption') || '';
      const alt = item.getAttribute('data-alt') || '';

      imgEl.src = fullSrc;
      imgEl.alt = alt;
      if (captionEl) captionEl.textContent = caption;
      if (counterEl) counterEl.textContent = `${currentIndex + 1} / ${items.length}`;

      lightbox.classList.add('active');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      lightbox.classList.remove('active');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      imgEl.src = '';
    }

    items.forEach((item, idx) => {
      item.addEventListener('click', () => {
        showPhoto(idx);
      });
      item.setAttribute('tabindex', '0');
      item.setAttribute('role', 'button');
      item.setAttribute('aria-label', `View photo ${idx + 1}: ${item.getAttribute('data-alt')}`);
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          showPhoto(idx);
        }
      });
    });

    if (btnClose) btnClose.addEventListener('click', closeLightbox);
    if (backdrop) backdrop.addEventListener('click', closeLightbox);
    if (btnPrev) btnPrev.addEventListener('click', () => showPhoto(currentIndex - 1));
    if (btnNext) btnNext.addEventListener('click', () => showPhoto(currentIndex + 1));

    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPhoto(currentIndex - 1);
      if (e.key === 'ArrowRight') showPhoto(currentIndex + 1);
    });

    // Mobile touch swipe support
    let touchStartX = 0;
    let touchEndX = 0;
    lightbox.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightbox.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchEndX < touchStartX - 50) {
        showPhoto(currentIndex + 1); // swipe left -> next
      } else if (touchEndX > touchStartX + 50) {
        showPhoto(currentIndex - 1); // swipe right -> prev
      }
    }, { passive: true });
  }

  /**
   * BABA COSMETICS - Accessible Scroll Animations & Micro-Interactions Engine
   * High performance, zero-layout-thrashing IntersectionObserver controller.
   */
  function initScrollAnimations() {
    // 1. Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      // Respect user preference: exit immediately, content remains 100% visible
      return;
    }

    // 2. Check IntersectionObserver browser support
    if (!('IntersectionObserver' in window)) {
      // Graceful fallback for legacy environments
      return;
    }

    // 3. Mark document as animation-ready so CSS entrance hiding takes effect safely
    document.documentElement.classList.add('animations-ready');

    // 4. Staggered grid children initialization
    const staggerContainers = [
      '.category-cards-grid',
      '.store-gallery-grid',
      '.trust-micro-points',
      '.hero-cta-group',
      '.wholesale-grid',
      '.guide-grid',
      '.card-grid',
      '.prose-steps-list'
    ];

    staggerContainers.forEach(containerSel => {
      document.querySelectorAll(containerSel).forEach(container => {
        const children = Array.from(container.children);
        children.forEach((child, idx) => {
          if (!child.classList.contains('baba-animate-up')) {
            child.classList.add('baba-animate-up', 'baba-stagger-item');
          }
          child.style.setProperty('--stagger-delay', `${Math.min(idx * 85, 450)}ms`);
        });
      });
    });

    // 5. Auto-tag key semantic sections if not manually annotated
    const autoTagSelectors = [
      '.featured-snippet-box',
      '.hero-card-col',
      '.content-card-box',
      '.baba-table-card',
      '.comparison-table-wrapper',
      '.sidebar-card',
      '.map-business-card',
      '.map-embed-wrapper',
      '.statutory-callout',
      '.developer-attribution-section',
      '.site-footer',
      'article.article-body > section'
    ];

    autoTagSelectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        if (!el.classList.contains('baba-animate-up') && !el.classList.contains('baba-animate-in') && !el.classList.contains('baba-animate-scale')) {
          el.classList.add('baba-animate-up');
        }
      });
    });

    // 6. Setup unified observer
    const animatedElements = document.querySelectorAll('.baba-animate-up, .baba-animate-in, .baba-animate-scale, [data-animate]');

    const scrollObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('baba-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -30px 0px'
    });

    animatedElements.forEach(el => scrollObserver.observe(el));

    // 7. Ensure above-the-fold hero elements reveal with a gentle micro-stagger
    setTimeout(() => {
      const aboveFoldTargets = document.querySelectorAll(
        '.hero-content, .hero-content > *, .hero-card-col, .hero-card-col > *, .baba-floating-chip, .entity-badge-stack, .hero-title, .hero-cta-group, .trust-micro-points'
      );
      aboveFoldTargets.forEach(el => {
        el.classList.add('baba-visible');
      });
    }, 50);
  }

  // Initialize on page load
  document.addEventListener('DOMContentLoaded', function() {
    initKnowledgeSearch();
    initDropdownNavigation();
    initGalleryLightbox();
    initScrollAnimations();
    if (window.BabaCalculators && typeof window.BabaCalculators.init === 'function') {
      window.BabaCalculators.init();
    }
  });

})();
