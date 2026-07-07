/**
 * 問天實業官網 - 前端渲染邏輯
 * 從 content.js 的 getContent() 獲取內容並渲染到頁面
 * 嚴格匹配 Ardot 設計稿 701075637656887 的佈局結構
 */

(function() {
  var content = getContent();

  // ===== Nav =====
  setText("nav-logo", content.nav.logo);

  // ===== Hero =====
  setText("hero-badge", content.hero.badge);
  setText("hero-title1", content.hero.title1);
  setText("hero-title2", content.hero.title2);
  setText("hero-subtitle", content.hero.subtitle);
  setText("hero-cta-primary", content.hero.ctaPrimary);
  setText("hero-cta-secondary", content.hero.ctaSecondary);
  if (content.hero.image) {
    var heroVisual = document.getElementById("hero-visual");
    if (heroVisual) {
      var heroImg = document.createElement("img");
      heroImg.src = content.hero.image;
      heroImg.alt = "Hero Visual";
      heroVisual.insertBefore(heroImg, heroVisual.firstChild);
    }
  }

  // ===== About =====
  setText("about-label", content.about.label);
  setText("about-title", content.about.title);
  setText("about-body1", content.about.body1);
  setText("about-body2", content.about.body2);
  if (content.about.image) {
    var aboutImgContainer = document.getElementById("about-image");
    if (aboutImgContainer) {
      var aboutImg = document.createElement("img");
      aboutImg.src = content.about.image;
      aboutImg.alt = content.about.title;
      aboutImgContainer.insertBefore(aboutImg, aboutImgContainer.firstChild);
    }
  }

  // ===== Advantages =====
  setText("advantages-label", content.advantages.label);
  setText("advantages-title", content.advantages.title);
  setText("advantages-subtitle", content.advantages.subtitle);
  var advGrid = document.getElementById("advantages-grid");
  if (advGrid) {
    content.advantages.items.forEach(function(item) {
      var card = document.createElement("div");
      card.className = "advantage-card";
      var iconHtml = item.icon ? '<img src="' + item.icon + '" alt="' + escapeHtml(item.title) + '" class="advantage-icon-svg">' : '';
      card.innerHTML =
        '<div class="advantage-icon">' + iconHtml + '</div>' +
        '<h3>' + escapeHtml(item.title) + '</h3>' +
        '<p>' + escapeHtml(item.desc) + '</p>';
      advGrid.appendChild(card);
    });
  }

  // ===== Products =====
  setText("products-label", content.products.label);
  setText("products-title", content.products.title);
  setText("products-subtitle", content.products.subtitle);
  var prodGrid = document.getElementById("products-grid");
  if (prodGrid) {
    // 2-column layout: split items into two columns
    var col1 = document.createElement("div");
    col1.className = "products-col";
    var col2 = document.createElement("div");
    col2.className = "products-col";
    content.products.items.forEach(function(item, i) {
      var card = document.createElement("div");
      card.className = "product-card";
      var imgHtml = '';
      if (item.image) {
        imgHtml = '<div class="product-img"><img src="' + item.image + '" alt="' + escapeHtml(item.title) + '"></div>';
      } else {
        imgHtml = '<div class="product-img"></div>';
      }
      card.innerHTML =
        imgHtml +
        '<div class="product-content">' +
          '<h3>' + escapeHtml(item.title) + '</h3>' +
          '<p>' + escapeHtml(item.desc) + '</p>' +
        '</div>';
      (i < 2 ? col1 : col2).appendChild(card);
    });
    prodGrid.appendChild(col1);
    prodGrid.appendChild(col2);
  }

  // ===== Cases =====
  setText("cases-label", content.cases.label);
  setText("cases-title", content.cases.title);
  setText("cases-subtitle", content.cases.subtitle);
  var statsRow = document.getElementById("stats-row");
  if (statsRow) {
    content.cases.stats.forEach(function(stat) {
      var item = document.createElement("div");
      item.className = "stat-item";
      item.innerHTML =
        '<div class="stat-number">' + escapeHtml(stat.number) + '</div>' +
        '<div class="stat-label">' + escapeHtml(stat.label) + '</div>';
      statsRow.appendChild(item);
    });
  }

  // ===== News =====
  setText("news-label", content.news.label);
  setText("news-title", content.news.title);
  var newsGrid = document.getElementById("news-grid");
  if (newsGrid) {
    content.news.items.forEach(function(item) {
      var card = document.createElement("div");
      card.className = "news-card";
      var imgHtml = '';
      if (item.image) {
        imgHtml = '<div class="news-img"><img src="' + item.image + '" alt="' + escapeHtml(item.title) + '"></div>';
      } else {
        imgHtml = '<div class="news-img"></div>';
      }
      card.innerHTML =
        imgHtml +
        '<div class="news-content">' +
          '<div class="news-date">' + escapeHtml(item.date) + '</div>' +
          '<h3>' + escapeHtml(item.title) + '</h3>' +
          '<p>' + escapeHtml(item.summary) + '</p>' +
        '</div>';
      newsGrid.appendChild(card);
    });
  }

  // ===== Contact =====
  setText("contact-label", content.contact.label);
  setText("contact-title", content.contact.title);
  setText("contact-subtitle", content.contact.subtitle);
  var contactInfo = document.getElementById("contact-info");
  if (contactInfo) {
    content.contact.items.forEach(function(item) {
      var div = document.createElement("div");
      div.className = "contact-info-item";
      var iconHtml = item.icon ? '<img src="' + item.icon + '" alt="' + escapeHtml(item.label) + '" class="contact-info-icon-svg">' : '';
      div.innerHTML =
        '<div class="contact-info-icon">' + iconHtml + '</div>' +
        '<div class="contact-info-text">' +
          '<div class="contact-info-label">' + escapeHtml(item.label) + '</div>' +
          '<div class="contact-info-value">' + escapeHtml(item.value) + '</div>' +
        '</div>';
      contactInfo.appendChild(div);
    });
  }

  // ===== Footer =====
  var footerLogo = document.querySelector(".footer-logo");
  if (footerLogo) footerLogo.textContent = content.footer.brand;
  var footerTagline = document.querySelector(".footer-tagline");
  if (footerTagline) footerTagline.textContent = content.footer.tagline;
  var footerCopyright = document.querySelector(".footer-copyright");
  if (footerCopyright) footerCopyright.textContent = content.footer.copyright;

  // ===== Contact form submission =====
  var contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
      e.preventDefault();
      var name = contactForm.querySelector('input[name="name"]').value.trim();
      var email = contactForm.querySelector('input[name="email"]').value.trim();
      var message = contactForm.querySelector('textarea[name="message"]').value.trim();

      if (!name || !email || !message) {
        showToast("\u8ACB\u586B\u5BEB\u59D3\u540D\u3001\u90F5\u7BB1\u548C\u7559\u8A00\u5167\u5BB9", true);
        return;
      }

      var btn = contactForm.querySelector('button[type="submit"]');
      var originalText = btn.textContent;
      btn.textContent = "\u767C\u9001\u4E2D...";
      btn.disabled = true;

      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name, email: email, message: message })
      })
      .then(function(r) {
        if (!r.ok) throw new Error("HTTP " + r.status);
        return r.json();
      })
      .then(function(data) {
        if (data.success) {
          showToast("\u2713 \u8A0A\u606F\u5DF2\u767C\u9001\uFF0C\u6211\u5011\u5C07\u5118\u5FEB\u8207\u60A8\u806F\u7E61");
          contactForm.reset();
        } else {
          fallbackToMail(name, email, message);
        }
      })
      .catch(function() {
        fallbackToMail(name, email, message);
      })
      .finally(function() {
        btn.textContent = originalText;
        btn.disabled = false;
      });
    });
  }

  function fallbackToMail(name, email, message) {
    var subject = encodeURIComponent("\u7DB2\u7AD9\u7559\u8A00 - " + name);
    var body = encodeURIComponent(
      "\u59D3\u540D: " + name + "\n" +
      "\u90F5\u7BB1: " + email + "\n" +
      "\u7559\u8A00: " + message
    );
    var mailtoLink = "mailto:info@wentian.com.hk?subject=" + subject + "&body=" + body;
    showToast("\u6B63\u5728\u70BA\u60A8\u6253\u958B\u90F5\u4EF6\u5BA2\u6236\u7AEF...");
    window.location.href = mailtoLink;
  }

  // ===== Toast =====
  function showToast(msg, isError) {
    var toast = document.createElement("div");
    toast.className = "toast show";
    toast.textContent = msg;
    if (isError) {
      toast.style.background = "#E8584D";
      toast.style.color = "#fff";
    }
    document.body.appendChild(toast);
    setTimeout(function() {
      toast.classList.remove("show");
      setTimeout(function() { toast.remove(); }, 300);
    }, 3000);
  }

  // ===== Header scroll effect =====
  window.addEventListener("scroll", function() {
    var header = document.getElementById("header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // ===== Mobile menu =====
  var menuToggle = document.getElementById("menu-toggle");
  var headerNav = document.getElementById("header-nav");
  if (menuToggle) {
    menuToggle.addEventListener("click", function() {
      headerNav.classList.toggle("mobile-open");
    });
  }

  // ===== Check publish notification =====
  var urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("published") === "1") {
    showToast("\u2713 \u5167\u5BB9\u5DF2\u66F4\u65B0");
  }

  // ===== Helpers =====
  function setText(id, text, selector) {
    var el = document.getElementById(id);
    if (!el && selector) {
      var parent = document.getElementById(id.replace(/-brand|-tagline|-copyright/, ""));
      if (parent) {
        el = parent.querySelector(selector);
      }
    }
    if (el) el.textContent = text || "";
  }

  function escapeHtml(text) {
    if (!text) return "";
    var div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }
})();
