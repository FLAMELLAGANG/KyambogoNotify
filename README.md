# 📢 Kyambogo Notify
### A Web-Based University Notice Board System for Real-Time Campus Communication

> *"Empowering students and staff with the information they need, when they need it."*

---

## 🎓 Project Title

**Kyambogo Notify** — A web-based university notice board system developed as a Final Year Project at the Uganda Institute of Information and Communications Technology (UICT), June 2026.

**Supervised by:** Wansuzi Zubairi  
**Institution:** Uganda Institute of Information and Communications Technology (UICT)  
**Department:** ICT and Engineering  
**Live Demo:** [https://kyambogo-notify.netlify.app](https://kyambogo-notify.netlify.app)

---

## 🚨 Problem & Solution

### The Problem

Kyambogo University — one of Uganda's largest public universities with over **35,000 students** — relies on physical paper notice boards as its primary channel for official campus communication. This system fails students every semester in the following ways:

- 📌 **Inaccessible** — Off-campus students cannot view notices without physically visiting campus
- 📌 **Unreliable** — Notices get torn, covered, or removed before all students can read them
- 📌 **Unverified** — Anyone can post anything with no authentication or approval process
- 📌 **No archive** — Once a notice is removed, there is no historical record
- 📌 **No notifications** — Students are not alerted when urgent notices are posted
- 📌 **Informal workarounds fail** — WhatsApp groups are unmoderated and unstructured; the university website has no dedicated notice section

> A survey conducted during this project revealed that **over 68% of students missed at least one critical university announcement per semester**, leading to examination deregistration, late payment fines, and missed registration windows.

### The Solution

**Kyambogo Notify** is a purpose-built, role-based web platform that centralises, digitises, and democratises official campus communication. It provides:

| Feature | Description |
|---|---|
| 🌐 **24/7 Public Access** | Any student, staff member, or guest can browse notices from any device, anywhere |
| 🔍 **Real-Time Search & Filter** | Full-text search with category filtering across the entire notice archive |
| 📋 **Structured Notice Lifecycle** | Visitor submits → Admin reviews → Approves or Rejects → Notification sent |
| 🔔 **Push Notifications** | Browser-based push alerts for urgent notices |
| 🗞️ **Campus News Magazine** | Dedicated editorial section for campus stories and student journalism |
| 🔐 **Role-Based Access Control** | Three user roles — Guest, Registered Visitor, Administrator — each with appropriate permissions |
| 📱 **Fully Responsive** | Mobile-first design that works on phones, tablets, and desktops |
| 🗃️ **Notice Archive** | Complete searchable history of all published notices |
| 📝 **Community Board** | Lost & Found and Classifieds sections for peer-to-peer notices |

---

## 🗂️ Project Structure

```
kyambogo-notify/
│
├── index.html                  # Entry point — redirects to discover.html
├── discover.html               # Landing page — live stats, urgent notices, schedule
├── home.html                   # Home page — featured notices, category strips
├── notices.html                # Full notice archive with search & filter sidebar
├── campus-news.html            # Campus news magazine
├── notice-detail.html          # Individual notice detail view (dynamic from URL param)
├── visitor-portal.html         # Authenticated user workspace — submit & track notices
├── admin-login.html            # Administrator login page
├── admin-dashboard.html        # Admin control panel — moderation queue & management
│
├── css/
│   ├── tailwind.offline.css    # Offline Tailwind CSS build (custom design tokens)
│   └── responsive.css          # Mobile-first responsive overrides (drop-in)
│
├── js/
│   ├── app.js                  # Core application logic — data store, auth, rendering
│   └── responsive-nav.js       # Mobile hamburger nav & filter toggle (drop-in)
│
├── images/
│   ├── TTL3.jpg                # Hero background image
│   ├── campus2.jpg             # Parallax background
│   └── ...                     # Other static assets
│
├── _redirects                  # Netlify redirect rules (serves discover.html at /)
└── netlify.toml                # Netlify build configuration
```

---

## ⚙️ Setup Instructions

### Prerequisites

Before you begin, make sure you have the following:

- A modern web browser (Google Chrome, Mozilla Firefox, or Safari)
- A code editor — [Visual Studio Code](https://code.visualstudio.com/) is recommended
- A internet connection (for loading Google Fonts and Tailwind CDN on pages that use it)
- *(Optional)* [Git](https://git-scm.com/) for cloning the repository
- *(Optional)* A [Netlify](https://netlify.com) account for deployment

---

### Option A — Run Locally (Simplest Method)

#### Step 1 — Get the Project Files

**If you have Git installed:**
```bash
git clone https://github.com/your-username/kyambogo-notify.git
cd kyambogo-notify
```

**Or download manually:**
1. Go to the GitHub repository page
2. Click the green **Code** button → **Download ZIP**
3. Extract the ZIP file to a folder on your computer

---

#### Step 2 — Open the Project

1. Open **Visual Studio Code**
2. Click **File → Open Folder**
3. Select the `kyambogo-notify` folder you just cloned or extracted

---

#### Step 3 — Install the Live Server Extension (Recommended)

> ⚠️ Opening HTML files directly by double-clicking (`file://` protocol) may cause issues with JavaScript `fetch` calls and URL parameter routing. Using a local server avoids this.

1. In VS Code, open the Extensions panel (`Ctrl+Shift+X` / `Cmd+Shift+X`)
2. Search for **"Live Server"** by Ritwick Dey
3. Click **Install**
4. Once installed, right-click on `index.html` in the file explorer
5. Select **"Open with Live Server"**
6. Your browser will automatically open at `http://127.0.0.1:5500/index.html`
7. You will be immediately redirected to `discover.html` — the site's entry point

---

#### Step 4 — Verify the Setup

Once the site loads, confirm the following are working:

| Check | How to verify |
|---|---|
| ✅ Discover page loads | You should see the live stats strip and notice ticker |
| ✅ Navigation works | Click the nav links — all 8 pages should load correctly |
| ✅ Search works | Go to Notices page, type in the search bar — results update in real time |
| ✅ Sign in works | Click "Continue with Google" — an account picker modal should appear |
| ✅ Admin login works | Go to `admin-login.html`, use credentials below |
| ✅ Mobile nav works | Resize browser to < 768px — a hamburger menu (☰) should appear |

---

#### Step 5 — Log In as Administrator

To access the Admin Dashboard and test moderation features:

1. Navigate to `admin-login.html`
2. Enter the following credentials:

```
Username: kyu_admin
Password: KyU@Notify2026!
```

3. Click **SIGN IN TO DASHBOARD**
4. You will be redirected to `admin-dashboard.html`

> ⚠️ **Security Note:** These credentials are hardcoded for the prototype/demo phase only. In a production deployment, credentials must be stored securely on a backend server with proper hashing (bcrypt) and never exposed in client-side code.

---

### Option B — Deploy to Netlify (Recommended for Sharing)

This project is pre-configured for Netlify deployment with zero build steps required.

#### Step 1 — Create a Netlify Account
Go to [netlify.com](https://netlify.com) and sign up for a free account.

#### Step 2 — Deploy

**Method 1 — Drag and Drop (Easiest):**
1. Log in to Netlify
2. From your Netlify dashboard, find the **"Deploy manually"** section
3. Drag and drop your entire `kyambogo-notify` project folder onto the deploy area
4. Netlify will deploy the site and give you a live URL instantly

**Method 2 — Connect GitHub (Recommended for ongoing updates):**
1. Push your project to a GitHub repository
2. In Netlify, click **"Add new site" → "Import an existing project"**
3. Connect your GitHub account and select your repository
4. Leave build settings blank (no build command needed — this is a static site)
5. Click **"Deploy site"**

#### Step 3 — Verify Redirect Rule
The `_redirects` file and `netlify.toml` in the project root ensure `discover.html` loads at the root URL `/`. No additional configuration is needed — Netlify reads these files automatically on deploy.

---

### Option C — Other Local Server Options

If you prefer not to use VS Code Live Server, any of the following work equally well:

**Python (if Python is installed):**
```bash
# Python 3
cd kyambogo-notify
python -m http.server 8000
# Then open http://localhost:8000 in your browser
```

**Node.js (if Node is installed):**
```bash
npm install -g http-server
cd kyambogo-notify
http-server -p 8000
# Then open http://localhost:8000 in your browser
```

---

## 👤 User Roles & Access

| Role | How to Access | Permissions |
|---|---|---|
| **Guest** | Visit any page without signing in | Browse all public pages, search, filter, view notice detail |
| **Registered Visitor** | Click "Continue with Google" in the nav bar | All guest permissions + submit notices + track submission history + push notifications |
| **Administrator** | Login at `admin-login.html` with admin credentials | All visitor permissions + post/edit/delete any content + approve/reject submissions |

---

## 🧪 Test Accounts (Visitor Mock Google Accounts)

The Google sign-in is simulated for the prototype. Click "Continue with Google" and choose any of the following pre-configured mock accounts:

| Name | Email |
|---|---|
| Faith Nakawooya | faith.nakawooya@students.kyu.ac.ug |
| Ashabz Angel | ashabangel22@gmail.com |
| Brian Mugisha | brian.mugisha@students.kyu.ac.ug |

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
|---|---|---|
| Structure | HTML5 | Page markup and semantic document structure |
| Styling | Tailwind CSS (offline build + CDN) | Utility-first responsive UI styling |
| Styling | Custom responsive.css | Mobile-first responsive overrides |
| Logic | Vanilla JavaScript (ES6) | All dynamic functionality — no frameworks |
| Data | KyuDB (in-memory JS object) | Client-side data store simulating a database |
| Auth | localStorage | Session persistence for visitor and admin login |
| Fonts | Plus Jakarta Sans (Google Fonts) | Primary typeface |
| Icons | Material Symbols (Google) | Icon system throughout the UI |
| Hosting | Netlify (free tier) | Static site hosting with global CDN |

---

## 🌐 Browser Compatibility

| Browser | Supported |
|---|---|
| Google Chrome (desktop & mobile) | ✅ Fully supported |
| Mozilla Firefox | ✅ Fully supported |
| Safari (macOS & iOS) | ✅ Fully supported |
| Microsoft Edge | ✅ Fully supported |
| Internet Explorer | ❌ Not supported |

---

## ⚠️ Known Limitations (Prototype Phase)

- **No real backend** — Data is stored client-side in JavaScript. Refreshing the page resets any non-persisted data.
- **Simulated Google OAuth** — Sign-in uses pre-defined mock accounts, not real Google authentication.
- **Simulated email notifications** — Approval/rejection emails appear as UI toasts, not real emails.
- **No real file uploads** — The attachment field accepts file selection but does not store files.
- **Tailwind CDN + dynamic content** — Tailwind CDN only processes class names at initial page load; all JS-generated elements use inline CSS to work around this limitation.

---

## 🔮 Planned Future Features

- [ ] Node.js / Express backend with PostgreSQL database
- [ ] Real Google OAuth 2.0 authentication
- [ ] Real email delivery via SendGrid API
- [ ] Firebase Cloud Messaging (FCM) for cross-device push notifications
- [ ] AWS S3 / Cloudinary for file attachment storage
- [ ] Progressive Web App (PWA) for mobile home screen installation
- [ ] SMS notifications via Africa's Talking API
- [ ] React Native mobile application (iOS & Android)
- [ ] Multi-language support (English & Luganda)

---

## 📄 License

This project was developed as a Final Year Project at Uganda Institute of Information and Communications Technology (UICT). All rights reserved by the project team, June 2026.

---

## 👥 Project Team

| Name | Registration Number |
|---|---|
| MALANGA BRIAN	 | 2024/DITB/DAY/1834/G |
| ASHABA ANGEL CHERISE | 2024/DITB/DAY/1870/G |
| NAKATUDDE VIVIAN | 2024/DITB/DAY/1389/G |
| AYEBARE JASPER| 2024/DITB/DAY/1459/G |

**Supervisor:** Wansuzi Zubairi  
**Institution:** Uganda Institute of Information and Communications Technology (UICT)  
**Department:** ICT and Engineering  
**Year:** June 2026
