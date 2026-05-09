import { useEffect, useState } from "react";
import {
  Accessibility,
  X,
  Type,
  Contrast,
  Link2,
  MousePointer2,
  PauseCircle,
  Droplet,
  RotateCcw,
} from "lucide-react";

type Settings = {
  textSize: "normal" | "large" | "xlarge" | "small";
  highContrast: boolean;
  grayscale: boolean;
  highlightLinks: boolean;
  largeCursor: boolean;
  stopAnimations: boolean;
  readableFont: boolean;
};

const defaults: Settings = {
  textSize: "normal",
  highContrast: false,
  grayscale: false,
  highlightLinks: false,
  largeCursor: false,
  stopAnimations: false,
  readableFont: false,
};

const STORAGE_KEY = "a11y-settings";

const applySettings = (s: Settings) => {
  const html = document.documentElement;
  html.classList.toggle("a11y-large-text", s.textSize === "large");
  html.classList.toggle("a11y-xlarge-text", s.textSize === "xlarge");
  html.classList.toggle("a11y-small-text", s.textSize === "small");
  html.classList.toggle("a11y-high-contrast", s.highContrast);
  html.classList.toggle("a11y-grayscale", s.grayscale);
  html.classList.toggle("a11y-highlight-links", s.highlightLinks);
  html.classList.toggle("a11y-large-cursor", s.largeCursor);
  html.classList.toggle("a11y-stop-animations", s.stopAnimations);
  html.classList.toggle("a11y-readable-font", s.readableFont);
};

const AccessibilityWidget = () => {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<Settings>(() => {
    if (typeof window === "undefined") return defaults;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? { ...defaults, ...JSON.parse(raw) } : defaults;
    } catch {
      return defaults;
    }
  });

  useEffect(() => {
    applySettings(settings);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch {
      /* ignore */
    }
  }, [settings]);

  const toggle = (key: keyof Settings) => {
    setSettings((s) => ({ ...s, [key]: !s[key] } as Settings));
  };

  const setTextSize = (size: Settings["textSize"]) => {
    setSettings((s) => ({ ...s, textSize: size }));
  };

  const reset = () => setSettings(defaults);

  return (
    <>
      <button
        type="button"
        aria-label="פתיחת תפריט נגישות"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 left-6 z-[60] w-14 h-14 rounded-full bg-accent text-accent-foreground shadow-gold flex items-center justify-center hover:scale-105 transition-transform focus:outline-none focus:ring-4 focus:ring-accent/40"
      >
        <Accessibility className="w-7 h-7" />
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="תפריט נגישות"
          className="fixed bottom-24 left-6 z-[60] w-80 max-w-[calc(100vw-3rem)] bg-card text-card-foreground border border-border rounded-2xl shadow-elegant overflow-hidden animate-fade-in"
          dir="rtl"
        >
          <div className="flex items-center justify-between px-4 py-3 bg-primary text-primary-foreground">
            <div className="flex items-center gap-2 font-bold">
              <Accessibility className="w-5 h-5" />
              <span>תפריט נגישות</span>
            </div>
            <button
              type="button"
              aria-label="סגירה"
              onClick={() => setOpen(false)}
              className="hover:opacity-80"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 max-h-[70vh] overflow-y-auto space-y-4">
            <div>
              <p className="text-sm font-semibold mb-2 flex items-center gap-2">
                <Type className="w-4 h-4" /> גודל טקסט
              </p>
              <div className="grid grid-cols-4 gap-2">
                {(["small", "normal", "large", "xlarge"] as const).map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setTextSize(size)}
                    className={`py-2 rounded-md border text-sm transition-colors ${
                      settings.textSize === size
                        ? "bg-accent text-accent-foreground border-accent"
                        : "bg-card border-border hover:bg-secondary"
                    }`}
                  >
                    {size === "small"
                      ? "A−"
                      : size === "normal"
                      ? "A"
                      : size === "large"
                      ? "A+"
                      : "A++"}
                  </button>
                ))}
              </div>
            </div>

            <ToggleRow
              icon={<Contrast className="w-4 h-4" />}
              label="ניגודיות גבוהה"
              active={settings.highContrast}
              onClick={() => toggle("highContrast")}
            />
            <ToggleRow
              icon={<Droplet className="w-4 h-4" />}
              label="גווני אפור"
              active={settings.grayscale}
              onClick={() => toggle("grayscale")}
            />
            <ToggleRow
              icon={<Link2 className="w-4 h-4" />}
              label="הדגשת קישורים"
              active={settings.highlightLinks}
              onClick={() => toggle("highlightLinks")}
            />
            <ToggleRow
              icon={<MousePointer2 className="w-4 h-4" />}
              label="סמן עכבר גדול"
              active={settings.largeCursor}
              onClick={() => toggle("largeCursor")}
            />
            <ToggleRow
              icon={<PauseCircle className="w-4 h-4" />}
              label="עצירת אנימציות"
              active={settings.stopAnimations}
              onClick={() => toggle("stopAnimations")}
            />
            <ToggleRow
              icon={<Type className="w-4 h-4" />}
              label="פונט קריא"
              active={settings.readableFont}
              onClick={() => toggle("readableFont")}
            />

            <button
              type="button"
              onClick={reset}
              className="w-full mt-2 py-2 rounded-md border border-border bg-secondary text-secondary-foreground hover:bg-muted transition-colors flex items-center justify-center gap-2 text-sm font-medium"
            >
              <RotateCcw className="w-4 h-4" />
              איפוס הגדרות
            </button>

            <a
              href="/accessibility"
              className="block text-center text-sm text-accent hover:underline pt-2"
            >
              להצהרת הנגישות המלאה
            </a>
          </div>
        </div>
      )}
    </>
  );
};

const ToggleRow = ({
  icon,
  label,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    type="button"
    onClick={onClick}
    aria-pressed={active}
    className={`w-full flex items-center justify-between px-3 py-2 rounded-md border transition-colors ${
      active
        ? "bg-accent text-accent-foreground border-accent"
        : "bg-card border-border hover:bg-secondary"
    }`}
  >
    <span className="flex items-center gap-2 text-sm font-medium">
      {icon}
      {label}
    </span>
    <span
      className={`w-9 h-5 rounded-full relative transition-colors ${
        active ? "bg-primary-foreground/30" : "bg-muted"
      }`}
    >
      <span
        className={`absolute top-0.5 w-4 h-4 rounded-full bg-card transition-all ${
          active ? "right-0.5" : "right-[18px]"
        }`}
      />
    </span>
  </button>
);

export default AccessibilityWidget;
