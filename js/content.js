/**
 * 問天實業官網 - 內容管理系統數據層
 * 基於 Ardot 設計稿 701075637656887 精確還原
 */

const DEFAULT_CONTENT = {
  nav: {
    logo: "問天實業"
  },
  hero: {
    badge: "科技賦能 · 跨境生鮮 · 低空經濟",
    title1: "AI 驅動的跨境生鮮供應鏈",
    title2: "與無人機物流科技",
    subtitle: "香港問天實業（科技）有限公司，專注跨境生鮮貿易與AI無人機技術兩大核心業務。旗下「和光蔬菜」品牌爲香港餐廳提供一級新鮮蔬菜與淨菜加工服務；子公司豈朝科技持有CAAC民用無人駕駛航空器運營合格證，深耕低空經濟領域。",
    ctaPrimary: "了解我們的業務",
    ctaSecondary: "合作諮詢",
    image: "images/hero-chef.png"
  },
  about: {
    label: "ABOUT US",
    title: "關於香港問天實業",
    body1: "香港問天實業（科技）有限公司是一家立足香港、輻射內地與國際的科技企業，核心團隊成員來自清華大學、北京大學、香港嶺南大學等高校及省委省政府前職員。公司旗下擁有雲端問京（北京）科技有限公司、宣朝科技有限公司、豈朝科技（哈爾濱）有限公司等多家子公司，形成科技研發與跨境貿易協同發展的業務格局。",
    body2: "公司使命：立足高校等智能產業研究院，深耕核心技術研發與跨領域融合創新，爲實體經濟進行科技賦能，攜手實體經濟由當今十年邁進下一個十年。公司持有香港食物進口商/分銷商登記（TR-25-001129），並通過CNAS國家實驗室認證的食品檢測體系，確保每一份食材的安全與品質。",
    image: "images/about-vegetables.png"
  },
  advantages: {
    label: "WHY CHOOSE US",
    title: "我們的核心優勢",
    subtitle: "以品質與信譽，成爲香港餐飲行業首選的食材合作夥伴",
    items: [
      { icon: "images/icon-shield.svg", title: "品質保障", desc: "嚴格的品質管控體系。東莞石碣檢測中心通過CNAS國家實驗室認證（CNAS L5219）及CMA檢驗檢測資質認定，從源頭種植到冷鏈配送全程可追溯，確保每一份食材符合最高安全標準。只售一級菜，口感係唔同！" },
      { icon: "images/icon-truck.svg", title: "穩定供應", desc: "與源頭種植基地建立長期合作，全年無間斷供應各類食材。內地加工基地位於廣東東莞，具備完善的現場加工與品控把關能力，確保香港餐廳運營永不缺貨。" },
      { icon: "images/icon-search.svg", title: "安全可追溯", desc: "持有CAAC民用無人駕駛航空器運營合格證，擁有農業無人機等專利技術及九項軟件著作權。同時，食物進口嚴格遵循香港食安中心法規，源自福島等10都縣的食品禁止進口，確保食品安全。" },
      { icon: "images/icon-layers.svg", title: "一站式服務", desc: "蔬菜、淨菜加工、米麵糧油、肉類水產，全品類覆蓋。從採購、加工到配送，提供完整的食材解決方案。同時布局AI無人機末端配送技術研發，打造未來物流生態。" }
    ]
  },
  products: {
    label: "OUR PRODUCTS",
    title: "產品與服務",
    subtitle: "全品類食材供應，滿足香港餐廳的多樣化需求",
    items: [
      { title: "和光一級鮮菜", desc: "「和光蔬菜」品牌一級新鮮蔬菜，色澤鮮亮、含氧量足、新鮮飽滿。專爲追求新鮮、安全與品質的餐廳而選。只售一級菜，口感係唔同！", image: "images/product-vegetables.png" },
      { title: "專業淨菜加工", desc: "專業淨菜加工服務，清洗、切割、包裝一體化。東莞加工基地具備完善的現場加工與品控把關能力，爲香港餐廳節省後廚時間，提升出餐效率。", image: "images/product-clean-cut.png" },
      { title: "米麵糧油供應", desc: "精選優質大米、麵粉及食用油，滿足中西方餐飲的不同需求。穩定供應鏈確保全年無間斷配送，讓餐廳運營無後顧之憂。", image: "images/product-grains.png" },
      { title: "肉類水產海鮮", desc: "優質肉類、禽類及水產海鮮，冷鏈直送鎖住新鮮與營養。嚴格遵循香港食安中心進口法規，確保每一批次產品安全可靠。", image: "images/product-meat.png" }
    ]
  },
  cases: {
    label: "CLIENT CASES",
    title: "合作客戶",
    subtitle: "深受香港眾多知名餐飲品牌信賴",
    stats: [
      { number: "300+", label: "合作餐厅" },
      { number: "8000+", label: "日配送订单" },
      { number: "99%", label: "准时到达率" },
      { number: "CNAS", label: "实验室认证" }
    ]
  },
  news: {
    label: "NEWS & BLOG",
    title: "新闻动态",
    items: [
      { date: "2026.06.28", title: "豈朝科技亮相第四屆全球數字貿易博覽會", summary: "黑龍江攜34家數字企業亮相數貿會，豈朝科技在「數貿龍江」板塊展示AI數字服務與數商融合成果，獲省政府重點推介。", image: "images/news-1.png" },
      { date: "2026.06.15", title: "「和光蔬菜」品質檢測中心通過CNAS複評審", summary: "東莞市東正農產品檢測有限公司再次通過CNAS國家實驗室認可（CNAS L5219），有效期至2030年，持續爲食材安全保駕護航。", image: "images/news-2.png" },
      { date: "2026.05.30", title: "香港問天實業獲食物進口商登記資質", summary: "公司正式取得香港食物進口商/分銷商登記（TR-25-001129），具備日本食品進口資質，跨境生鮮業務全面啓動。", image: "images/news-3.png" }
    ]
  },
  contact: {
    label: "GET IN TOUCH",
    title: "聯系我們",
    subtitle: "期待與您的合作，爲您的餐廳提供最優質的食材服務",
    items: [
      { icon: "images/icon-phone.svg", label: "联系电话", value: "+852 2156 3017" },
      { icon: "images/icon-mail.svg", label: "电子邮箱", value: "info@wentian.com.hk" },
      { icon: "images/icon-map.svg", label: "办公地址", value: "香港粉嶺軍地龍馬路66號" }
    ]
  },
  footer: {
    brand: "問天實業",
    tagline: "爲香港高端餐飲甄選全球優質食材，以AI科技賦能跨境生鮮供應鏈",
    nav1Title: "快速鏈接",
    nav1Links: ["关于我们", "产品服务", "核心优势"],
    nav2Title: "服務支持",
    nav2Links: ["客户案例", "新闻动态", "联系我们"],
    copyright: "Copyright 2026 香港問天實業（科技）有限公司 | Hong Kong Wentian Industrial (Technology) Limited All Rights Reserved."
  }
};

