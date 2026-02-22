<div align="center">

<!-- Animated Top Banner -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=220&section=header&text=🩸%20Red%20Cross%20Connect&fontSize=52&fontColor=fff&animation=twinkling&fontAlignY=38&desc=Blood%20Donor%20Finder%20System&descAlignY=58&descSize=22" width="100%"/>

<!-- Animated Typing SVG -->
<img src="https://readme-typing-svg.demolab.com/?font=Fira+Code&weight=700&size=26&duration=2000&pause=800&color=FF1744&background=00000000&center=true&vCenter=true&width=750&height=60&lines=%F0%9F%A9%B8+Connecting+Lives+Through+Blood;%E2%9D%A4%EF%B8%8F+Find+Donors+in+Seconds;%F0%9F%9A%A8+Emergency+Blood+Finder;%F0%9F%92%89+Real-Time+Donor+Network;%F0%9F%8C%8D+Save+Lives+Near+You;%F0%9F%94%B4+One+App.+One+Click.+One+Life+Saved." alt="Typing SVG" />
<br/>

<!-- Tech Badges -->
<img src="https://img.shields.io/badge/Frontend-React.js-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
<img src="https://img.shields.io/badge/Backend-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/Framework-Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
<img src="https://img.shields.io/badge/Database-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white"/>

<br/><br/>

<img src="https://img.shields.io/badge/Auth-JWT-FF6B35?style=for-the-badge&logo=jsonwebtokens&logoColor=white"/>
<img src="https://img.shields.io/badge/Security-bcrypt.js-6C3483?style=for-the-badge&logo=letsencrypt&logoColor=white"/>
<img src="https://img.shields.io/badge/ODM-Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white"/>
<img src="https://img.shields.io/badge/Build-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"/>

<br/><br/>

<img src="https://img.shields.io/badge/Status-Live%20🟢-brightgreen?style=for-the-badge"/>
<img src="https://img.shields.io/badge/License-MIT-FF1744?style=for-the-badge"/>
<img src="https://img.shields.io/github/stars/Saikaranam-70/RedCrossConnectFrontEnd?style=for-the-badge&color=FF1744"/>
<img src="https://komarev.com/ghpvc/?username=Saikaranam-70&label=👁️%20Views&color=FF1744&style=for-the-badge" />

</div>

---

<div align="center">
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">
</div>

## 🚨 Why Red Cross Connect?

<div align="center">

```
🩸  Every 2 seconds, someone in the world needs blood.
🏥  Every day, 40,000+ units of blood are needed.
⏳  Delayed response costs lives.
💡  Red Cross Connect solves this — instantly.
```

</div>

---

<div align="center">
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">
</div>

## 📌 About The Project

> **Red Cross Connect** is a full-stack emergency blood donor platform that bridges the critical gap between blood donors and recipients using **location-based real-time search**.

<table>
<tr>
<td width="50%">

### 🔴 The Problem
- 🚑 Finding blood donors in emergencies is **slow & chaotic**
- 📞 No centralized, reliable donor database
- ⏳ Delayed response = **loss of precious lives**
- 🌍 Geographical mismatch between donors & recipients

</td>
<td width="50%">

### ✅ Our Solution
- ⚡ **Instant** location-based donor discovery
- 🔍 Filter by **blood group + city/location**
- 📲 **One-click** call or notification to donors
- 🌐 Real-time, scalable donor network

</td>
</tr>
</table>

---

<div align="center">
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">
</div>

## 🏗️ System Architecture

```mermaid
graph TB
    style A fill:#FF1744,color:#fff,stroke:#B71C1C
    style H fill:#47A248,color:#fff,stroke:#2E7D32
    style E fill:#FF6B35,color:#fff,stroke:#E64A19
    style D fill:#339933,color:#fff,stroke:#1B5E20

    A[⚛️ React Frontend - Vite SPA]
    A --> B[🧩 Component State]
    B --> C[🔗 Axios HTTP Client]

    C -->|REST API Calls| D[🟢 Node.js + Express.js Server]

    D --> E[🔐 JWT Auth Middleware]
    D --> F[🛣️ Route Handlers]
    D --> G[🛡️ bcrypt Password Layer]

    F --> H[(🍃 MongoDB Database)]
    H --> I[🔷 Mongoose ODM Schemas]

    D --> J[📍 Location Filter Service]
    D --> K[🔔 Email / SMS Notifications]
    D --> L[📤 File Uploads - Multer]
```

