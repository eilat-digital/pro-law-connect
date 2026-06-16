import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone } from "lucide-react";
import heroImage from "@/assets/shiran-hero.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(`#${id}`)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100vh] pt-20 overflow-hidden bg-background"
    >
      <div className="relative grid lg:grid-cols-12 min-h-[calc(100vh-5rem)]">
        {/* Photo side — RTL puts this visually on the LEFT (col-start-1) */}
        <div className="relative lg:col-span-7 lg:col-start-1 min-h-[60vh] lg:min-h-full order-2 lg:order-1">
          <img
            src={heroImage}
            alt="עו״ד שירן שושני"
            className="absolute inset-0 w-full h-full object-cover object-center"
            width={1600}
            height={1280}
          />
          {/* Soft cream wash from the right edge for elegant blend */}
          <div className="absolute inset-0 bg-gradient-to-l from-background via-background/30 to-transparent lg:from-background/95 lg:via-background/20" />
        </div>

        {/* Content side — RTL puts this visually on the RIGHT */}
        <div className="relative lg:col-span-6 lg:col-start-7 flex items-center px-6 sm:px-10 lg:px-16 py-16 lg:py-24 order-1 lg:order-2 bg-background lg:bg-transparent z-10">
          <div className="max-w-xl mr-auto lg:mr-0 animate-fade-in-up">
            {/* Monogram */}
            <div className="mb-8 inline-flex items-center gap-4">
              <div className="w-16 h-16 rounded-full border-2 border-accent flex items-center justify-center">
                <span className="font-serif text-2xl text-accent tracking-tight">
                  ש.ש
                </span>
              </div>
              <div className="text-right">
                <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-1">
                  משרד עורכי דין
                </div>
                <div className="text-sm font-medium text-foreground">
                  שירן שושני
                </div>
              </div>
            </div>

            {/* Tagline */}
            <div className="h-px w-16 bg-accent mb-6" />
            <p className="text-accent text-sm tracking-[0.2em] uppercase mb-4">
              ייצוג. נוטריון. גישור.
            </p>

            {/* Main headline — editorial */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-[1.1] mb-6 tracking-tight">
              משפט אישי.
              <br />
              <span className="font-serif italic text-accent">
                ליווי בגובה העיניים.
              </span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-md">
              עו״ד שירן שושני מלווה לקוחות פרטיים ועסקיים בדיני משפחה, נדל״ן,
              ליטיגציה מסחרית, שירותי נוטריון וגישור — במקצועיות, בדיסקרטיות
              ובמחויבות מלאה לאינטרסים שלכם.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                size="xl"
                onClick={() => scrollTo("contact")}
                className="bg-foreground text-background hover:bg-accent hover:text-accent-foreground rounded-none px-8 group"
              >
                לתיאום שיחת היכרות
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              </Button>
              <a
                href="tel:+972-50-6421322"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-foreground/20 text-foreground hover:border-accent hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                050-6421322
              </a>
            </div>

            {/* Tiny credentials line */}
            <div className="mt-12 pt-8 border-t border-border flex flex-wrap gap-x-8 gap-y-3 text-xs tracking-wider uppercase text-muted-foreground">
              <span>חברה בלשכת עורכי הדין</span>
              <span className="text-accent">•</span>
              <span>נוטריון מוסמך</span>
              <span className="text-accent">•</span>
              <span>מגשרת מוסמכת</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
