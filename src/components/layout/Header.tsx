import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { site } from "@/config/site";

const navItems = [
  { id: "practice", label: "תחומי עיסוק" },
  { id: "about", label: "אודות" },
  { id: "services", label: "שירותי המשרד" },
  { id: "testimonials", label: "המלצות" },
  { id: "articles", label: "מאמרים" },
  { id: "contact", label: "יצירת קשר" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const go = (id: string) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const goHome = () => {
    setOpen(false);
    if (location.pathname !== "/") navigate("/");
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo — right */}
          <button onClick={goHome} className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-black border-2 border-accent flex items-center justify-center shrink-0">
              <img src={site.logo} alt="שירן שושני - לוגו" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col text-right leading-tight">
              <span className="text-foreground font-bold text-lg">{site.name}</span>
              <span className="text-muted-foreground text-[11px] tracking-wider">{site.tagline}</span>
            </div>
          </button>

          {/* Desktop nav — left */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className="text-foreground/80 hover:text-accent font-medium text-[15px] transition-colors relative after:absolute after:bottom-[-6px] after:right-0 after:h-px after:w-0 after:bg-accent hover:after:w-full after:transition-all"
              >
                {n.label}
              </button>
            ))}
            <Link
              to="/mitgashrim"
              className="text-accent hover:text-foreground font-semibold text-[15px] transition-colors"
            >
              מתגשרים
            </Link>
            <LanguageSwitcher />
          </nav>

          {/* Mobile: language + toggle */}
          <div className="flex items-center gap-1 lg:hidden">
            <LanguageSwitcher />
            <button
              className="p-2 text-foreground"
              onClick={() => setOpen(!open)}
              aria-label="תפריט"
              aria-expanded={open}
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="lg:hidden py-4 border-t border-border flex flex-col gap-1">
            {navItems.map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className="text-right px-4 py-3 text-foreground/85 hover:text-accent hover:bg-muted rounded-md transition-colors"
              >
                {n.label}
              </button>
            ))}
            <Link
              to="/mitgashrim"
              onClick={() => setOpen(false)}
              className="text-right px-4 py-3 text-accent font-semibold hover:bg-muted rounded-md transition-colors"
            >
              מתגשרים – התוכנית הייחודית שלנו
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