---

<div align="center">
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">
</div>

## ✨ Features

<div align="center">

| 🔥 Feature | 📝 Description |
|:---:|:---|
| 🩸 **Donor Registration** | Register as a blood donor with profile, blood group & location |
| 🔍 **Smart Search** | Find donors by blood group, city, or area instantly |
| 📞 **Instant Connect** | Call or message a donor with a single click |
| 🔐 **JWT Authentication** | Secure login/signup with token-based sessions |
| 🛡️ **Password Security** | Credentials hashed with bcrypt.js |
| 📍 **Location-Based Filter** | Find the nearest available donors in your area |
| 📊 **Donor Dashboard** | Manage availability, profile, and donation records |
| 🔔 **Notifications** | Email/SMS alerts for urgent blood requests |
| 📱 **Responsive UI** | Fully optimized for mobile & desktop |
| ☁️ **File Uploads** | Profile picture & document upload support |

</div>

---

<div align="center">
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">
</div>

## 🛠️ Tech Stack

<div align="center">

### 🎨 Frontend
<img src="https://skillicons.dev/icons?i=react,js,html,css,vite" />

### ⚙️ Backend
<img src="https://skillicons.dev/icons?i=nodejs,express,mongodb,postman" />

### 🔐 Security & Auth
> **JWT** (JSON Web Tokens) · **bcrypt.js** · **Middleware-protected Routes**

### 🚀 Tools & DevOps
<img src="https://skillicons.dev/icons?i=git,github,vscode,vercel" />

</div>

---

<div align="center">
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">
</div>

## 📂 Project Structure

<table>
<tr>
<td width="50%">

### 🔹 Frontend
```
RedCrossConnectFrontEnd/
 ├── 📁 src/
 │    ├── 🧩 components/
 │    ├── 📄 pages/
 │    ├── ⚙️ services/
 │    └── 🎨 assets/
 ├── 📄 index.html
 ├── 📦 package.json
 ├── 📦 package-lock.json
 ├── ⚡ vite.config.js
 └── 🚫 .gitignore
```

</td>
<td width="50%">

### 🔸 Backend
```
RedCrossConnectBackend/
 ├── 🎮 controllers/
 │    ├── authController.js
 │    └── donorController.js
 ├── 🛡️ middlewares/
 │    └── authMiddleware.js
 ├── 📦 models/
 │    ├── User.js
 │    └── Donor.js
 ├── 🛣️ routes/
 │    ├── authRoutes.js
 │    └── donorRoutes.js
 ├── 📤 uploads/
 ├── 🔑 .env
 ├── 🚀 index.js
 ├── 📦 package.json
 └── 📦 package-lock.json
```

</td>
</tr>
</table>

---

<div align="center">
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">
</div>

## ⚙️ Installation & Setup

### ✅ Prerequisites
```bash
Node.js  >= 16.x
MongoDB  >= 5.x  (local or MongoDB Atlas)
npm      >= 8.x
```

### 1️⃣ Clone & Run Frontend
```bash
git clone https://github.com/Saikaranam-70/RedCrossConnectFrontEnd.git
cd RedCrossConnectFrontEnd
npm install
npm run dev
```

### 2️⃣ Clone & Run Backend
```bash
git clone https://github.com/Saikaranam-70/RedCrossConnectBackend.git
cd RedCrossConnectBackend
npm install
node index.js
```

---

<div align="center">
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">
</div>

## 🔑 Environment Variables

### Backend — `.env`
```env
# Server
PORT=5000

# MongoDB
MONGO_URI=mongodb://localhost:27017/redcross_connect
# OR Atlas:
# MONGO_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/redcross_connect

# JWT
JWT_SECRET=your_super_secret_key
JWT_EXPIRES_IN=7d

# Email (Nodemailer / EmailJS - Optional)
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

# Twilio SMS (Optional)
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE=+1234567890
```

