# Active Context: Live Resume Template

## Current State

**Template Status**: ✅ Customized for Moataz Mohamed (Senior Android Engineer) + GitHub Pages Deployment Configured

The resume has been fully customized and configured for GitHub Pages deployment with static export.

## Recently Completed

- [x] Profile customized with Moataz Mohamed's info
- [x] 7 work experience entries added (including internships)
- [x] Skills updated for Android development (Kotlin, Java, MVVM, etc.)
- [x] Education added (Bachelor of Computer Science, October 6 University)
- [x] 8 portfolio projects added (FC Köln, Alltours, OLB Banking, Klivvr, Kashat, GIG, Azura, Step One)
- [x] Languages updated (Arabic - Native, English - Professional)
- [x] GitHub Pages deployment configured (static export)
- [x] Profile photo updated to use GitHub avatar URL

## Current User Profile

**Name**: Moataz Mohamed  
**Title**: Senior Android Engineer  
**Location**: Giza, Egypt  
**Experience**: 7+ years in Android development  
**Key Skills**: Kotlin, Java, Android SDK, MVVM, MVP, Jetpack Compose  
**Portfolio**: 8 apps on Google Play Store

## Components Implemented

| Component | File | Status |
|-----------|------|--------|
| Profile Header | `src/components/resume/ProfileHeader.tsx` | ✅ Complete |
| Summary | `src/components/resume/Summary.tsx` | ✅ Complete |
| Experience Timeline | `src/components/resume/ExperienceTimeline.tsx` | ✅ Complete |
| Skills Section | `src/components/resume/SkillsSection.tsx` | ✅ Complete |
| Education Section | `src/components/resume/EducationSection.tsx` | ✅ Complete |
| Certifications | `src/components/resume/CertificationsSection.tsx` | ✅ Complete |
| Languages | `src/components/resume/LanguagesSection.tsx` | ✅ Complete |
| Portfolio Grid | `src/components/portfolio/ProjectGrid.tsx` | ✅ Complete |
| Contact Form | `src/components/contact/ContactForm.tsx` | ✅ Complete |
| Header | `src/components/layout/Header.tsx` | ✅ Complete |
| Footer | `src/components/layout/Footer.tsx` | ✅ Complete |
| Side Nav | `src/components/layout/SideNav.tsx` | ✅ Complete |

## Current Focus

The resume is deployed and live at `https://moatazhamada.github.io/resume-cv/`. The site is fully functional with all styling working correctly.

## Known Considerations

- Profile image uses GitHub avatar URL (`https://github.com/moatazhamada.png`)
- Project thumbnails expect `/projects/` images → Add screenshots (optional)
- Contact form won't work on static hosting (needs backend service)
- API routes removed for static export compatibility
- **basePath**: Set to `/resume-cv` for GitHub Pages subdirectory deployment

## Deployment Configuration

- **Platform**: GitHub Pages
- **URL**: `https://moatazhamada.github.io/resume-cv/`
- **Build Output**: Static HTML (`out/` directory)
- **Workflow**: `.github/workflows/deploy.yml`
- **Profile Photo**: GitHub avatar URL
- **basePath**: `/resume-cv` (required for CSS/assets to load correctly)

## Pending Improvements (Optional)

- [ ] Add project screenshots
- [ ] Add more theme color presets
- [ ] Add testimonials/recommendations section
- [ ] Integrate contact form with external service (Formspree, etc.)

## Session History

| Date | Activity |
|------|----------|
| 2026-02-14 | Fixed CSS not loading - added basePath `/resume-cv` to next.config.ts |
| 2026-02-14 | Configured GitHub Pages deployment with static export |
| 2026-02-14 | Customized resume for Moataz Mohamed - Senior Android Engineer |
| 2026-01-22 | Memory bank updated to match .kilocode standard structure |
