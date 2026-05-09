import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import AccessibilityWidget from "@/components/AccessibilityWidget";

const PrivacyPolicyPage = () => {
  return (
    <>
      <Helmet>
        <title>מדיניות פרטיות - שירן שושני</title>
        <meta
          name="description"
          content="הצהרת פרטיות של משרד שירן שושני - עורכי דין, נוטריון וגישור."
        />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-32 pb-24">
          <div className="container mx-auto px-4 max-w-3xl">
            <nav className="text-sm text-muted-foreground mb-6">
              <Link to="/" className="hover:text-accent">ראשי</Link>
              <span className="mx-2">/</span>
              <span>מדיניות פרטיות</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              הצהרת פרטיות
            </h1>

            <div className="prose prose-lg max-w-none text-foreground space-y-6 leading-relaxed">
              <p>
                משרד שירן שושני - עורכי דין, נוטריון וגישור (להלן: "המשרד") מכבד את פרטיות המשתמשים באתר זה ופועל בהתאם להוראות חוק הגנת הפרטיות, התשמ"א-1981, ולתקנות מכוחו.
              </p>

              <h2 className="text-2xl font-bold mt-8">1. איסוף מידע</h2>
              <p>
                בעת שימוש באתר ובמיוחד בעת מילוי טופס יצירת קשר, ייתכן שתתבקשו למסור פרטים אישיים כגון שם מלא, כתובת דוא"ל, מספר טלפון ופרטי הפנייה. מסירת המידע נעשית מרצונכם החופשי ובהסכמתכם.
              </p>

              <h2 className="text-2xl font-bold mt-8">2. השימוש במידע</h2>
              <p>
                המידע הנאסף משמש את המשרד למתן מענה לפניות, יצירת קשר עם הפונה, מתן ייעוץ ושירותים משפטיים, ולשיפור חוויית המשתמש באתר. המשרד לא יעביר את המידע לצדדים שלישיים אלא לפי דרישת חוק או בהסכמת המשתמש.
              </p>

              <h2 className="text-2xl font-bold mt-8">3. עוגיות (Cookies)</h2>
              <p>
                האתר עשוי לעשות שימוש בעוגיות לצורכי תפעול שוטף ושיפור חוויית הגלישה. ניתן לחסום שימוש בעוגיות באמצעות הגדרות הדפדפן.
              </p>

              <h2 className="text-2xl font-bold mt-8">4. אבטחת מידע</h2>
              <p>
                המשרד נוקט באמצעים סבירים לאבטחת המידע הנמסר על ידי המשתמשים, אך אין באפשרותו להבטיח חסינות מוחלטת מפני חדירה או שימוש לא מורשה.
              </p>

              <h2 className="text-2xl font-bold mt-8">5. זכויות המשתמש</h2>
              <p>
                כל אדם זכאי לעיין במידע המוחזק עליו, לבקש את תיקונו או מחיקתו, בהתאם להוראות הדין. לבקשות בנושא ניתן לפנות למשרד באמצעי הקשר המופיעים בעמוד זה.
              </p>

              <h2 className="text-2xl font-bold mt-8">6. יצירת קשר</h2>
              <p>
                בכל שאלה או בקשה בנושא פרטיות:<br />
                טלפון: 050-6421322<br />
                דוא"ל: info@shiran-shoshani-law.co.il<br />
                כתובת: שדרות התמרים 4, הקניון האדום, קומה 2, אילת
              </p>

              <p className="text-sm text-muted-foreground mt-8">
                עדכון אחרון: {new Date().toLocaleDateString("he-IL")}
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

export default PrivacyPolicyPage;
