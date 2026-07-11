/**
 * 問天實業官網 - 內容管理系統數據層
 * v4.0 — 與官網升級版.html完全同步
 */

const DEFAULT_CONTENT = {
  nav: {
    logo: "香港問天實業"
  },
  hero: {
    badge: "科技賦能 · 跨境生鮮 · 流量打造",
    title1: "專注一級鮮菜",
    title2: "從田間到餐桌 100%一級品質",
    desc: "從源頭種植到極速配送，只售一級菜，口感係唔同！",
    ctaPrimary: "了解生鮮供應鏈",
    ctaSecondary: "合作諮詢",
    image: "images/exported/2_28.png"
  },
  about: {
    label: "ABOUT US",
    title: "關於香港問天實業",
    body1: "香港問天實業（科技）有限公司，是一家立足香港、連接內地核心產區的現代化農業科技企業。我們以「一級鮮菜批發與出口」和「餐飲實體店鋪科技賦能」爲兩大核心業務，通過互聯網引流技術，致力於爲香港餐廳提供穩定、安全的食材供應，促進香港餐廳知名度與營業額的提升。",
    body2: "從田間到餐桌，從香港到內地，我們用實業精神築牢品質底線，用科技創新重構行業效率。我們不只是蔬菜供應商，更是您的數字化營銷合作夥伴。",
    culture1Title: "只賣一級菜",
    culture1Desc: "品質是底線，非一級不進港。",
    culture2Title: "誠信透明",
    culture2Desc: "每斤僅賺0.3HKD，價格公開。",
    image: "images/exported/2_82.png"
  },
  advantages: {
    label: "WHY CHOOSE US",
    title: "我們的核心優勢",
    subtitle: "以品質與信譽，成爲香港餐飲行業首選的食材合作夥伴",
    items: [
      { icon: "證", title: "DONG ZHENG 權威認證", desc: "國家權威檢測機構認證，檢測結果兩地互認，品質有據可依。" },
      { icon: "達", title: "深夜極速達", desc: "預計23:50極速送達，深夜冷鏈直送，凌晨備料，清晨上桌。" },
      { icon: "技", title: "科技賦能", desc: "免費爲實體餐廳進行官網建站、社媒引流、開發互聯網獲客系統，助力您的餐廳提高知名度+營業額。" },
      { icon: "價", title: "價格透明", desc: "明碼標價，每斤僅賺0.3HKD，無中間環節加價，誠實經營。" }
    ]
  },
  business: {
    label: "OUR BUSINESS",
    title: "兩大核心業務",
    subtitle: "以生鮮供應鏈爲根基，以科技賦能爲翅膀",
    items: [
      { tag: "生鮮供應鏈", title: "優質蔬菜供應", desc: "家常鮮蔬、定製淨菜、名優/進口蔬菜，每日從內地核心產區直供香港，顆顆嚴選。", image: "images/exported/2_66.png" },
      { tag: "科技賦能", title: "餐飲科技賦能", desc: "免費爲實體店鋪建立官網、TikTok/INS/FB社媒引流、助力餐廳提高知名度與營業額，實現餐廳實現數字化獲客轉型。", image: "images/exported/2_74.png" }
    ]
  },
  org: {
    label: "ORGANIZATION",
    title: "雙核驅動 · 組織架構",
    subtitle: "香港分部（市場+科技）+ 內地分部（生產+供應），雙輪驅動跨境生鮮供應鏈",
    image: "images/org-chart-options/方案01.svg"
  },
  supply: {
    label: "SUPPLY CHAIN",
    title: "生鮮供應鏈",
    subtitle: "從田間到餐桌，全鏈路品質把控",
    gradingTitle: "產品分級標準",
    gradingDesc: "我們堅持只做一級菜，以下是我們的分級對比標準",
    gradingRows: [
      { dimension: "外觀色澤", grade1: "色澤鮮亮、飽滿均勻、無黃葉爛葉", grade2: "色澤暗淡、大小不均、偶有瑕疵" },
      { dimension: "新鮮程度", grade1: "採摘後極速送達送達，含氧量充足", grade2: "周轉時間長，3-4天以上，含水量下降" },
      { dimension: "加工標準", grade1: "恆溫車間標準化淨菜加工，滅菌包裝", grade2: "常溫簡易加工，無滅菌處理" },
      { dimension: "配送時效", grade1: "預計23:50極速送達，深夜冷鏈直送", grade2: "次日白天配送，無冷鏈保障" },
      { dimension: "價格透明度", grade1: "明碼標價，每斤僅賺0.3HKD", grade2: "價格浮動大，中間環節加價不透明" }
    ],
    productTitle: "產品展示",
    productDesc: "全品類一級鮮菜，滿足不同餐廳需求",
    products: [
      { title: "家常鮮蔬", desc: "白菜、菜心、生菜、菠菜、油麥菜、芥蘭、西蘭花等日常蔬菜，每日新鮮到港。", image: "images/exported/2_188.png" },
      { title: "定製淨菜", desc: "清洗、去皮、切割、包裝一體化淨菜加工，按餐廳需求定製規格，節省後廚人力成本。", image: "images/exported/2_194.png" },
      { title: "名優/進口蔬菜", desc: "雲南高原、山東壽光、甘肅高原等名優產區，以及部分進口特種蔬菜，滿足高端餐廳需求。", image: "images/exported/2_200.png" }
    ],
    timelineTitle: "全流程溯源",
    timelineDesc: "從種植到送達，每一個環節都透明可查",
    timeline: [
      { title: "種植", desc: "內地核心產區" },
      { title: "採摘", desc: "新鮮採摘" },
      { title: "海關監管", desc: "跨境檢疫" },
      { title: "東莞加工", desc: "淨菜加工基地" },
      { title: "粉嶺集散", desc: "香港倉儲配送" },
      { title: "預計23:50極速送達", desc: "深夜極速送達" }
    ]
  },
  tech: {
    label: "TECH EMPOWERMENT",
    title: "科技賦能",
    subtitle: "不止於供應食材，更免費爲您的餐廳搭建數字化增長引擎",
    services: [
      { icon: "站", title: "免費建站", desc: "爲合作餐廳免費搭建品牌官網/小程序，展示招牌菜品、菜單與預約入口，提升線上形象。" },
      { icon: "流", title: "TikTok/INS/FB 社媒引流", desc: "專業團隊運營TikTok、Instagram、Facebook、X/Twitter等國際化社媒賬號，爲餐廳引流獲客。" },
      { icon: "引", title: "互聯網引流系統", desc: "爲餐廳搭建互聯網引流軟件、會員管理、優惠券、線上預約等引流系統，持續帶來新顧客、回頭客。" }
    ],
    socials: ["TikTok", "INS", "FB", "X"]
  },
  cases: {
    label: "CASES",
    title: "客戶案例",
    items: [
      { title: "港式茶餐廳", tag: "穩定供應 · 60+門店", desc: "每日極速直配，品質穩定一致，幫助客戶降低30%採購成本。" },
      { title: "精品粯菜酒樓", tag: "高端定製 · 淨菜服務", desc: "提供定製化淨菜規格，後廚處理時間減少50%  出餐效率顯著提升。" },
      { title: "川式火鍋品牌", tag: "新鮮葉菜 · 深夜配送", desc: "預計23:50極速送達，保證次日朝早/午餐高峯蔬菜新鮮度與供應量。" },
      { title: "街市生鮮供應", tag: "科技賦能 · 線上引流", desc: "免費爲街市、公屋附近的生鮮店鋪搭建小程序+社媒運營，3個月會員增長260%。" }
    ]
  },
  news: {
    label: "NEWS",
    title: "新聞動態",
    items: [
      { date: "2025.06.15", title: "問天實業與東莞加工基地升級合作", image: "images/exported/2_287.png" },
      { date: "2026.02.28", title: "CNAS實驗室認證周年：檢測標準再升級", image: "images/exported/2_293.png" },
      { date: "2026.05.10", title: "科技賦能計劃發布：問天公司助力餐廳數字化增長/獲客", image: "images/exported/2_299.png" }
    ]
  },
  contact: {
    label: "CONTACT",
    title: "聯繫我們",
    hkTitle: "香港分公司",
    hkAddress: "RM 107 SYNLOC TWR 223 NATHAN RD YAU MA TEI KL HONG KONG",
    cnTitle: "內地分公司",
    cnAddress: "廣東省東莞市國際蔬菜產業中心 A 區",
    whatsappTitle: "WhatsApp",
    whatsappNumber: "+852 59576318",
    formTitle: "在線留言",
    formAlert: "請通過 WhatsApp +852 59576318 聯絡我們，我們會盡快回覆您。"
  },
  footer: {
    brand: "問天實業",
    slogan: "專注一級鮮菜，從田間到餐桌100%一級品質供應\n科技賦能實體，實現 1+1>2",
    navTitle: "快速鏈接",
    navLinks: ["關於我們", "生鮮供應鏈", "科技賦能"],
    contactTitle: "聯繫我們",
    email: "HGTCHK01@gmail.com",
    whatsapp: "WhatsApp: +852  59576318",
    copyright: "© 2026 香港問天實業（科技）有限公司 版權所有"
  }
};

