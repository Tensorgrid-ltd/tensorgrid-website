# Quick Reference Guide - Tensorgrid Ltd Website Structure

## 📂 Directory Overview

```
Webpages/
├── html/                          ← All HTML structure files
│   ├── index.html                ← Home page (links: base.css + index.css)
│   ├── about.html                ← About page (links: base.css + about.css)
│   ├── contact.html              ← Contact page (links: base.css + contact.css)
│   ├── services.html             ← Services overview (links: base.css + services.css)
│   ├── projects.html             ← Projects page (links: base.css + projects.css)
│   ├── products/                 ← Product pages folder
│   │   ├── glassproducts.html    ↔ ../../css/products/glassproducts.css
│   │   ├── glassblocks.html      ↔ ../../css/products/glassblocks.css
│   │   ├── glassfittings.html    ↔ ../../css/products/glassfittings.css
│   │   ├── perspex.html          ↔ ../../css/products/perspex.css
│   │   ├── polysheet.html        ↔ ../../css/products/polysheet.css
│   │   └── putty.html            ↔ ../../css/products/putty.css
│   └── services/                 ← Service pages folder
│       ├── aluminiumfittings.html ↔ ../../css/services/aluminiumfittings.css
│       ├── balcony.html          ↔ ../../css/services/balcony.css
│       ├── balustrades.html      ↔ ../../css/services/balustrades.css
│       ├── curtainwalling.html   ↔ ../../css/services/curtainwalling.css
│       ├── mirrorinstallation.html ↔ ../../css/services/mirrorinstallation.css
│       ├── puttywork.html        ↔ ../../css/services/puttywork.css
│       ├── showercubicles.html   ↔ ../../css/services/showercubicles.css
│       └── skylight.html         ↔ ../../css/services/skylight.css
│
├── css/                           ← All CSS styling files
│   ├── base.css                  ← Global shared styles (required by ALL pages)
│   ├── index.css                 ← index.html specific styles
│   ├── about.css                 ← about.html specific styles
│   ├── contact.css               ← contact.html specific styles
│   ├── services.css              ← services.html specific styles
│   ├── projects.css              ← projects.html specific styles
│   ├── style.css                 ← [LEGACY - can be removed]
│   ├── products/                 ← Product-specific styles (mirror structure)
│   │   ├── glassproducts.css
│   │   ├── glassblocks.css
│   │   ├── glassfittings.css
│   │   ├── perspex.css
│   │   ├── polysheet.css
│   │   └── putty.css
│   └── services/                 ← Service-specific styles (mirror structure)
│       ├── aluminiumfittings.css
│       ├── balcony.css
│       ├── balustrades.css
│       ├── curtainwalling.css
│       ├── mirrorinstallation.css
│       ├── puttywork.css
│       ├── showercubicles.css
│       └── skylight.css
│
├── js/                           ← JavaScript files
│   └── script.js
│
├── assets/                       ← Images and media
│   └── [all image files]
│
└── PROJECT_HARMONIZATION.md     ← Full documentation (this)
```

---

## 🔗 CSS Linking Pattern

### Rule 1: ALL HTML files must link BOTH:
```html
<link rel="stylesheet" href="[PATH TO]/css/base.css">      <!-- Global styles -->
<link rel="stylesheet" href="[PATH TO]/css/[pagename].css"> <!-- Page-specific -->
```

### Rule 2: Relative Paths from HTML Location

**From html/ root level:**
```html
<!-- Good ✅ -->
<link rel="stylesheet" href="../css/base.css">
<link rel="stylesheet" href="../css/index.css">

<!-- Wrong ❌ -->
<link rel="stylesheet" href="css/index.css">
<link rel="stylesheet" href="/css/index.css">
```

**From html/products/ subfolder:**
```html
<!-- Good ✅ -->
<link rel="stylesheet" href="../../css/base.css">
<link rel="stylesheet" href="../../css/products/glassproducts.css">

<!-- Wrong ❌ -->
<link rel="stylesheet" href="../css/base.css">
<link rel="stylesheet" href="css/glassproducts.css">
```

**From html/services/ subfolder:**
```html
<!-- Good ✅ -->
<link rel="stylesheet" href="../../css/base.css">
<link rel="stylesheet" href="../../css/services/balcony.css">

<!-- Wrong ❌ -->
<link rel="stylesheet" href="../css/base.css">
```

---

## 📐 Responsive Breakpoints

### Base.css includes media queries for:

