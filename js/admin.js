/**
 * 問天實業 CMS 後台管理系統 - 管理邏輯 v4.0
 * 支援所有板塊的標題、文字、圖片編輯
 */

(function() {
  var content = getContent();
  var currentSection = "hero";
  var draftContent = JSON.parse(JSON.stringify(content));

  var FIELD_LABELS = {
    badge: "標語徽章", label: "英文標籤", title: "板塊標題",
    title1: "標題第一行", title2: "標題第二行", desc: "描述內容",
    subtitle: "板塊副標題", body1: "正文第一段", body2: "正文第二段",
    ctaPrimary: "主按鈕文字", ctaSecondary: "次按鈕文字",
    culture1Title: "文化卡片1標題", culture1Desc: "文化卡片1描述",
    culture2Title: "文化卡片2標題", culture2Desc: "文化卡片2描述",
    icon: "圖標文字", tag: "標籤", date: "日期",
    gradingTitle: "分級標題", gradingDesc: "分級描述",
    productTitle: "產品標題", productDesc: "產品描述",
    timelineTitle: "溯源標題", timelineDesc: "溯源描述",
    hkTitle: "香港公司標題", hkAddress: "香港公司地址",
    cnTitle: "內地公司標題", cnAddress: "內地公司地址",
    whatsappTitle: "WhatsApp標題", whatsappNumber: "WhatsApp號碼",
    formTitle: "表單標題", formAlert: "提交提示文字",
    brand: "品牌名稱", slogan: "品牌標語", navTitle: "導航標題",
    contactTitle: "聯繫標題", email: "郵箱地址", whatsapp: "WhatsApp顯示",
    copyright: "版權信息", dimension: "對比維度",
    grade1: "一級菜標準", grade2: "二級菜標準"
  };

  var LONG_FIELDS = ["body1","body2","desc","subtitle","slogan","copyright","formAlert","gradingDesc","productDesc","timelineDesc","hkAddress","cnAddress"];

  function renderSection(sectionKey) {
    currentSection = sectionKey;
    var d = draftContent[sectionKey];
    var cfg = SECTIONS.find(function(s){return s.key===sectionKey;});
    document.getElementById("bc-current").textContent = cfg.label;
    document.querySelectorAll(".sidebar-nav-item").forEach(function(el){
      el.classList.toggle("active", el.dataset.section===sectionKey);
    });

    var h = '<div class="admin-section-header"><h2 class="admin-section-title">'+cfg.label+'</h2>';
    h += '<div class="admin-status-row"><span class="status-badge">● 已發布</span></div></div>';
    h += '<div class="form-card">';

    // Basic fields
    cfg.fields.forEach(function(f){
      var lbl = FIELD_LABELS[f]||f;
      var val = d[f]||"";
      var isLong = LONG_FIELDS.indexOf(f)!==-1;
      h += '<div class="form-field"><label class="form-label">'+lbl+'</label>';
      if(isLong){
        h += '<textarea class="form-textarea" data-section="'+sectionKey+'" data-field="'+f+'">'+esc(val)+'</textarea>';
      } else {
        h += '<input type="text" class="form-input" value="'+esc(val)+'" data-section="'+sectionKey+'" data-field="'+f+'">';
      }
      h += '</div>';
    });

    // Image
    if(cfg.hasImage && d.image){
      h += '<div class="image-section-label">圖片管理</div><div class="image-row">';
      h += '<div class="image-card"><div class="image-preview" id="img-preview-'+sectionKey+'">';
      h += d.image ? '<img src="'+d.image+'" alt="預覽">' : '<span class="image-placeholder">暫無圖片</span>';
      h += '</div><div class="image-info"><span class="image-name">'+(d.image?'current':'未上傳')+'</span>';
      h += '<label class="btn-replace">更換<input type="file" accept="image/*" style="display:none" data-img-section="'+sectionKey+'"></label>';
      h += '</div></div></div>';
    }

    // Sub-items: advantages
    if(d.items && sectionKey==="advantages"){
      h += renderSubItems(sectionKey,"優勢項目",d.items,["icon","title","desc"]);
    }
    // Sub-items: business
    if(d.items && sectionKey==="business"){
      h += renderSubItemsWithImage(sectionKey,"業務卡片",d.items,["tag","title","desc"],"image");
    }
    // Sub-items: cases
    if(d.items && sectionKey==="cases"){
      h += renderSubItems(sectionKey,"案例項目",d.items,["title","tag","desc"]);
    }
    // Sub-items: news
    if(d.items && sectionKey==="news"){
      h += renderSubItemsWithImage(sectionKey,"新聞項目",d.items,["date","title"],"image");
    }
    // Sub-items: tech services
    if(d.services){
      h += renderSubItems(sectionKey,"服務項目",d.services,["icon","title","desc"],"services");
    }
    // Supply: grading rows
    if(d.gradingRows){
      h += renderSubItems(sectionKey,"分級對比行",d.gradingRows,["dimension","grade1","grade2"],"gradingRows");
    }
    // Supply: products
    if(d.products){
      h += renderSubItemsWithImage(sectionKey,"產品卡片",d.products,["title","desc"],"image","products");
    }
    // Supply: timeline
    if(d.timeline){
      h += renderSubItems(sectionKey,"溯源步驟",d.timeline,["title","desc"],"timeline");
    }
    // Tech: socials
    if(d.socials){
      h += '<div class="image-section-label">社交媒體</div>';
      h += '<div class="form-field"><label class="form-label">社交平台（用逗號分隔）</label>';
      h += '<input type="text" class="form-input" value="'+esc(d.socials.join(", "))+'" data-section="'+sectionKey+'" data-field="socials" data-is-array="1"></div>';
    }
    // Footer: nav links
    if(d.navLinks){
      h += '<div class="image-section-label">導航連結</div>';
      h += '<div class="form-field"><label class="form-label">快速連結（用逗號分隔）</label>';
      h += '<input type="text" class="form-input" value="'+esc(d.navLinks.join(", "))+'" data-section="'+sectionKey+'" data-field="navLinks" data-is-array="1"></div>';
    }

    h += '</div>';

    // Action bar
    h += '<div class="action-bar"><div class="action-left">';
    h += '<button class="btn-reset" id="btn-reset">重置</button></div>';
    h += '<div class="action-right">';
    h += '<button class="btn-cancel" id="btn-cancel">取消</button>';
    h += '<button class="btn-publish" id="btn-publish">發布更新</button></div></div>';

    document.getElementById("admin-content").innerHTML = h;
    bindEvents();
  }

  function renderSubItems(sectionKey,label,items,fields,arrayKey){
    arrayKey = arrayKey || "items";
    var h = '<div class="image-section-label">'+label+'</div>';
    items.forEach(function(item,i){
      h += '<div style="padding:20px;background:#0A0A0A;border-radius:12px;border:1px solid rgba(255,255,255,.08);margin-bottom:12px;">';
      h += '<div style="font-size:12px;color:rgba(250,250,250,.4);margin-bottom:12px;">項目 '+(i+1)+'</div>';
      h += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">';
      fields.forEach(function(f){
        var val = item[f]||"";
        var fl = FIELD_LABELS[f]||f;
        var isLong = (f==="desc"||f==="grade1"||f==="grade2");
        h += '<div class="form-field" style="'+(isLong?'grid-column:1/-1;':'')+'">';
        h += '<label class="form-label">'+fl+'</label>';
        if(isLong){
          h += '<textarea class="form-textarea" data-section="'+sectionKey+'" data-index="'+i+'" data-field="'+f+'" data-array="'+arrayKey+'">'+esc(val)+'</textarea>';
        } else {
          h += '<input type="text" class="form-input" value="'+esc(val)+'" data-section="'+sectionKey+'" data-index="'+i+'" data-field="'+f+'" data-array="'+arrayKey+'">';
        }
        h += '</div>';
      });
      h += '</div></div>';
    });
    return h;
  }

  function renderSubItemsWithImage(sectionKey,label,items,fields,imgField,arrayKey){
    arrayKey = arrayKey || "items";
    var h = '<div class="image-section-label">'+label+'</div>';
    items.forEach(function(item,i){
      h += '<div style="padding:20px;background:#0A0A0A;border-radius:12px;border:1px solid rgba(255,255,255,.08);margin-bottom:12px;">';
      h += '<div style="font-size:12px;color:rgba(250,250,250,.4);margin-bottom:12px;">項目 '+(i+1)+'</div>';
      // Image preview
      if(item[imgField]){
        h += '<div style="margin-bottom:12px;"><img src="'+item[imgField]+'" style="width:100%;max-height:120px;object-fit:cover;border-radius:8px;"></div>';
        h += '<label class="btn-replace" style="margin-bottom:12px;display:inline-block;">更換圖片<input type="file" accept="image/*" style="display:none" data-img-section="'+sectionKey+'" data-img-index="'+i+'" data-img-array="'+arrayKey+'" data-img-field="'+imgField+'"></label>';
      }
      h += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">';
      fields.forEach(function(f){
        var val = item[f]||"";
        var fl = FIELD_LABELS[f]||f;
        var isLong = (f==="desc");
        h += '<div class="form-field" style="'+(isLong?'grid-column:1/-1;':'')+'">';
        h += '<label class="form-label">'+fl+'</label>';
        if(isLong){
          h += '<textarea class="form-textarea" data-section="'+sectionKey+'" data-index="'+i+'" data-field="'+f+'" data-array="'+arrayKey+'">'+esc(val)+'</textarea>';
        } else {
          h += '<input type="text" class="form-input" value="'+esc(val)+'" data-section="'+sectionKey+'" data-index="'+i+'" data-field="'+f+'" data-array="'+arrayKey+'">';
        }
        h += '</div>';
      });
      h += '</div></div>';
    });
    return h;
  }

  function bindEvents(){
    document.querySelectorAll("[data-section][data-field]").forEach(function(input){
      input.addEventListener("input",function(){
        var s=this.dataset.section, f=this.dataset.field, idx=this.dataset.index;
        var arr=this.dataset.array, isArr=this.dataset.isArray;
        if(isArr==="1"){
          draftContent[s][f]=this.value.split(",").map(function(x){return x.trim();}).filter(Boolean);
        } else if(arr && idx!==undefined){
          draftContent[s][arr][parseInt(idx)][f]=this.value;
        } else {
          draftContent[s][f]=this.value;
        }
      });
    });

    document.querySelectorAll("[data-img-section]").forEach(function(input){
      input.addEventListener("change",function(e){
        handleImg(e,this.dataset.imgSection,this.dataset.imgIndex,this.dataset.imgArray,this.dataset.imgField);
      });
    });

    var br=document.getElementById("btn-reset");
    if(br)br.onclick=function(){draftContent=JSON.parse(JSON.stringify(content));renderSection(currentSection);toast("已重置");};
    var bc=document.getElementById("btn-cancel");
    if(bc)bc.onclick=function(){draftContent=JSON.parse(JSON.stringify(content));renderSection(currentSection);toast("已取消編輯");};
    var bp=document.getElementById("btn-publish");
    if(bp)bp.onclick=publish;
    var bs=document.getElementById("btn-save");
    if(bs)bs.onclick=draft;
  }

  function handleImg(e,sec,idx,arr,fld){
    var file=e.target.files[0];
    if(!file)return;
    if(file.size>5*1024*1024){toast("圖片不能超過5MB",true);return;}
    var reader=new FileReader();
    reader.onload=function(ev){
      var data=ev.target.result;
      if(idx!==undefined && arr){
        draftContent[sec][arr][parseInt(idx)][fld||"image"]=data;
      } else {
        draftContent[sec].image=data;
        var pv=document.getElementById("img-preview-"+sec);
        if(pv)pv.innerHTML='<img src="'+data+'" alt="預覽">';
      }
      toast("圖片已加載，點擊「發布更新」生效");
      renderSection(currentSection);
    };
    reader.readAsDataURL(file);
  }

  function draft(){saveContent(draftContent);toast("✓ 草稿已保存");}
  function publish(){
    saveContent(draftContent);
    content=JSON.parse(JSON.stringify(draftContent));
    toast("✓ 已發布更新，官網內容已同步");
  }

  function toast(msg,isErr){
    var t=document.getElementById("toast");
    t.textContent=msg;
    t.style.background=isErr?"#E8584D":"";
    t.style.color=isErr?"#fff":"";
    t.classList.add("show");
    clearTimeout(t._t);
    t._t=setTimeout(function(){t.classList.remove("show");},2500);
  }

  function esc(text){
    if(!text)return"";
    var d=document.createElement("div");
    d.textContent=text;
    return d.innerHTML;
  }

  // Init
  document.querySelectorAll(".sidebar-nav-item").forEach(function(el){
    el.addEventListener("click",function(){renderSection(this.dataset.section);});
  });
  document.addEventListener("keydown",function(e){
    if((e.ctrlKey||e.metaKey)&&e.key==="s"){e.preventDefault();draft();}
  });
  renderSection("hero");
})();
