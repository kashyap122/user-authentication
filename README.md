
# 🛡️ Full-stack reusable user authentication system

## 🧪 Tech Stack & Libraries

- Frontend: React.js, Vite, Axios, React Router Dom, TailwindCSS
- Backend: Node.js, Express.js, Passport.js
- Auth: JWT, Bcrypt, Google OAuth 2.0
- DB: MongoDB or MongoDB Atlas (with Mongoose)

---

## 📌 Features

- ✅ JWT Authentication
- ✅ Google OAuth Login/Register
- ✅ Register/Login using email & password
- ✅ MongoDB User Storage
- ✅ Environment-based config
- ✅ Session-based Google auth

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/user-authentication.git
cd user-authentication
```

---

### 2. Backend Setup (Node.js + Express)

```bash
cd server
npm install
```

#### Create `.env` file in `/server`:

```
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
JWT_SECRET=your-own-jwt-secret
MONGO_URI=your-mongodb-uri
```

#### Run Backend:

```bash
node server.js
```

---

### 3. Frontend Setup (React + Vite)

```bash
cd client
npm install
npm run dev
```
---

## 🔐 Authentication Flow

### 🔸 Email & Password

- `POST /api/auth/register`: Creates a new user and hashes password using `bcrypt`.
- `POST /api/auth/login`: Logs in with email/password and returns a JWT.
- Token is stored in local storage and used for protected routes.

### 🔹 Google OAuth 2.0

- Frontend triggers `/api/auth/google` → Google OAuth → redirects to `/dashboard?token=xyz`.
- Google user info is saved to DB if not already present.
- JWT is generated and passed to frontend via redirect.

---

## 🔌 API Routes Overview

| Method | Route                      | Description                     |
|--------|---------------------------|---------------------------------|
| POST   | /api/auth/register        | Register with email/password   |
| POST   | /api/auth/login           | Login with email/password      |
| GET    | /api/auth/google          | Start Google OAuth login       |
| GET    | /api/auth/google/callback| Handle Google OAuth callback   |

---

## 👨‍💻 Developer

**Kashyap Chauhan**  
📧 kashyapchauhan122@gmail.com  
🔗 [GitHub](https://github.com/kashyap122) | [LinkedIn](https://www.linkedin.com/in/kashyapchauhan/)

---

## 📜 License

This project is licensed under the MIT License.
