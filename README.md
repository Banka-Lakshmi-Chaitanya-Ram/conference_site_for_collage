# ICVLIC Conference Website

Official academic conference website for **ICVLIC**, hosted by:
**Vignan's Foundation for Science, Technology & Research (Deemed to be University)**  
*Vadlamudi, Guntur, Andhra Pradesh, India - 522213*

---

## 1. Quick Start

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### Installation & Development
```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev
# Server runs at http://localhost:5173/

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## 2. Institutional Assets & Roles

All uploaded institutional images have been incorporated locally into the project:

| Asset | Local Path | Component Usage | Role in Design |
| :--- | :--- | :--- | :--- |
| **University Emblem** | `public/assets/branding/vfstr-logo.png` | `Header.tsx`, `Footer.tsx` | Official institutional branding mark in navigation & footer |
| **Main Campus Building** | `public/assets/campus/campus-main.jpg` | `HeroSection.tsx` | Primary hero showcase depicting the main entrance & administration building |
| **Second Campus Building** | `public/assets/campus/campus-building.jpg` | `AboutUniversity.tsx`, `VenueSection.tsx` | Architectural showcase of campus academic complex with dome |
| **Full Institutional Logo** | `public/assets/branding/vfstr-full-logo.png` | `public/assets/branding/` | Official institutional lockup with statutory accreditation text |

See [public/assets/README.md](public/assets/README.md) for full asset placement guidelines.

---

## 3. Central Configuration (`src/config/conferenceConfig.ts`)

All conference data, committee rosters, dates, registration fees, and venue details are strictly decoupled from the UI code.

To update any conference information when faculty or organizers provide details, edit `src/config/conferenceConfig.ts`:

- **Conference Details**: `conference.fullName`, `conference.theme`, `conference.dates.displayDates`
- **Submission & Registration Portals**: `conference.portals.submissionUrl`, `conference.portals.registrationUrl`
- **Deadlines**: `deadlines` array (supports label, date, status, notes)
- **Call for Papers**: `callForPapers.guidelines`, `callForPapers.tracks`
- **Speakers**: `speakers` array (supports local portraits, bio, talk title, abstract modal)
- **Committees**: `committees` array (Chief Patron, Patrons, General Chairs, Organizing Chairs, TPC)
- **Program Timetable**: `program.days` array (Day 1, Day 2 sessions, times, room allocations)
- **Registration Fees**: `registration.tiers` array (Faculty, Students, Industry, Attendees)
- **Venue & Travel**: `venue.address`, `venue.transportation` (Air, Rail, Road)
- **Secretariat Contacts**: `contact.primaryEmail`, `contact.officeLocation`

---

## 4. Checklist: Adding Confirmed Data Later

When faculty organizers finalize official details, follow this checklist:

- [ ] **Official Conference Name**: Update `conference.fullName` in `conferenceConfig.ts`.
- [ ] **Dates**: Update `conference.dates.displayDates` and `deadlines` array.
- [ ] **Submission Portal**: Paste Microsoft CMT / EasyChair link into `conference.portals.submissionUrl`.
- [ ] **Keynote Speaker Portraits**: Save JPEG/PNG images to `public/assets/speakers/speaker-01.jpg` and update `speakers` array.
- [ ] **Conference Logo (if designed)**: Save to `public/assets/branding/icvlic-logo.png` and update `conference.branding.conferenceLogo`.
- [ ] **Committee Roster**: Add confirmed names and institutional affiliations under `committees`.
- [ ] **Detailed Program**: Fill in paper presentation sessions and room numbers under `program.days`.
- [ ] **Registration Gateway**: Add official university payment link under `conference.portals.registrationUrl`.

---

## 5. Technology Stack & Design Standard

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailored Academic CSS Design System (`src/index.css`) with institutional Oxford Navy, official Vignan Crimson, and Playfair Display serif typography.
- **Icons**: Lucide React
- **Accessibility**: Full semantic HTML5 landmarks (`<header>`, `<main>`, `<section>`, `<footer>`), keyboard accessible drawer and modals, ARIA expanded/controls attributes, and `prefers-reduced-motion` compliance.

---

## 6. Live Deployment (GitHub Pages)

The website is set up for continuous deployment via **GitHub Actions** directly to **GitHub Pages**:

- **Live URL**: `https://banka-lakshmi-chaitanya-ram.github.io/conference_site_for_collage/`
- **Workflow**: Defined in `.github/workflows/deploy.yml`
- **Automatic Triggers**: Every push to the `main` branch automatically builds and publishes the latest production bundle.

### Enabling GitHub Pages on the Repository (One-Time Setup):
1. Navigate to your repository on GitHub: `https://github.com/Banka-Lakshmi-Chaitanya-Ram/conference_site_for_collage`
2. Click **Settings** (top navigation tab).
3. In the left sidebar, click **Pages** (under *Code and automation*).
4. Under **Build and deployment** > **Source**, choose **GitHub Actions**.
5. Once selected, the workflow will automatically deploy and host your conference site live!

