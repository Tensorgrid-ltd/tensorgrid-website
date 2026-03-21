# Project Structure Map - Tensorgrid Ltd

## Complete Folder & File Hierarchy

```
📦 Webpages/
│
├── 📄 PROJECT_HARMONIZATION.md        [Full documentation]
├── 📄 QUICK_REFERENCE.md              [Quick guide]
│
├── 📁 html/                           [HTML STRUCTURE - 19 files]
│   │
│   ├── 📄 index.html                  (Home Page)
│   ├── 📄 about.html                  (About Page)
│   ├── 📄 contact.html                (Contact Page)
│   ├── 📄 services.html               (Services Overview)
│   ├── 📄 projects.html               (Projects Portfolio)
│   │
│   ├── 📁 products/                   [6 Product Pages]
│   │   ├── 📄 glassproducts.html
│   │   ├── 📄 glassblocks.html
│   │   ├── 📄 glassfittings.html
│   │   ├── 📄 perspex.html
│   │   ├── 📄 polysheet.html
│   │   └── 📄 putty.html
│   │
│   └── 📁 services/                   [8 Service Pages]
│       ├── 📄 aluminiumfittings.html
│       ├── 📄 balcony.html
│       ├── 📄 balustrades.html
│       ├── 📄 curtainwalling.html
│       ├── 📄 mirrorinstallation.html
│       ├── 📄 puttywork.html
│       ├── 📄 showercubicles.html
│       └── 📄 skylight.html
│
├── 📁 css/                            [CSS STYLING - 21 files]
│   │
│   ├── 📄 base.css                    [GLOBAL - used by ALL pages]
│   ├── 📄 index.css                   (Home page styles)
│   ├── 📄 about.css                   (About page styles)
│   ├── 📄 contact.css                 (Contact page styles)
│   ├── 📄 services.css                (Services page styles)
│   ├── 📄 projects.css                (Projects page styles)
│   ├── 📄 style.css                   [LEGACY - unused]
│   │
│   ├── 📁 products/                   [6 Product Stylesheets]
│   │   ├── 📄 glassproducts.css       ↔ glassproducts.html
│   │   ├── 📄 glassblocks.css         ↔ glassblocks.html
│   │   ├── 📄 glassfittings.css       ↔ glassfittings.html
│   │   ├── 📄 perspex.css             ↔ perspex.html
│   │   ├── 📄 polysheet.css           ↔ polysheet.html
│   │   └── 📄 putty.css               ↔ putty.html
│   │
│   └── 📁 services/                   [8 Service Stylesheets]
│       ├── 📄 aluminiumfittings.css   ↔ aluminiumfittings.html
│       ├── 📄 balcony.css             ↔ balcony.html
│       ├── 📄 balustrades.css         ↔ balustrades.html
│       ├── 📄 curtainwalling.css      ↔ curtainwalling.html
│       ├── 📄 mirrorinstallation.css  ↔ mirrorinstallation.html
│       ├── 📄 puttywork.css           ↔ puttywork.html
│       ├── 📄 showercubicles.css      ↔ showercubicles.html
│       └── 📄 skylight.css            ↔ skylight.html
│
├── 📁 js/                             [JAVASCRIPT]
│   └── 📄 script.js                   (Navigation toggle, etc.)
│
└── 📁 assets/                         [IMAGES & MEDIA]
    ├── 📷 logo.svg
    ├── 📷 aluminiumfittings.jpg
    ├── 📷 balcony.jpg
    ├── 📷 balcony1.jpg
    ├── 📷 curtainwalling.jpg
    ├── 📷 facade.jpg
    ├── 📷 glassfacade.jpg
    ├── 📷 glassfacade1.jpg
    ├── 📷 glassfacade2.jpg
    └── [... other images]
```

---

## 🔄 File Relationships & Linking

### Main Pages (Root Level)
```
┌─────────────────────────────────────────┐
│ index.html                              │
├─────────────────────────────────────────┤
│ <link href="../css/base.css">           │
│ <link href="../css/index.css">          │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ about.html                              │
├─────────────────────────────────────────┤
│ <link href="../css/base.css">           │
│ <link href="../css/about.css">          │
└─────────────────────────────────────────┘

[Same pattern for contact.html, services.html, projects.html]
```

### Product Pages (Subfolder Level)
```
┌──────────────────────────────────────────────────┐
│ html/products/glassproducts.html                 │
├──────────────────────────────────────────────────┤
│ <link href="../../css/base.css">                 │
│ <link href="../../css/products/glassproducts.css"│
└──────────────────────────────────────────────────┘

[Same pattern for all 6 product pages]
```

### Service Pages (Subfolder Level)
```
┌──────────────────────────────────────────────────┐
│ html/services/balcony.html                       │
├──────────────────────────────────────────────────┤
│ <link href="../../css/base.css">                 │
│ <link href="../../css/services/balcony.css">     │
└──────────────────────────────────────────────────┘

[Same pattern for all 8 service pages]
```

---

## 📊 Content by Page Type

