import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import { site } from "@/config/site";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <Helmet>
        <title>מדיניות פרטיות | {site.fullTitle}</title>
        <meta name="description" content="מדיניות הפרטיות של אתר משרד עורכי הדין שירן שושני, בהתאם לחוק הגנת הפרטיות ותיקון 13." />
        <link rel="canonical" href={`${site.url}/privacy`} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-28 pb-20">
          <div className="container mx-auto px-6 max-w-3xl text-right">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">מדיניות פרטיות</h1>
            <p className="text-muted-foreground text-sm mb-10">
              עודכן לאחרונה: יולי 2026 · בהתאם לחוק הגנת הפרטיות, התשמ"א-1981, לרבות תיקון מס' 13
            </p>

            <div className="space-y-8 text-foreground/85 leading-loose">
              <section>
                <h2 className="text-xl font-bold text-foreground mb-3">1. כללי</h2>
                <p>
                  משרד {site.fullTitle} (להלן: "המשרד" או "אנחנו") מכבד את פרטיות המשתמשים באתר
                  ומחויב להגנה על המידע האישי הנמסר לו. מדיניות זו מפרטת איזה מידע נאסף, לאילו
                  מטרות, כיצד הוא נשמר ומהן זכויותיך — הכול בהתאם לחוק הגנת הפרטיות, התשמ"א-1981,
                  ולתיקון מס' 13 לחוק שנכנס לתוקף באוגוסט 2025.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-3">2. איזה מידע אנו אוספים</h2>
                <ul className="list-disc pr-6 space-y-2">
                  <li>
                    <strong>מידע שנמסר על ידך:</strong> שם, מספר טלפון וכתובת דוא"ל שאת/ה מוסר/ת
                    מרצונך בטופס יצירת הקשר באתר, בפנייה בוואטסאפ, בטלפון או בדוא"ל.
                  </li>
                  <li>
                    <strong>מידע שנאסף אוטומטית:</strong> נתוני שימוש כלליים באתר (כגון עמודים
                    שנצפו וסוג דפדפן), ככל שנעשה שימוש בכלי מדידה או ב-Cookies.
                  </li>
                </ul>
                <p className="mt-3">
                  <strong>לא חלה עליך חובה חוקית למסור מידע</strong> — מסירת המידע תלויה ברצונך
                  ובהסכמתך, אולם ללא פרטי קשר לא נוכל לחזור אליך.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-3">3. מטרות השימוש במידע</h2>
                <ul className="list-disc pr-6 space-y-2">
                  <li>יצירת קשר חוזר ותיאום פגישת ייעוץ.</li>
                  <li>מתן שירותים משפטיים וניהול הקשר עם לקוחות.</li>
                  <li>שיפור האתר והשירות.</li>
                  <li>עמידה בהוראות כל דין.</li>
                </ul>
                <p className="mt-3">
                  המידע לא ייעשה בו שימוש למטרות אחרות מאלו שלשמן נמסר, ולא יועבר לצדדים
                  שלישיים, אלא בהסכמתך, לפי דרישת דין, או לספקי שירות החיוניים לתפעול האתר
                  (כגון אחסון) המחויבים אף הם בשמירה על סודיות ואבטחת מידע.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-3">4. שמירת המידע ואבטחתו</h2>
                <p>
                  המשרד מיישם אמצעי אבטחת מידע הולמים בהתאם לתקנות הגנת הפרטיות (אבטחת מידע),
                  התשע"ז-2017, ופועל לצמצום המידע הנשמר למינימום הנדרש ולמשך הזמן הדרוש בלבד
                  (עקרון צמצום המידע לפי תיקון 13). מידע החוסה תחת חיסיון עורך דין–לקוח מטופל
                  בסודיות מלאה כמתחייב מכללי האתיקה.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-3">5. זכויותיך</h2>
                <p>בהתאם לחוק הגנת הפרטיות, לרבות תיקון 13, עומדות לך הזכויות הבאות:</p>
                <ul className="list-disc pr-6 space-y-2 mt-3">
                  <li><strong>זכות עיון</strong> — לעיין במידע האישי המוחזק אודותיך.</li>
                  <li><strong>זכות תיקון</strong> — לבקש תיקון מידע שאינו נכון, שלם או מעודכן.</li>
                  <li><strong>זכות מחיקה</strong> — לבקש מחיקת מידע שנאסף או נשמר שלא כדין, או שאינו נדרש עוד.</li>
                  <li><strong>חזרה מהסכמה</strong> — לבטל בכל עת את הסכמתך לקבלת פניות שיווקיות, ככל שניתנה.</li>
                </ul>
                <p className="mt-3">
                  למימוש זכויותיך ניתן לפנות אלינו בדוא"ל{" "}
                  <a href={`mailto:${site.email}`} className="text-accent hover:underline">{site.email}</a>{" "}
                  או בטלפון {site.phone}, ואנו נטפל בפנייה בהקדם ובהתאם למועדים הקבועים בדין.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-3">6. Cookies (עוגיות)</h2>
                <p>
                  האתר עשוי לעשות שימוש ב-Cookies לצורך תפעולו השוטף, שמירת העדפות (כגון הגדרות
                  נגישות ושפה) ומדידת שימוש. ניתן לחסום או למחוק Cookies בהגדרות הדפדפן; ייתכן
                  שחלק מתכונות האתר לא יפעלו במלואן ללא Cookies.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-3">7. פנייה בנושא פרטיות</h2>
                <p>
                  בכל שאלה או בקשה בנושא פרטיות ומידע אישי ניתן לפנות אל האחראית על הגנת המידע
                  במשרד:
                </p>
                <ul className="mt-4 space-y-1">
                  <li><strong>עו"ד שירן שושני-אוכמן</strong></li>
                  <li><strong>כתובת:</strong> {site.address}</li>
                  <li><strong>טלפון:</strong> <a href={`tel:${site.phoneIntl}`} className="text-accent hover:underline">{site.phone}</a></li>
                  <li><strong>דוא"ל:</strong> <a href={`mailto:${site.email}`} className="text-accent hover:underline">{site.email}</a></li>
                </ul>
                <p className="mt-3">
                  כמו כן, עומדת לך הזכות לפנות לרשות להגנת הפרטיות בכל עניין הנוגע להפרת הוראות
                  החוק.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-3">8. עדכון המדיניות</h2>
                <p>
                  המשרד רשאי לעדכן מדיניות זו מעת לעת. הנוסח המחייב הוא הנוסח המפורסם באתר,
                  ותאריך העדכון האחרון מופיע בראש העמוד.
                </p>
              </section>
            </div>

            <Link to="/" className="inline-block mt-12 text-accent font-semibold hover:underline">
              → חזרה לעמוד הבית
            </Link>
          </div>
        </main>
        <Footer />
        <FloatingButtons />
        <AccessibilityWidget />
      </div>
    </>
  );
};

export default PrivacyPolicy;