```css
/* Mobile First Approach */
/* Base styles apply to mobile (320px+) */

/* Tablets - 768px and up */
@media (max-width: 768px) {
  /* Tablet-optimized styles */
  - 2-column grids
  - Hamburger menu support
  - Adjusted navigation
  - Touch-friendly sizes
}

/* Desktops - 1200px and up */
@media (min-width: 1200px) {
  /* Full desktop experience */
  - Multi-column layouts
  - Full navigation menu
  - Large hero sections
}
```

### Individual page CSS files also include media queries for:
- Desktop view (1200px+)
- Tablet view (768px)
- Mobile view (480px and below)

---

## 📋 File Naming Convention

**Golden Rule**: HTML and CSS files share the SAME base name

```
File Pairing Examples:
✅ index.html         ↔ index.css
✅ about.html         ↔ about.css
✅ contact.html       ↔ contact.css
✅ services.html      ↔ services.css
✅ projects.html      ↔ projects.css

✅ products/glassblocks.html     ↔ products/glassblocks.css
✅ services/balcony.html         ↔ services/balcony.css

❌ DON'T DO:
- index.html with style.css (breaks pattern)
- about.html with different name
```

---

## 🎯 CSS Content Organization

### base.css Contains:
```
1. Global Reset (* selector)
2. Body & Typography
3. Header Styles
4. Navigation & Menus
5. Footer Styles
6. Reusable Components:
   - .card
   - .grid
   - .tile
   - button
   - .container
7. Animations & Transitions
8. Media Queries (all 3 breakpoints)
```

### Page-Specific CSS Contains:
```
1. Page Unique Sections
2. Hero/Banner Styles
3. Form Styles (if applicable)
4. Custom Layouts
5. Page Animations
6. Media Queries for responsive adjustments
```

---

## ✅ HTML Meta Tags (All Present)

Every HTML file now has:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Name - Tensorgrid Ltd</title>
    <link rel="stylesheet" href="[PATH]/css/base.css">
    <link rel="stylesheet" href="[PATH]/css/[pagename].css">
    <script src="[PATH]/js/script.js"></script>
</head>
<body>
    <!-- Content -->
</body>
</html>
```

---

## 📱 Testing Viewport Sizes

Test each page at:
- **Desktop**: 1920px, 1400px, 1200px
- **Tablet**: 768px (landscape and portrait)
- **Mobile**: 480px, 375px, 320px

All pages should be fully responsive and readable at each size.

---

## 🚀 Adding a New Page

If you add a new page, follow this 5-step process:

### Step 1: Create HTML file
```
html/newpage.html
```

### Step 2: Create CSS file
```
css/newpage.css
```

### Step 3: Link both stylesheets in HTML
```html
<link rel="stylesheet" href="../css/base.css">
<link rel="stylesheet" href="../css/newpage.css">
```

### Step 4: Add global HTML boilerplate
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Page - Tensorgrid Ltd</title>
    <link rel="stylesheet" href="../css/base.css">
    <link rel="stylesheet" href="../css/newpage.css">
    <script src="../js/script.js"></script>
</head>
<body>
    <header><!-- Use standard header --></header>
    <main><!-- Your unique content --></main>
    <footer><!-- Use standard footer --></footer>
</body>
</html>
```

### Step 5: Add CSS with media queries
```css
/* Page-specific styles */
.new-section { /* styles */ }

/* Responsive Design */
@media (max-width: 768px) { /* tablet */ }
@media (max-width: 480px) { /* mobile */ }
```

---

## 🐛 Common Issues & Solutions

**Issue**: CSS not loading
- Check path: `../css/` vs `../../css/`
- Verify filename matches exactly
- Check both stylesheets linked (base.css + page.css)

**Issue**: Mobile view not responsive
- Check viewport meta tag is present
- Check media queries in base.css (768px, 480px)
- Test in actual mobile device or browser dev tools

**Issue**: Images not showing
- Check path: `../assets/` vs `../../assets/`
- Verify file extensions (.jpg, .png, .svg)
- Test alt text displays correctly

**Issue**: Navigation overlapping content
- Check z-index in header (should be high, e.g., z-index: 1000)
- Check if body has margin-top for fixed header
- Add margin-top: 120px to .container or main content

---

## 📞 Support

For questions about file structure or CSS organization, refer to:
- [PROJECT_HARMONIZATION.md](PROJECT_HARMONIZATION.md) - Full documentation
- Individual CSS files - Self-documented with comments
- HTML files - Proper semantic structure with clear sections

---

**Last Updated**: 2024
**Project**: Tensorgrid Ltd Website Harmonization
**Status**: ✅ Complete