const SECTIONS = [
  { key: "hero", label: "首頁 Hero", fields: ["badge", "title1", "title2", "desc", "ctaPrimary", "ctaSecondary"], hasImage: true },
  { key: "about", label: "關於我們", fields: ["label", "title", "body1", "body2", "culture1Title", "culture1Desc", "culture2Title", "culture2Desc"], hasImage: true },
  { key: "advantages", label: "核心優勢", fields: ["label", "title", "subtitle"] },
  { key: "business", label: "業務概覽", fields: ["label", "title", "subtitle"] },
  { key: "org", label: "組織架構", fields: ["label", "title", "subtitle"], hasImage: true },
  { key: "supply", label: "生鮮供應鏈", fields: ["label", "title", "subtitle", "gradingTitle", "gradingDesc", "productTitle", "productDesc", "timelineTitle", "timelineDesc"] },
  { key: "tech", label: "科技賦能", fields: ["label", "title", "subtitle"] },
  { key: "cases", label: "客戶案例", fields: ["label", "title"] },
  { key: "news", label: "新聞動態", fields: ["label", "title"] },
  { key: "contact", label: "聯繫我們", fields: ["label", "title", "hkTitle", "hkAddress", "cnTitle", "cnAddress", "whatsappTitle", "whatsappNumber", "formTitle", "formAlert"] },
  { key: "footer", label: "頁腳設置", fields: ["brand", "slogan", "navTitle", "contactTitle", "email", "whatsapp", "copyright"] }
];

const STORAGE_KEY = "wentian_website_content_v4";

function getContent() {
  var stored = null;
  try { stored = JSON.parse(localStorage.getItem(STORAGE_KEY)); } catch(e) {}
  if (stored) { return deepMerge(JSON.parse(JSON.stringify(DEFAULT_CONTENT)), stored); }
  return JSON.parse(JSON.stringify(DEFAULT_CONTENT));
}

function saveContent(content) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
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
