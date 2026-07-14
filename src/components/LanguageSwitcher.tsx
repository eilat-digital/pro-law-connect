import { useEffect, useRef, useState } from "react";
import { Globe, Check } from "lucide-react";

const LANGS = [
  { code: "he", label: "עברית" },
  { code: "en", label: "English" },
  { code: "ru", label: "Русский" },
  { code: "ar", label: "العربية" },
  { code: "fr", label: "Français" },
];

const COOKIE = "googtrans";

const getCurrentLang = (): string => {
  const m = document.cookie.match(new RegExp(`(?:^|;\\s*)${COOKIE}=([^;]*)`));
  if (!m) return "he";
  const parts = decodeURIComponent(m[1]).split("/");
  return parts[2] && parts[2] !== "he" ? parts[2] : "he";
};

const setCookie = (value: string | null) => {
  const domains = ["", `; domain=${location.hostname}`, `; domain=.${location.hostname}`];
  for (const d of domains) {
    if (value === null) {
      document.cookie = `${COOKIE}=; path=/${d}; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    } else {
      document.cookie = `${COOKIE}=${value}; path=/${d}`;
    }
  }
};

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: any;
  }
}

/** מפעיל את סקריפט Google Translate כשנבחרה שפה שאינה עברית */
const loadTranslateScript = () => {
  if (document.getElementById("google-translate-script")) return;
  window.googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      { pageLanguage: "he", autoDisplay: false },
      "google_translate_element"
    );
  };
  const s = document.createElement("script");
  s.id = "google-translate-script";
  s.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  document.body.appendChild(s);
};

const LanguageSwitcher = () => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("he");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lang = getCurrentLang();
    setCurrent(lang);
    if (lang !== "he") loadTranslateScript();
  }, []);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const choose = (code: string) => {
    setOpen(false);
    if (code === current) return;
    if (code === "he") {
      setCookie(null);
    } else {
      setCookie(`/he/${code}`);
    }
    location.reload();
  };

  return (
    <div ref={ref} className="relative">
      <div id="google_translate_element" className="hidden" aria-hidden="true" />
      <button
        onClick={() => setOpen(!open)}
        aria-label="בחירת שפה"
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-1.5 px-2.5 py-2 rounded-md text-foreground/80 hover:text-accent hover:bg-muted transition-colors text-sm font-medium notranslate"
      >
        <Globe className="w-4 h-4" />
        <span className="uppercase">{current}</span>
      </button>
      {open && (
        <ul
          role="listbox"
          aria-label="שפות"
          className="absolute top-full mt-2 left-0 min-w-[150px] bg-card border border-border rounded-lg shadow-elegant py-1 z-50 notranslate"
        >
          {LANGS.map((l) => (
            <li key={l.code}>
              <button
                role="option"
                aria-selected={current === l.code}
                onClick={() => choose(l.code)}
                className="w-full flex items-center justify-between gap-3 px-4 py-2 text-sm text-foreground/85 hover:bg-muted hover:text-accent transition-colors text-right"
              >
                <span>{l.label}</span>
                {current === l.code && <Check className="w-4 h-4 text-accent" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
