import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import AccessibilityWidget from "@/components/AccessibilityWidget";

const AccessibilityStatementPage = () => {
  return (
    <>
      <Helmet>
        <title>הצהרת נגישות - שירן שושני</title>
        <meta
          name="description"
          content="הצהרת נגישות לאתר משרד שירן שושני - עורכי דין, נוטריון וגישור, בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות."
        />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-32 pb-24">
          <div className="container mx-auto px-4 max-w-3xl">
            <nav className="text-sm text-muted-foreground mb-6">
              <Link to="/" className="hover:text-accent">ראשי</Link>
              <span className="mx-2">/</span>
              <span>הצהרת נגישות</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              הצהרת נגישות
            </h1>

            <div className="text-foreground space-y-6 leading-relaxed">
              <p>
                משרד שירן שושני - עורכי דין, נוטריון וגישור רואה חשיבות עליונה בהנגשת האתר והשירותים לכלל הציבור, לרבות אנשים עם מוגבלות, וזאת בהתאם לחוק שוויון זכויות לאנשים עם מוגבלות, התשנ"ח-1998, ולתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג-2013.
              </p>

              <h2 className="text-2xl font-bold mt-8">רמת הנגישות</h2>
              <p>
                האתר עומד בדרישות תקן ישראלי 5568 (מבוסס על WCAG 2.1) ברמה AA.
              </p>

              <h2 className="text-2xl font-bold mt-8">אמצעי הנגשה באתר</h2>
              <ul className="list-disc pr-6 space-y-2">
                <li>תפריט נגישות מובנה הזמין בכל עמודי האתר (כפתור עגול בפינה).</li>
                <li>הגדלה והקטנה של גודל הטקסט.</li>
                <li>מצב ניגודיות גבוהה.</li>
                <li>מצב גווני אפור.</li>
                <li>הדגשת קישורים.</li>
                <li>סמן עכבר מוגדל.</li>
                <li>עצירת אנימציות ואפקטים.</li>
                <li>החלפה לפונט קריא.</li>
                <li>תמיכה מלאה בניווט באמצעות מקלדת.</li>
                <li>שימוש בכותרות סמנטיות, תוויות aria ותיאורים חלופיים לתמונות.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8">סייגים</h2>
              <p>
                למרות מאמצינו להנגיש את כלל עמודי האתר, ייתכן ויתגלו חלקים שטרם הונגשו במלואם. אנו פועלים באופן שוטף לשיפור הנגישות.
              </p>

              <h2 className="text-2xl font-bold mt-8">פניות בנושא נגישות</h2>
              <p>
                במידה ונתקלתם בבעיית נגישות באתר, או שהינכם זקוקים לסיוע, נשמח לקבל פנייה מרכז הנגישות שלנו:
              </p>
              <div className="bg-card border border-border rounded-xl p-6 shadow-card">
                <p className="font-semibold mb-2">רכז נגישות</p>
                <p>משרד שירן שושני - עורכי דין, נוטריון וגישור</p>
                <p>טלפון: <a href="tel:+972-50-6421322" className="text-accent hover:underline">050-6421322</a></p>
                <p>דוא"ל: <a href="mailto:info@shiran-shoshani-law.co.il" className="text-accent hover:underline">info@shiran-shoshani-law.co.il</a></p>
                <p>כתובת: שדרות התמרים 4, הקניון האדום, קומה 2, אילת</p>
              </div>

              <p className="text-sm text-muted-foreground mt-8">
                תאריך עדכון ההצהרה: {new Date().toLocaleDateString("he-IL")}
              </p>
            </div>
          </div>
        </main>
        <Footer />
        <FloatingButtons />
        <AccessibilityWidget />
      </div>
    </>
  );
};

export default AccessibilityStatementPage;
