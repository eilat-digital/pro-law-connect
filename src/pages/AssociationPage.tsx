import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import AccessibilityWidget from "@/components/AccessibilityWidget";

const AssociationPage = () => {
  return (
    <>
      <Helmet>
        <title>עמותה - שירן שושני</title>
        <meta
          name="description"
          content="דף העמותה של משרד שירן שושני - עורכי דין, נוטריון וגישור."
        />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-32 pb-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <nav className="text-sm text-muted-foreground mb-6">
              <Link to="/" className="hover:text-accent">
                ראשי
              </Link>
              <span className="mx-2">/</span>
              <span>עמותה</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              עמותה
            </h1>
            <p className="text-lg text-muted-foreground mb-12">
              תוכן העמוד יתווסף בהמשך.
            </p>
            <div className="bg-card border border-border rounded-2xl p-12 text-center shadow-card">
              <p className="text-muted-foreground">
                בקרוב יוצג כאן מידע מפורט על פעילות העמותה.
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

export default AssociationPage;
