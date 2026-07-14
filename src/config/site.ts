/**
 * ⚙️ הגדרות האתר — פרטי הקשר נטענים מקובץ התוכן src/content/homepage.json,
 * שניתן לערוך גם דרך פאנל הניהול (Decap CMS) בכתובת /admin/ באתר החי.
 * קישורי הסושיאל נערכים כאן.
 */
import content from "@/content/homepage.json";

/** המרת מספר ישראלי (054-8151301) לפורמט בינלאומי (+972548151301) */
const toIntl = (num: string) => "+972" + num.replace(/\D/g, "").replace(/^0/, "");

const { phone, mobile, fax, email, address } = content.contact;

export const site = {
  name: "שירן שושני",
  tagline: "חברת עורכי דין, נוטריון וגישור",
  fullTitle: "שירן שושני – חברת עורכי דין, נוטריון וגישור",

  // פרטי קשר (מקור: src/content/homepage.json — ניתן לעריכה בפאנל /admin/)
  phone,
  phoneIntl: toIntl(phone),
  mobile,
  mobileIntl: toIntl(mobile),
  fax,
  email,
  address,

  // וואטסאפ (מבוסס על מספר הנייד)
  whatsapp:
    `https://wa.me/${toIntl(mobile).slice(1)}?text=` +
    encodeURIComponent("שלום, אשמח לתאם פגישת ייעוץ"),

  // 🔗 רשתות חברתיות — החליפו את הקישורים בכתובות האמיתיות של הדפים שלכם
  social: {
    facebook: "https://www.facebook.com/shoshanish.law",
    instagram: "https://www.instagram.com/shoshanish.law",
    tiktok: "https://www.tiktok.com/@shoshanish.law",
  },

  url: "https://shiran-shoshani-law.co.il",
};
