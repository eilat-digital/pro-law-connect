import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import { site } from "@/config/site";

const AccessibilityStatement = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <Helmet>
        <title>הצהרת נגישות | {site.fullTitle}</title>
        <meta name="description" content="הצהרת הנגישות של אתר משרד עורכי הדין שירן שושני – התאמות הנגישות באתר ופרטי רכזת הנגישות." />
        <link rel="canonical" href={`${site.url}/accessibility`} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-28 pb-20">
          <div className="container mx-auto px-6 max-w-3xl text-right">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">הצהרת נגישות</h1>
            <p className="text-muted-foreground text-sm mb-10">עודכן לאחרונה: יולי 2026</p>

            <div className="space-y-8 text-foreground/85 leading-loose">
              <section>
                <p>
                  משרד {site.fullTitle} (להלן: "המשרד") רואה חשיבות עליונה במתן שירות שוויוני,
                  מכבד ונגיש לכלל לקוחותיו, לרבות אנשים עם מוגבלות. אנו משקיעים משאבים ומאמצים
                  בהנגשת האתר, בהתאם לחוק שוויון זכויות לאנשים עם מוגבלות, התשנ"ח-1998, ולתקנות
                  שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג-2013.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-3">רמת הנגישות באתר</h2>
                <p>
                  האתר הונגש בהתאם להנחיות הנגישות לתכני אינטרנט WCAG 2.1 ברמה AA ולתקן הישראלי
                  ת"י 5568. האתר מותאם לגלישה בדפדפנים הנפוצים ולשימוש בטלפונים ניידים, ותומך
                  בטכנולוגיות מסייעות כגון קוראי מסך וניווט באמצעות מקלדת.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-3">התאמות הנגישות באתר</h2>
                <ul className="list-disc pr-6 space-y-2">
                  <li>תפריט נגישות ייעודי הכולל: הגדלת טקסט, ניגודיות גבוהה, הפחתת אנימציות, הדגשת קישורים וגופן קריא.</li>
                  <li>ניווט מלא באמצעות מקלדת וסימון מוקד (Focus) ברור.</li>
                  <li>טקסט חלופי (Alt) לתמונות ותיאורים לרכיבים אינטראקטיביים.</li>
                  <li>מבנה כותרות היררכי וסמנטי התומך בקוראי מסך.</li>
                  <li>כיווניות מלאה מימין לשמאל (RTL) ותמיכה בהחלפת שפה.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-3">הסדרי נגישות במשרד</h2>
                <p>
                  משרדנו ממוקם ב{site.address}. לתיאום פגישה נגישה או לקבלת מידע על הסדרי הנגישות
                  במשרד, ניתן לפנות אלינו מראש בטלפון {site.phone}.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-3">נתקלתם בבעיה? ספרו לנו</h2>
                <p>
                  אנו פועלים באופן שוטף לשיפור נגישות האתר. אם נתקלתם בקושי או ברכיב שאינו נגיש,
                  נשמח שתיידעו אותנו ונפעל לתיקון בהקדם האפשרי.
                </p>
                <ul className="mt-4 space-y-1">
                  <li><strong>רכזת נגישות:</strong> עו"ד שירן שושני-אוכמן</li>
                  <li><strong>טלפון:</strong> <a href={`tel:${site.phoneIntl}`} className="text-accent hover:underline">{site.phone}</a></li>
                  <li><strong>נייד:</strong> <a href={`tel:${site.mobileIntl}`} className="text-accent hover:underline">{site.mobile}</a></li>
                  <li><strong>דוא"ל:</strong> <a href={`mailto:${site.email}`} className="text-accent hover:underline">{site.email}</a></li>
                </ul>
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

export default AccessibilityStatement;
