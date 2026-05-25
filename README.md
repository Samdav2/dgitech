
# TusomePlus — Frontend Prototype (Phase 1)

This repository contains a Next.js + TypeScript + Tailwind frontend prototype implementing Phase 1 of the TusomePlus project brief.

Key features implemented (Phase 1 scope):
- Homepage (hero, feature cards, glassmorphism UI)
- Role selection login page (pre-fill role, mock email/password flow)
- Basic authentication context (mocked in-memory)
- Subscription access control (point-of-access checks with `SubscriptionGuard`)
- Daily Free Assessment popup (device-scoped UI-only trial, Admin toggle)
- Contact page, Pricing page, Admin control panel (UI-only)

Important: This is a frontend prototype with mock logic. Replace `AuthContext` and client-side storage with real backend APIs for production (auth, subscriptions, billing, content).

Quick start

1. Install dependencies (Node.js 18+ recommended):

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

Pages to test
- `/` — Homepage (includes Free Trial popup after 5–8s or on 40% scroll)
- `/login` — Role selection and login (select a role then continue)
- `/lessons` — Protected: requires an active subscription (UI-only)
- `/assessments` — Protected: requires active subscription + ASSESSMENTS add-on
- `/pricing` — Pricing UI (configurable values)
- `/contact` — Contact form (stores submissions in localStorage)
- `/admin-control` — Admin UI (toggle free trial, view basic analytics). To access, login via `/login` and select role `Admin`.

Manual test checklist
- Login as different roles using `/login` and confirm role appears in header.
- Visit `/lessons` while logged out — you should see a "Please login" prompt.
- Login as a user (any role) — the mock login creates an active subscription by default; revisit `/lessons` to verify access allowed.
- Visit `/assessments` — it requires the ASSESSMENTS add-on; you can simulate enabling it by calling `updateSubscription` from `AuthContext` in dev tools or modify the mock login to set `assessmentsAddOn: 'active'`.
- On `/` or `/login`, wait ~6s or scroll past 40% to see the Free Trial popup. Starting the trial sets a device-scoped daily flag in `localStorage`.
- Login as `Admin` and open `/admin-control` to toggle the free trial and view stored contact submissions.

Configurable values
- All pricing values and free-trial keys are stored in `src/shared/config.ts` so they can be updated without changing component code.

Developer notes
- UI assets (Three.js device mockup, Lottie TusoBot) are not included to keep the prototype lightweight. Add them into the hero as progressive enhancements with static image fallbacks.
- Security & backend requirements (password hashing, OTP, device fingerprint server-side tracking, RBAC, subscription checks) are noted throughout the code but must be implemented on the server side before production.

Troubleshooting
- If `npm run dev` fails with missing packages, run `npm install` first.
- Ensure Node.js 18+ is installed.

Next steps
- Implement server API for auth, subscriptions, and TusoTeacher onboarding (Phase 2).
- Add Three.js / Lottie assets and optimise animations to keep the bundle under 200KB for mobile.
- Add tests and CI for build verification.

# dgitech
