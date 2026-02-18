# Krafty Kids Website

This repository contains the source code and content for the Krafty Kids website.

The site is designed to be fast, secure, and easy to update. Most updates only require editing a single file.

Project email:
[kraftykidsteam@gmail.com](mailto:kraftykidsteam@gmail.com)

---

# How to Add or Update Events (For Krafty Kids Team)

You do not need programming knowledge to update events.

All events are controlled by this file:

```
src/data/events.json
```

When you update this file and click "Commit changes", the website updates automatically within about 30 to 60 seconds.

No manual publishing is required.

---

## Step 1: Open the repository

Go to the GitHub repository:

PASTE REPOSITORY LINK HERE

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

## Important Safety Rules

Please be careful to:

* Keep quotation marks intact
* Keep commas between events
* Do not delete brackets [ ] or { }
* Copy existing events instead of creating new ones from scratch

If something goes wrong, you can edit the file again and fix it.

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

## How deployment works

Deployment is automatic. No manual publishing is required.

Process:

```
Edit events.json
→ Commit changes on GitHub
→ Cloudflare detects changes
→ Cloudflare rebuilds the site
→ Updated website goes live
```

This typically takes about 30 to 60 seconds.

---

# Forms and Contact Submissions

Contact and signup forms on the website are handled by Formspree.

Form submissions are securely processed by Formspree and delivered to the project email:

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

Architecture: Static site (no traditional backend required)

---

# Local Development (Optional)

Only needed for developers working on the site.

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

For access, questions, or support:

[kraftykidsteam@gmail.com](mailto:kraftykidsteam@gmail.com)
