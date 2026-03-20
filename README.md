# 🚀 SVTC Web Page

This project is a React application bootstrapped with Create React App and deployed using Docker.

---

## 🌐 Live Demo

🔗 https://svtc-web-page.vercel.app/

---

## 📦 Tech Stack

* React (Create React App)
* Docker
* Nginx (for production serving)

---

## 🛠️ Available Scripts

In the project directory, you can run:

### ▶️ Development Mode

```bash
npm start
```

* Runs the app locally
* Open: http://localhost:3000

---

### 🧪 Run Tests

```bash
npm test
```

---

### 🏗️ Build for Production

```bash
npm run build
```

* Creates optimized build in `build/` folder

---

## 🐳 Docker Setup

### 🧱 Build Docker Image

```bash
docker build -t react-app .
```

---

### ▶️ Run Docker Container

```bash
docker run -d -p 4500:80 react-app
```

---

### 🌐 Access Application

Open in browser:

```
http://<your-vm-ip>:4500
```

---

## 📂 Project Structure

```
.
├── Dockerfile
├── package.json
├── public/
├── src/
```

---

## ⚠️ Common Issues

### ❌ Port already in use

```bash
sudo lsof -i :4500
```

---

### ❌ Container stops immediately

Make sure your Dockerfile contains:

```dockerfile
CMD ["nginx", "-g", "daemon off;"]
```

---

## 📄 .dockerignore (Recommended)

```
node_modules
build
.git
.env*
```

---

## 🧠 Key Concepts

* **Docker Image** → Blueprint of the app
* **Docker Container** → Running instance
* **Nginx** → Serves React production build

---

## 👨‍💻 Author

**Bhoomi**
