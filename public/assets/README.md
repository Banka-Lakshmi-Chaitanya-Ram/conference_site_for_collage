# Conference Asset Guide & Directory Structure

This directory houses all institutional photographs, branding marks, and speaker portraits used by the **ICVLIC** conference website.

The website is designed to use **local assets only** without any reliance on third-party stock CDNs or external image hosts. All images load with automatic fallback handling via the `<LocalImage />` component.

---

## 1. Current Active Institutional Assets

The following real university assets have been incorporated into the website:

| File Path | Description | Usage in Website |
| :--- | :--- | :--- |
| `public/assets/branding/vfstr-logo.png` | Official University Emblem (Shield) | Main Navigation Header, Page Footer, Favicon |
| `public/assets/branding/vfstr-full-logo.png` | Official University Logo Lockup | University & Institutional Identity sections |
| `public/assets/campus/campus-main.jpg` | Main University Building & Entrance | Hero Section visual showcase |
| `public/assets/campus/campus-building.jpg` | Second University Building (Dome) | About the University & Venue sections |

---

## 2. Directory Structure & Future Asset Slots

```text
public/assets/
├── README.md                           <- This documentation file
├── branding/
│   ├── vfstr-logo.png                  <- [Active] University shield emblem
│   ├── vfstr-full-logo.png             <- [Active] Full university logo lockup
│   └── icvlic-logo.png                 <- [Optional Slot] Conference-specific logo (when supplied by organizers)
├── campus/
│   ├── campus-main.jpg                 <- [Active] Main campus entrance & building
│   ├── campus-building.jpg             <- [Active] Second campus building with dome
│   ├── auditorium.jpg                  <- [Optional Slot] Main auditorium photograph
│   └── conference-venue.jpg            <- [Optional Slot] Conference hall / seminar hall photograph
├── speakers/
│   ├── speaker-01.jpg                  <- Keynote speaker 1 portrait (recommended: 400x400 to 600x600 px)
│   ├── speaker-02.jpg                  <- Keynote speaker 2 portrait
│   └── speaker-03.jpg                  <- Keynote speaker 3 portrait
└── partners/
    ├── partner-01.png                  <- Technical co-sponsor / institutional partner logo
    └── partner-02.png                  <- Academic partner logo
```

---

## 3. How to Update Conference Configuration

All paths and metadata are centrally managed in:
`src/config/conferenceConfig.ts`

### Adding a Keynote Speaker:
1. Place the portrait in `public/assets/speakers/speaker-01.jpg`
2. In `src/config/conferenceConfig.ts`, locate `speakers` array and update:
   ```ts
   {
     id: "speaker-1",
     name: "Dr. Full Name",
     role: "Professor & Chair",
     institution: "Institution / University Name",
     photo: "/assets/speakers/speaker-01.jpg",
     talkTitle: "Title of Keynote Address",
     abstract: "Full abstract text...",
     bio: "Short biographical note..."
   }
   ```

### Adding Conference Branding or Venue Photos:
- If a dedicated ICVLIC logo is created, save it to `public/assets/branding/icvlic-logo.png` and update `conference.branding.conferenceLogo` in `src/config/conferenceConfig.ts`.
- If campus auditorium photos are available, save to `public/assets/campus/auditorium.jpg` and update `venue.auditoriumImage` in `src/config/conferenceConfig.ts`.

---

## 4. Fallback Handling
If an image file is missing, the `<LocalImage />` component renders a tasteful, accessible institutional placeholder with an appropriate icon and label, avoiding any broken browser images.
