# Gateway Cornerstone AI MSP SaaS

## 🚀 Overview
AI-powered IT support + MSP SaaS platform.

Stack:
- React (frontend)
- Node.js + Express (backend)
- MongoDB (database)
- Stripe (billing)
- OpenAI (AI features)

---

## 🛠️ Setup

### 1. Clone Repo
git clone https://github.com/YOUR_USERNAME/gcit-ai-msp-saas.git

---

### 2. Backend Setup
cd server
npm install

Create .env:
MONGO_URI=
JWT_SECRET=
OPENAI_API_KEY=
STRIPE_SECRET_KEY=
CLIENT_URL=http://localhost:3000

Run:
npm run dev

---

### 3. Frontend Setup
cd client
npm install
npm start

---

## 💳 Features
- Authentication (JWT)
- Role-based access (admin/tech/client)
- Ticketing system
- AI ticket classification
- Stripe subscriptions
- Protected routes

---

## 🌐 Deployment

Backend:
- Render / Railway

Frontend:
- Vercel

Database:
- MongoDB Atlas

---

## 📈 Roadmap
- Multi-tenant org system
- Real-time updates
- Mobile app
