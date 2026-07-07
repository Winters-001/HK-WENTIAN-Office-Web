/**
 * 問天實業 CMS 後台管理系統 - 管理邏輯
 * 適配新 SECTIONS 數據結構（8 個板塊）
 */

(function() {
  var content = getContent();
  var currentSection = "hero";
  var draftContent = JSON.parse(JSON.stringify(content));

  // 字段中文標籤映射
  var FIELD_LABELS = {
    badge: "標語徽章",
    label: "英文標籤",
    title: "板塊標題",
    title1: "標題第一行",
    title2: "標題第二行",
    subtitle: "板塊副標題",
    body1: "正文第一段",
    body2: "正文第二段",
    ctaPrimary: "主按鈕文字",
    ctaSecondary: "次按鈕文字",
    desc: "描述內容",
    summary: "摘要內容",
    date: "日期",
    number: "統計數字",
    statLabel: "統計標籤",
    icon: "圖標標識",
    value: "聯繫信息",
    brand: "品牌名稱",
    tagline: "品牌標語",
    copyright: "版權信息",
    nav1Title: "導航欄一標題",
    nav2Title: "導航欄二標題"
  };

  var SECTION_LABELS = {};
  SECTIONS.forEach(function(s) { SECTION_LABELS[s.key] = s.label; });

  // 長文本字段（使用 textarea）
  var LONG_FIELDS = ["body1", "body2", "desc", "summary", "copyright", "tagline", "subtitle"];

  // ---------- 渲染 ----------

  function renderSection(sectionKey) {
    currentSection = sectionKey;
    var sectionData = draftContent[sectionKey];
    var sectionConfig = SECTIONS.find(function(s) { return s.key === sectionKey; });

    // Update breadcrumb
    document.getElementById("bc-current").textContent = sectionConfig.label;

    // Update active nav
    document.querySelectorAll(".sidebar-nav-item").forEach(function(el) {
      el.classList.toggle("active", el.dataset.section === sectionKey);
    });

    var html = '';

    // Section header
    html += '<div class="admin-section-header">';
    html += '  <h2 class="admin-section-title">' + sectionConfig.label + '</h2>';
    html += '  <div class="admin-status-row">';
    html += '    <span class="status-badge">\u25CF \u5DF2\u767C\u4F48</span>';
    html += '    <span class="status-update">\u6700\u5F8C\u66F4\u65B0\uFF1A\u525B\u525B</span>';
    html += '  </div>';
    html += '</div>';

    // Form card
    html += '<div class="form-card">';

    // Render basic fields
    sectionConfig.fields.forEach(function(field) {
      var label = FIELD_LABELS[field] || field;
      var value = sectionData[field] || "";
      var isLong = LONG_FIELDS.indexOf(field) !== -1;
      html += '<div class="form-field">';
      html += '  <label class="form-label">' + label + '</label>';
      if (isLong) {
        html += '  <textarea class="form-textarea" data-section="' + sectionKey + '" data-field="' + field + '">' + escapeHtml(value) + '</textarea>';
      } else {
        html += '  <input type="text" class="form-input" value="' + escapeHtml(value) + '" data-section="' + sectionKey + '" data-field="' + field + '">';
      }
      html += '</div>';
    });

    // Image management (for sections with hasImage)
    if (sectionConfig.hasImage) {
      html += '<div class="image-section-label">\u5716\u7247\u7BA1\u7406</div>';
      html += '<div class="image-row">';

      // Existing image card
      html += '  <div class="image-card">';
      html += '    <div class="image-preview" id="img-preview-' + sectionKey + '">';
      if (sectionData.image) {
        html += '      <img src="' + sectionData.image + '" alt="\u9810\u89BD">';
      } else {
        html += '      <span class="image-placeholder">\u66AB\u7121\u5716\u7247</span>';
      }
      html += '    </div>';
      html += '    <div class="image-info">';
      html += '      <span class="image-name">' + (sectionData.image ? 'image_' + sectionKey + '.jpg' : '\u672A\u4E0A\u50B3') + '</span>';
      html += '      <label class="btn-replace">\u66F4\u63DB<input type="file" accept="image/*" style="display:none" data-img-section="' + sectionKey + '"></label>';
      html += '    </div>';
      html += '  </div>';

      // Upload area
      html += '  <div class="image-upload-area">';
      html += '    <label style="cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:8px;">';
      html += '      <span class="upload-icon">+</span>';
      html += '      <span class="upload-text">\u4E0A\u50B3\u5716\u7247</span>';
      html += '      <span class="upload-hint">\u5EFA\u8B70\u5C3A\u5BF8 1200\u00D7600px \u00B7 JPG/PNG</span>';
      html += '      <input type="file" accept="image/*" style="display:none" data-img-section="' + sectionKey + '">';
      html += '    </label>';
      html += '  </div>';

      html += '</div>';
    }

    // Sub-items editor (for sections with items arrays)
    if (sectionData.items) {
      var itemsLabel = "";
      switch(sectionKey) {
        case "advantages": itemsLabel = "\u512A\u52E2\u9805\u76EE"; break;
        case "products": itemsLabel = "\u7522\u54C1\u9805\u76EE"; break;
        case "news": itemsLabel = "\u65B0\u805E\u9805\u76EE"; break;
        case "contact": itemsLabel = "\u806F\u7E61\u9805\u76EE"; break;
        default: itemsLabel = "\u5B50\u9805\u5167\u5BB9";
      }
      html += '<div class="image-section-label">' + itemsLabel + '</div>';
      sectionData.items.forEach(function(item, index) {
        html += '<div style="padding:20px;background:#0A0A0A;border-radius:12px;border:1px solid rgba(255,255,255,.08);">';
        html += '<div style="font-size:12px;color:rgba(250,250,250,.40);margin-bottom:12px;">\u9805\u76EE ' + (index + 1) + '</div>';
        html += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">';

        for (var key in item) {
          if (typeof item[key] === "string") {
            var fieldLabel = FIELD_LABELS[key] || key;
            var isItemLong = (key === "desc" || key === "summary");
            html += '<div class="form-field" style="' + (isItemLong ? 'grid-column:1/-1;' : '') + '">';
            html += '  <label class="form-label">' + fieldLabel + '</label>';
            if (isItemLong) {
              html += '  <textarea class="form-textarea" data-section="' + sectionKey + '" data-index="' + index + '" data-field="' + key + '">' + escapeHtml(item[key]) + '</textarea>';
            } else {
              html += '  <input type="text" class="form-input" value="' + escapeHtml(item[key]) + '" data-section="' + sectionKey + '" data-index="' + index + '" data-field="' + key + '">';
            }
            html += '</div>';
          }
        }

        html += '</div></div>';
      });
    }

    // Stats editor (for cases section)
    if (sectionData.stats) {
      html += '<div class="image-section-label">\u7D71\u8A08\u6578\u64DA</div>';
      sectionData.stats.forEach(function(stat, index) {
        html += '<div style="padding:20px;background:#0A0A0A;border-radius:12px;border:1px solid rgba(255,255,255,.08);">';
        html += '<div style="font-size:12px;color:rgba(250,250,250,.40);margin-bottom:12px;">\u9805\u76EE ' + (index + 1) + '</div>';
        html += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">';
        html += '<div class="form-field">';
        html += '  <label class="form-label">\u7D71\u8A08\u6578\u5B57</label>';
        html += '  <input type="text" class="form-input" value="' + escapeHtml(stat.number) + '" data-section="' + sectionKey + '" data-index="' + index + '" data-field="number" data-is-stats="1">';
        html += '</div>';
        html += '<div class="form-field">';
        html += '  <label class="form-label">\u7D71\u8A08\u6A19\u7C64</label>';
        html += '  <input type="text" class="form-input" value="' + escapeHtml(stat.label) + '" data-section="' + sectionKey + '" data-index="' + index + '" data-field="label" data-is-stats="1">';
        html += '</div>';
        html += '</div></div>';
      });
    }

    // Footer nav links editor
    if (sectionData.nav1Links) {
      html += '<div class="image-section-label">\u5C0E\u822A\u9023\u63A5</div>';
      html += '<div class="form-field">';
      html += '  <label class="form-label">\u5FEB\u901F\u9023\u63A5\uFF08\u7528\u82F1\u6587\u9017\u865F\u5206\u9694\uFF09</label>';
      html += '  <input type="text" class="form-input" value="' + escapeHtml(sectionData.nav1Links.join(" | ")) + '" data-section="' + sectionKey + '" data-field="nav1Links" data-is-links="1">';
      html += '</div>';
      html += '<div class="form-field">';
      html += '  <label class="form-label">\u670D\u52D9\u652F\u63F4\uFF08\u7528\u82F1\u6587\u9017\u865F\u5206\u9694\uFF09</label>';
      html += '  <input type="text" class="form-input" value="' + escapeHtml(sectionData.nav2Links.join(" | ")) + '" data-section="' + sectionKey + '" data-field="nav2Links" data-is-links="1">';
      html += '</div>';
    }

    html += '</div>'; // end form-card

    // Action bar
    html += '<div class="action-bar">';
    html += '  <div class="action-left">';
    html += '    <button class="btn-reset" id="btn-reset">\u91CD\u7F6E</button>';
    html += '    <span class="char-count" id="char-count">\u5B57\u6578\uFF1A0</span>';
    html += '  </div>';
    html += '  <div class="action-right">';
    html += '    <button class="btn-cancel" id="btn-cancel">\u53D6\u6D88</button>';
    html += '    <button class="btn-publish" id="btn-publish">\u767C\u4F48\u66F4\u65B0</button>';
    html += '  </div>';
    html += '</div>';

    // Preview card
    html += '<div class="preview-card">';
    html += '  <div class="preview-title">\u677F\u584A\u9810\u89BD</div>';
    html += '  <div class="preview-inner" id="preview-inner">';
    html += renderPreview(sectionKey, sectionData);
    html += '  </div>';
    html += '</div>';

    document.getElementById("admin-content").innerHTML = html;

    // Bind events
    bindEvents();
    updateCharCount();
  }

  function renderPreview(sectionKey, data) {
    var html = '';
    switch(sectionKey) {
      case "hero":
        html += '<div class="preview-label">' + escapeHtml(data.title1 || "") + '</div>';
        if (data.title2) html += '<div class="preview-label" style="color:var(--gold);">' + escapeHtml(data.title2) + '</div>';
        html += '<div class="preview-subtitle">' + escapeHtml(data.subtitle || "") + '</div>';
        break;
      case "about":
        html += '<div class="preview-label">' + escapeHtml(data.title || "") + '</div>';
        html += '<div class="preview-body">' + escapeHtml(data.body1 || "") + '</div>';
        html += '<div class="preview-body">' + escapeHtml(data.body2 || "") + '</div>';
        break;
      case "cases":
        html += '<div class="preview-label">' + escapeHtml(data.title || "") + '</div>';
        if (data.stats) {
          data.stats.forEach(function(stat) {
            html += '<div class="preview-body">' + escapeHtml(stat.number) + ' \u2014 ' + escapeHtml(stat.label) + '</div>';
          });
        }
        break;
      case "footer":
        html += '<div class="preview-label">' + escapeHtml(data.brand || "") + '</div>';
        html += '<div class="preview-subtitle">' + escapeHtml(data.tagline || "") + '</div>';
        html += '<div class="preview-body">' + escapeHtml(data.copyright || "") + '</div>';
        break;
      default:
        html += '<div class="preview-label">' + escapeHtml(data.title || "") + '</div>';
        if (data.subtitle) html += '<div class="preview-subtitle">' + escapeHtml(data.subtitle) + '</div>';
        if (data.items) {
          data.items.forEach(function(item) {
            html += '<div class="preview-body">\u2022 ' + escapeHtml(item.title || item.label || "") + (item.desc ? ' \u2014 ' + escapeHtml(item.desc) : '') + '</div>';
          });
        }
        break;
    }
    return html;
  }

  function bindEvents() {
    // Text input changes
    document.querySelectorAll("[data-section][data-field]").forEach(function(input) {
      input.addEventListener("input", function() {
        var section = this.dataset.section;
        var field = this.dataset.field;
        var index = this.dataset.index;
        var isStats = this.dataset.isStats;
        var isLinks = this.dataset.isLinks;

        if (isLinks === "1") {
          // Parse pipe-separated links
          draftContent[section][field] = this.value.split("|").map(function(s) { return s.trim(); }).filter(function(s) { return s; });
        } else if (isStats === "1") {
          draftContent[section].stats[parseInt(index)][field] = this.value;
        } else if (index !== undefined) {
          draftContent[section].items[parseInt(index)][field] = this.value;
        } else {
          draftContent[section][field] = this.value;
        }

        // Update preview
        var previewEl = document.getElementById("preview-inner");
        if (previewEl) {
          previewEl.innerHTML = renderPreview(section, draftContent[section]);
        }
        updateCharCount();
      });
    });

    // Image upload
    document.querySelectorAll("[data-img-section]").forEach(function(input) {
      input.addEventListener("change", function(e) {
        handleImageUpload(e, this.dataset.imgSection);
      });
    });

    // Buttons
    var btnReset = document.getElementById("btn-reset");
    if (btnReset) btnReset.onclick = function() {
      draftContent = JSON.parse(JSON.stringify(content));
      renderSection(currentSection);
      showToast("\u5DF2\u91CD\u7F6E\u70BA\u5DF2\u767C\u4F48\u7248\u672C");
    };

    var btnCancel = document.getElementById("btn-cancel");
    if (btnCancel) btnCancel.onclick = function() {
      draftContent = JSON.parse(JSON.stringify(content));
      renderSection(currentSection);
      showToast("\u5DF2\u53D6\u6D88\u7DE8\u8F2F");
    };

    var btnPublish = document.getElementById("btn-publish");
    if (btnPublish) btnPublish.onclick = publishContent;

    var btnSave = document.getElementById("btn-save");
    if (btnSave) btnSave.onclick = saveDraft;
  }

  function handleImageUpload(event, sectionKey) {
    var file = event.target.files[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      showToast("\u5716\u7247\u4E0D\u80FD\u8D85\u904E 2MB", true);
      return;
    }

    var reader = new FileReader();
    reader.onload = function(e) {
      draftContent[sectionKey].image = e.target.result;

      // Update preview
      var previewEl = document.getElementById("img-preview-" + sectionKey);
      if (previewEl) {
        previewEl.innerHTML = '<img src="' + e.target.result + '" alt="\u9810\u89BD">';
      }

      // Update image name
      var nameEl = previewEl.parentElement.querySelector(".image-name");
      if (nameEl) nameEl.textContent = file.name;

      showToast("\u5716\u7247\u5DF2\u52A0\u8F09\uFF0C\u9EDE\u64CA\u300C\u767C\u4F48\u66F4\u65B0\u300D\u751F\u6548");
    };
    reader.readAsDataURL(file);
  }

  function saveDraft() {
    saveContent(draftContent);
    showToast("\u2713 \u8349\u7A3F\u5DF2\u4FDD\u5B58");
  }

  function publishContent() {
    saveContent(draftContent);
    content = JSON.parse(JSON.stringify(draftContent));
    showToast("\u2713 \u5DF2\u767C\u4F48\u66F4\u65B0\uFF0C\u5B98\u7DB2\u5167\u5BB9\u5DF2\u540C\u6B65");

    // Update status
    var statusBadge = document.querySelector(".status-badge");
    if (statusBadge) {
      statusBadge.textContent = "\u25CF \u5DF2\u767C\u4F48";
    }
  }

  function updateCharCount() {
    var total = 0;
    var inputs = document.querySelectorAll("[data-section][data-field]");
    inputs.forEach(function(input) {
      total += input.value.length;
    });
    var countEl = document.getElementById("char-count");
    if (countEl) countEl.textContent = "\u5B57\u6578\uFF1A" + total;
  }

  function showToast(msg, isError) {
    var toast = document.getElementById("toast");
    toast.textContent = msg;
    if (isError) {
      toast.style.background = "#E8584D";
      toast.style.color = "#fff";
    } else {
      toast.style.background = "";
      toast.style.color = "";
    }
    toast.classList.add("show");
    clearTimeout(toast._timer);
    toast._timer = setTimeout(function() {
      toast.classList.remove("show");
    }, 2500);
  }

  function escapeHtml(text) {
    if (!text) return "";
    var div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  // ---------- Init ----------

  // Sidebar navigation
  document.querySelectorAll(".sidebar-nav-item").forEach(function(el) {
    el.addEventListener("click", function() {
      renderSection(this.dataset.section);
    });
  });

  // Keyboard shortcut: Ctrl+S to save
  document.addEventListener("keydown", function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === "s") {
      e.preventDefault();
      saveDraft();
    }
  });

  // Initial render
  renderSection("hero");
})();
