# TONe Data Explorer — Prototype

A minimal, extensible web portal for the Troll Observing Network (TONe), built with:
- **Frontend**: Next.js 14 (Pages Router), TypeScript, Tailwind CSS
- **Backend**: Go (HTTP API)
- **Tooling**: Docker, Docker Compose, Python data gen

✅ Runs locally on macOS  
✅ Dockerized  
✅ Ready for Vercel  

## Quick Start (Local Dev)

\`\`\`bash
# Generate mock data
python scripts/generate_data.py

# Terminal 1: Start backend
cd backend && go run main.go

# Terminal 2: Start frontend
cd frontend && npm install && npm run dev
\`\`\`

→ Frontend: http://localhost:3000  
→ Backend: http://localhost:8080/api/stations

## Docker

\`\`\`bash
docker-compose up --build
\`\`\`