const SECTIONS = [
  { key: "hero", label: "首頁 Hero", fields: ["badge", "title1", "title2", "subtitle", "ctaPrimary", "ctaSecondary"] },
  { key: "about", label: "關於我們", fields: ["label", "title", "body1", "body2"], hasImage: true },
  { key: "advantages", label: "核心優勢", fields: ["label", "title", "subtitle"] },
  { key: "products", label: "產品服務", fields: ["label", "title", "subtitle"] },
  { key: "cases", label: "客戶案例", fields: ["label", "title", "subtitle"] },
  { key: "news", label: "新聞動態", fields: ["label", "title"] },
  { key: "contact", label: "聯繫我們", fields: ["label", "title", "subtitle"] },
  { key: "footer", label: "頁腳設置", fields: ["brand", "tagline", "copyright"] }
];

const STORAGE_KEY = "wentian_website_content";

function getContent() {
  var stored = null;
  try { stored = JSON.parse(localStorage.getItem(STORAGE_KEY)); } catch(e) {}
  if (stored) { return deepMerge(JSON.parse(JSON.stringify(DEFAULT_CONTENT)), stored); }
  return JSON.parse(JSON.stringify(DEFAULT_CONTENT));
}

function saveContent(content) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
    if (typeof fetch !== "undefined") {
      fetch("/api/content", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(content) }).catch(function(e) {});
    }
    return true;
  } catch(e) { console.error("保存失敗", e); return false; }
}

function resetContent() {
  localStorage.removeItem(STORAGE_KEY);
  return JSON.parse(JSON.stringify(DEFAULT_CONTENT));
}

function deepMerge(target, source) {
  for (var key in source) {
    if (source[key] && typeof source[key] === "object" && !Array.isArray(source[key])) {
      target[key] = deepMerge(target[key] || {}, source[key]);
    } else { target[key] = source[key]; }
  }
  return target;
}

function nl2br(text) {
  if (!text) return "";
  return text.replace(/\n/g, "<br>");
}
