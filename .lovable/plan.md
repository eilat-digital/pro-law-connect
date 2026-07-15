# עיצוב חדש ל-Hero + תיקוני רספונסיביות

## הבעיה
ב-`src/pages/Index.tsx` ה-Hero הוא תמונה ברוחב מלא בגובה `55vh / 80vh` עם `object-cover object-top`. בנייד היא מתפרסת על כל המסך, "בולעת" את הטקסט, ולפעמים מציגה חיתוך לא מחמיא של הפורטרט. בנוסף גובה קבוע ב-vh יוצר overflow אופקי במסכים צרים.

## הכיוון שנבחר — פורטרט קומפקטי בצד (Editorial)

במקום תמונת רקע ענקית, ה-Hero יהפוך לבלוק תוכן מובנה: כותרת + פסקה + CTA בצד אחד, ופורטרט עגול/מלבני מעוגל קומפקטי בצד השני. אין יותר תמונה מלאת-מסך.

### דסקטופ (≥ md)
- Grid דו-טורי: טקסט (7/12) + פורטרט (5/12).
- הפורטרט: `aspect-[4/5]`, `max-w-[380px]`, פינות `rounded-2xl`, מסגרת דקה `border-accent/30`, צל עדין, מיקום `object-top` כדי לשמור על הפנים.
- רקע: gradient עדין (`from-background via-muted/30 to-background`) + אלמנט דקורטיבי דק (קו accent אנכי / חותמת "עו״ד").
- ריפוד: `py-16 lg:py-24`, ללא `h-[80vh]`.

### מובייל (< md)
- Stack אנכי: פורטרט מרוכז למעלה כעיגול/מרובע מעוגל `w-40 h-48` (או `w-44 aspect-[4/5]`), אחריו כותרת → פסקה → CTA.
- ללא `vh` — הגובה נקבע לפי התוכן. `px-5` צמוד ולא `px-6` כדי לצמצם overflow.
- כותרת: `text-3xl` במקום `text-4xl` בנייד; leading הדוק יותר.

### שינוי בקוד
`src/pages/Index.tsx` — סקשן ה-hero בלבד (סביב שורות 108-138). ה-JSON (`content.hero.image/title/description/ctaText`) לא משתנה, רק ה-markup וה-classes.

מבנה חדש (סקיצה):
```text
<section id="hero" className="relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
  <div className="container mx-auto px-5 md:px-6 py-14 md:py-20 lg:py-24">
    <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
      <div className="md:col-span-7 order-2 md:order-1 text-right">
        {logo circle 16x16}
        <h1 className="text-3xl md:text-4xl lg:text-5xl ...">{title}</h1>
        <Markdown>{description}</Markdown>
        {CTA}
      </div>
      <div className="md:col-span-5 order-1 md:order-2 flex justify-center md:justify-start">
        <div className="relative w-40 md:w-full max-w-[380px] aspect-[4/5] rounded-2xl overflow-hidden border border-accent/30 shadow-xl">
          <img src={hero.image} className="w-full h-full object-cover object-top" />
        </div>
      </div>
    </div>
  </div>
</section>
```

עדיפות ל-`order`: במובייל הפורטרט למעלה (order-1), בדסקטופ מימין (order-2 בגלל RTL/LTR — נבחן ונקבע לפי מה שנראה נכון בזמן הבנייה; המטרה: פורטרט בצד שמאל של הטקסט בדסקטופ).

## בדיקת רספונסיביות כללית

בעוד ה-Hero משתנה, אעבור על ה-viewport 375px ואאסוף תיקונים למקטעים הבאים ב-`Index.tsx`:

1. **סקשן "מתגשרים"** — כפתורי CTA `flex-wrap` כבר קיים; לוודא שהטקסט לא נחתך ושהכפתורים ב-`w-full sm:w-auto` בנייד.
2. **כרטיסי תחומי עיסוק** — ריפוד `p-7` גדול מדי בנייד → `p-5 sm:p-7`. הכותרת `text-xl` תישאר.
3. **QuoteStrip** — `text-2xl lg:text-3xl` תקין; לוודא `px-6` לא יוצר overflow עם ציטוטים ארוכים (`break-words`).
4. **About** — `text-lg` בפסקאות → `text-base md:text-lg` בנייד לקריאות טובה יותר.
5. **Services (רשימה ממוספרת)** — במובייל `grid-cols-1` כבר עובד; לוודא `gap-y-5` מספיק.
6. **Testimonials/Articles** — `p-7` → `p-6`; grid כבר `md:grid-cols-3`.
7. **Header** — לבדוק (בקובץ `src/components/layout/Header.tsx`) שאין overflow אופקי בנייד עם התפריט; במידת הצורך להצר padding.
8. **ContactForm** — לוודא inputs `w-full` ולא יוצרים גלילה אופקית.
9. גלובלי ב-`index.css`: להוסיף `html, body { overflow-x: hidden; }` אם עדיין יש גלישה אופקית לאחר התיקונים.

## קבצים שישתנו
- `src/pages/Index.tsx` — עיקר השינוי (Hero + התאמות padding/text-size בסקשנים לעיל).
- `src/components/layout/Header.tsx` — רק אם תימצא בעיית רספונסיביות.
- `src/index.css` — אולי `overflow-x-hidden` גלובלי.

## מה לא משתנה
- תוכן ה-JSON (`homepage.json`).
- מבנה הראוטים, ה-SEO, ה-Header/Footer, ה-accessibility widget.
- כל 20 תחומי העיסוק, המבנה שלהם, וסדר הסקשנים.
- פונטים ופלטת צבעים.

## Acceptance
- ב-375px רוחב: אין גלילה אופקית; ה-Hero נראה כטקסט + פורטרט קומפקטי מלמעלה, לא כתמונת ענק.
- ב-1440px: פורטרט קומפקטי (max 380px) בצד, טקסט לצדו, ללא `80vh`.
- הפורטרט תמיד מציג את הפנים (object-top).
- כל הסקשנים האחרים נראים תקין ב-375 / 768 / 1280.
