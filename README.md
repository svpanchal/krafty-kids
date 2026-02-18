# Krafty Kids Website

This repository contains the source code and content for the Krafty Kids website.

The site is designed to be fast, secure, and easy to update. Most updates only require editing a single file.

Project email:
[kraftykidsteam@gmail.com](mailto:kraftykidsteam@gmail.com)

Live website:
[https://kraftykids.org/](https://kraftykids.org/)

Development preview:
[https://krafty-kids.pages.dev/](https://krafty-kids.pages.dev/)

---

# How to Add or Update Events (For Krafty Kids Team)

You do not need programming knowledge to update events.

All events are controlled by this file:

```
src/data/events.json
```

When you update this file and click "Commit changes", the website updates automatically.

No manual publishing is required.

---

## Step 1: Open the repository

Go to the GitHub repository:

(https://github.com/svpanchal/krafty-kids)

Log in to your GitHub account if needed.

---

## Step 2: Open the events file

Navigate to:

```
src → data → events.json
```

Click on `events.json`

Click the pencil icon in the upper right to edit.

---

## Step 3: Copy an existing event

Each event looks like this:

```
{
  "title": "Creatures You Can Feel: A Clay Animal Workshop",
  "startDate": "2026-02-28",
  "time": "2:00–4:00 PM PST",
  "location": "Vista Center for the Blind and Visually Impaired",
  "address": "101 N Bascom Ave, San Jose, CA 95128",
  "mapsUrl": "https://maps.google.com/...",
  "partnerLogo": "/images/partners/vista-center.png",
  "type": "session",
  "summary": "A sensory-rich clay workshop supporting creative expression.",
  "ctaLabel": "Sign up to volunteer",
  "ctaUrl": "#contact",
  "isUpcoming": true
}
```

To add a new event:

* Copy an existing event block
* Paste it below the last event
* Edit the information
* Make sure there is a comma between events

---

## Step 4: Update the event information

Edit these fields:

| Field      | Description                                   |
| ---------- | --------------------------------------------- |
| title      | Name of the event                             |
| startDate  | Event date (format: YYYY-MM-DD)               |
| time       | Time of event                                 |
| location   | Venue name                                    |
| address    | Full address                                  |
| mapsUrl    | Google Maps link                              |
| summary    | Short description                             |
| ctaLabel   | Button text (example: "Sign up")              |
| ctaUrl     | Signup link                                   |
| isUpcoming | true for future events, false for past events |

You usually do not need to change:

* partnerLogo
* type

---

## Step 5: Save your changes

Scroll down and click:

Commit changes

The website will update automatically within about 30 to 60 seconds.

---

# How Updates Work and How to Check Them

There are two versions of the website:

Development preview:
[https://krafty-kids.pages.dev/](https://krafty-kids.pages.dev/)

Live public website:
[https://kraftykids.org/](https://kraftykids.org/)

When you update events.json and commit changes:

1. GitHub saves your changes
2. Cloudflare rebuilds the website automatically
3. The updated version goes live

This usually takes about 30 to 60 seconds.

---

## How to confirm your changes are live

Step 1: Wait about 60 seconds

Step 2: Visit the preview site:
[https://krafty-kids.pages.dev/](https://krafty-kids.pages.dev/)

Confirm your changes appear.

Step 3: Visit the live site:
[https://kraftykids.org/](https://kraftykids.org/)

Confirm your changes appear there too.

---

## If you do not see your changes

Refresh the page.

On Mac:
Press Command + Shift + R

On Windows:
Press Ctrl + Shift + R

This forces your browser to load the newest version.

---

## How to mark an event as past

Change:

```
"isUpcoming": true
```

to:

```
"isUpcoming": false
```

---

## Important Safety Rules

Please be careful to:

* Keep quotation marks intact
* Keep commas between events
* Do not delete brackets [ ] or { }
* Copy existing events instead of creating new ones from scratch

If something goes wrong, you can fix the file and click Commit changes again.

---

# Project Infrastructure

Project email:
[kraftykidsteam@gmail.com](mailto:kraftykidsteam@gmail.com)

Source code repository:
GitHub

Hosting and deployment:
Cloudflare Pages

Domain registrar:
Porkbun

DNS and domain routing:
Cloudflare

Form handling service:
Formspree

---

## How deployment works (simple explanation)

```
You edit events.json
→ You click Commit changes
→ Cloudflare rebuilds the website automatically
→ The updated website goes live
```

No manual publishing is required.

---

# Forms and Contact Submissions

Forms on the website are handled by Formspree.

Form submissions are securely delivered to:

[kraftykidsteam@gmail.com](mailto:kraftykidsteam@gmail.com)

No server maintenance is required.

---

# File Locations

Important files and directories:

```
src/data/events.json
```

Controls all event listings.

```
public/images/partners/
```

Contains partner organization logos.

```
src/pages/
```

Contains main website pages.

```
src/components/
```

Contains reusable site components.

---

# Technical Overview (For Developers)

Framework: Astro

Hosting: Cloudflare Pages

Deployment: Automatic via GitHub integration

Domain registrar: Porkbun

DNS provider: Cloudflare

Form backend: Formspree

Architecture: Static site with automatic deployment

---

# Local Development (Optional)

Only needed for developers.

Install dependencies:

```
npm install
```

Run development server:

```
npm run dev
```

---

# Support

For questions, access, or help:

[kraftykidsteam@gmail.com](mailto:kraftykidsteam@gmail.com)