### Frontend — `.env`
```env
VITE_API_BASE_URL=http://localhost:5000/api
```

---
<!--
<div align="center">
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">
</div>

## 🔗 API Endpoints

<div align="center">

| Method | Endpoint | Auth | Description |
|:---:|:---|:---:|:---|
| `POST` | `/api/auth/register` | ❌ | 🆕 Register as donor or recipient |
| `POST` | `/api/auth/login` | ❌ | 🔐 Login & receive JWT token |
| `GET` | `/api/donors/search` | ✅ | 🔍 Search donors by blood group + city |
| `GET` | `/api/donors/:id` | ✅ | 👤 Get specific donor profile |
| `PUT` | `/api/donors/availability` | ✅ | 🔄 Toggle donor availability status |
| `POST` | `/api/request/notify` | ✅ | 🔔 Send urgent blood request notification |
| `POST` | `/api/upload` | ✅ | 📤 Upload profile picture |

</div>

--->

<div align="center">
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">
</div>

## 🍃 MongoDB Schema Overview

```javascript
// Donor / User Schema (Mongoose)
{
  name:        String,    // Full name
  email:       String,    // Unique email
  password:    String,    // bcrypt hashed
  bloodGroup:  String,    // A+, B+, O-, AB+, etc.
  phone:       String,    // Contact number
  city:        String,    // Location for filtering
  isAvailable: Boolean,   // Donor availability toggle
  profilePic:  String,    // Uploaded image path (uploads/)
  createdAt:   Date       // Auto timestamp
}
```

---

<div align="center">
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">
</div>

## 🎯 Future Enhancements

```
📱  React Native Mobile App (Android & iOS)
🗺️  Google Maps Integration for live donor map
🏥  Hospital & Blood Bank Portal
📊  Analytics Dashboard — blood demand heatmap
🤖  AI-based Smart Donor Matching Algorithm
🔔  Firebase Push Notifications
☁️  Cloud Deployment — Render / Railway / AWS
🩺  Donation History & Health Records Tracker
```

---

<div align="center">
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">
</div>

## 📊 GitHub Stats

<div align="center">
<img src="https://github-readme-stats-sigma-five.vercel.app/api?username=Saikaranam-70&show_icons=true&theme=radical" />
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=Saikaranam-70&theme=radical&hide_border=true&ring=FF1744&fire=FF6B35&currStreakLabel=FF1744&background=0d1117" height="165"/>
</div>

<div align="center">
  <img src="https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=Saikaranam-70&layout=compact&theme=radical&hide_border=true"/>
</div>

---

<div align="center">
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">
</div>

## 🤝 Contributing

Contributions are what make the open source community amazing! 🙌

```bash
1. 🍴  Fork the project
2. 🌿  git checkout -b feature/AmazingFeature
3. 💾  git commit -m 'Add some AmazingFeature'
4. 📤  git push origin feature/AmazingFeature
5. 🔃  Open a Pull Request
```

---

## 👨‍💻 Author

<div align="center">

<img src="https://avatars.githubusercontent.com/Saikaranam-70" width="120px" style="border-radius:50%;"/>

### **Sai Karanam**
*Full Stack Developer | React · Node.js · MongoDB*

[![GitHub](https://img.shields.io/badge/GitHub-Saikaranam--70-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Saikaranam-70)
[![Frontend Repo](https://img.shields.io/badge/Frontend-Repo-61DAFB?style=for-the-badge&logo=react)](https://github.com/Saikaranam-70/RedCrossConnectFrontEnd)
[![Backend Repo](https://img.shields.io/badge/Backend-Repo-339933?style=for-the-badge&logo=node.js)](https://github.com/Saikaranam-70/RedCrossConnectBackend)

</div>

---

## 🐍 Contribution Graph

<p align="center">
  <img src="https://raw.githubusercontent.com/Saikaranam-70/Saikaranam-70/output/github-contribution-grid-snake.svg" />
</p>


---

<div align="center">

## ⭐ Show Some Love

**If this project inspired you or helped you, please give it a ⭐**

*Every star motivates me to build more life-saving tools 🩸*

<br/>

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=130&section=footer&animation=twinkling" width="100%"/>

</div>
