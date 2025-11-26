# TONe Data Explorer

En fullstack applikasjon utviklet for Norsk Polarinstitutt for visualisering, utforsking og nedlasting av data knyttet til dyreobservasjoner i Antarktis. Systemet kombinerer moderne webteknologier med robuste backend-tjenester for å tilby en intuitiv og effektiv plattform for forskere, forvaltere og beslutningstakere.

---

## 🚀 Oversikt

TONe Data Explorer består av:

* **Frontend:** Next.js 14 (Pages Router), React, Tailwind CSS, Framer Motion, Leaflet
* **Backend:** Go (Golang) API for stasjonsdata og CORS-støtte
* **Datakilder:** Stasjonsmetadata + dyreobservasjoner (dummy for nå)
* **Distribusjon:** Docker + Docker Compose

Prosjektet er laget for å være modulært, enkelt å utvide og lett å deploye.

---

## 📂 Prosjektstruktur

```
/project-root
│
├── backend/         # Go API
│   ├── api/
│   ├── models/
│   ├── data/
│   └── main.go
│
├── frontend/        # Next.js-app
│   ├── pages/
│   ├── components/
│   ├── public/
│   ├── styles/
│   └── tailwind.config.js
│
├── docker-compose.yml
└── README.md
```

---

## ▶️ Hvordan kjøre prosjektet

### 1. Start begge tjenester med Docker Compose

```bash
docker compose up --build
```

Frontend kjører på: **[http://localhost:3000](http://localhost:3000)**
Backend kjører på: **[http://localhost:8080](http://localhost:8080)**

### 2. Kjøre frontend lokalt uten Docker

```bash
cd frontend
npm install
npm run dev
```

### 3. Kjøre backend lokalt uten Docker

```bash
cd backend
go run main.go
```

---

## 🗺️ Funksjoner

### ✔ Interaktivt kart (Leaflet)

* Viser alle observasjonsstasjoner
* Klikk på en stasjon for detaljer og flere visninger

### ✔ Stasjonsdetaljer

* Navn, koordinater og beskrivelse
* Lagringspunkter for fremtidige datautvidelser

### ✔ Tidsseriediagrammer

* Viser dummy-data (klar for ekte API-integrasjon)

### ✔ Last ned data som CSV

* Gjør forskningsarbeid enkelt

### ✔ Dataforespørsler

* Skjema for forespørsler om datasett og metadata

### ✔ Moderne UI

* Animert navbar
* Hero-seksjon
* Delt layout (kart + sidebar)
* Framer Motion-animasjoner

---

## 🧱 Teknologier

**Frontend:**

* Next.js 14 (Pages Router)
* React
* Tailwind CSS
* Framer Motion
* Leaflet

**Backend:**

* Go (Golang)
* net/http
* Custom CORS middleware

**Devops:**

* Docker
* Docker Compose

---

## 📌 Neste steg (roadmap)

* Legge til ekte dyreobservasjonsdata
* API-endepunkter for tidsserier
* Role-based access (RBAC)
* Admin-dashboard
* Mer avanserte visualiseringer (Recharts, Vega-Lite)
* Responsiv forbedring for mobil

---

## 🧪 Testing

Frontend: Jest / React Testing Library (kan legges til)
Backend: Go-tests + mocks (kan legges til)

---

## 📄 Lisens

MIT-lisens eller institusjonens valg.

---

## 👤 Utvikler

Nana Kwame Amagyei
Fullstack-utvikler | Dataforsker | UI/UX-entusiast
Prosjekt for **Norsk Polarinstitutt – TONe**

---
## 👤 skjermbilder
<img width="1372" height="751" alt="Screenshot 2025-11-26 at 03 34 45" src="https://github.com/user-attachments/assets/fbdeda70-1c45-480b-a4d1-98bf15dcdba0" />

<img width="1282" height="746" alt="Screenshot 2025-11-26 at 03 32 19" src="https://github.com/user-attachments/assets/ace546e5-5492-464d-b9b9-ac092db57a02" />