### 🏠 Main Pages (5)
- index.html - Home with hero, services, slider
- about.html - Company info, team, mission
- contact.html - Contact form, location info
- services.html - All services overview
- projects.html - Portfolio showcase

### 🛍️ Product Pages (6)
- glassproducts.html - Glass product details
- glassblocks.html - Glass blocks product
- glassfittings.html - Glass fittings product
- perspex.html - Perspex product
- polysheet.html - Polysheet product
- putty.html - Putty product

### 🔧 Service Pages (8)
- aluminiumfittings.html - Aluminium service
- balcony.html - Balcony service
- balustrades.html - Balustrades service
- curtainwalling.html - Curtain walling service
- mirrorinstallation.html - Mirror installation service
- puttywork.html - Putty work service
- showercubicles.html - Shower cubicles service
- skylight.html - Skylight service

---

## 🎨 CSS Hierarchy & Cascade

```
┌─────────────────────────────┐
│ base.css (Global)           │
│ ─────────────────────────── │
│ • Reset styles              │
│ • Common header/nav/footer  │
│ • Reusable components       │
│ • All media queries         │
│ • Typography standards      │
└─────────────────────────────┘
          ▼ (inherited by all)
┌─────────────────────────────────────────────────────────────┐
│ Page-Specific CSS                                           │
├─────────────────────────────────────────────────────────────┤
│ + index.css (hero, slider, services)                         │
│ + about.css (team layout, mission)                           │
│ + contact.css (form styling)                                 │
│ + services.css (service cards)                               │
│ + projects.css (project gallery)                             │
│ + products/*.css (product details, specs)                    │
│ + services/*.css (service details, process)                  │
└─────────────────────────────────────────────────────────────┘
```

---

## ✅ Harmony Verification

### ✓ HTML/CSS Directory Parity
```
html/ structure          →  css/ structure
────────────────────────────────────────────
index.html             ↔  index.css
about.html             ↔  about.css
contact.html           ↔  contact.css
services.html          ↔  services.css
projects.html          ↔  projects.css

products/
  glassproducts.html   ↔  products/glassproducts.css
  glassblocks.html     ↔  products/glassblocks.css
  [etc...]

services/
  aluminiumfittings.html ↔ services/aluminiumfittings.css
  balcony.html         ↔  services/balcony.css
  [etc...]
```

### ✓ File Count Verification
- HTML Files: 5 main + 6 products + 8 services = **19 ✓**
- CSS Files: 1 base + 5 pages + 6 products + 8 services = **20 ✓** (+ 1 legacy = 21)
- Subfolders: products ✓, services ✓ (both identical in html/ and css/)

### ✓ Responsive Design
- **base.css**: Contains all media queries
- **Page CSS**: Contain additional responsive adjustments
- **Breakpoints**: 
  - Desktop: 1200px+
  - Tablet: 768px
  - Mobile: 480px

### ✓ Naming Conventions
- All HTML and CSS files follow: `[name].html` ↔ `[name].css`
- No mismatches or inconsistencies
- All files properly categorized in subfolders

---

## 🚀 Navigation Web

```
                    ┌──────────────┐
                    │ index.html   │
                    │ (Home)       │
                    └──────┬───────┘
                   /       |        \
                  /        |         \
        ┌────────▼──┐  ┌───▼────┐  ┌─▼──────────┐
        │services   │  │projects │  │about, etc  │
        │.html      │  │.html    │  │            │
        └────┬──────┘  └─────────┘  └────────────┘
             │
      ┌──────┴──────────────────────────┐
      │                                 │
   Services Pages               Services Overview
   (8 detailed pages)           (services.html)
   
   ├─ aluminiumfittings.html
   ├─ balcony.html
   ├─ balustrades.html
   ├─ curtainwalling.html
   ├─ mirrorinstallation.html
   ├─ puttywork.html
   ├─ showercubicles.html
   └─ skylight.html
```

---

## 📋 Checklist for Maintenance

- [ ] All HTML files have viewport meta tag
- [ ] All HTML files link base.css first, then page-specific CSS
- [ ] All CSS file names match HTML file names
- [ ] All paths use correct relative references (../ or ../../)
- [ ] All new pages follow the naming convention pattern
- [ ] Media queries present in all CSS files
- [ ] Header and footer consistent across pages
- [ ] Navigation menu working and links valid
- [ ] Mobile menu toggle functional
- [ ] Images path verified (../assets/ or ../../assets/)

---

## 🎯 Key Harmonization Achievements

✅ **Identical Structure**: html/ and css/ folders mirror each other  
✅ **Proper Naming**: Every page has corresponding stylesheet  
✅ **Responsive Design**: Full mobile, tablet, desktop support  
✅ **Clean Organization**: Subfolders for products and services  
✅ **Semantic HTML**: All pages properly structured  
✅ **Meta Tags**: Charset and viewport on every page  
✅ **CSS Separation**: Global styles (base.css) + page-specific  
✅ **Correct Paths**: All relative paths working correctly  

---

**Project Status**: ✅ **100% HARMONIZED**
**Last Updated**: 2024
**Tensorgrid Ltd - Professional Engineering Solutions**
