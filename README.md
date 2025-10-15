# 🚀 Modern React Dashboard — Frontend + Docker Learning Project

A **frontend-only React + Vite** dashboard built to explore **Docker containerization**, focusing on how Docker **volumes**, **image building**, and **container mapping** work in real-world frontend development environments.

---

## 🧠 Project Purpose

This project was created to **understand Docker containerization for frontend development** — including how to:

- Containerize a React app using a custom `Dockerfile`
- Use **Docker volumes** to map source code for live development
- Run and manage frontend containers with **Docker commands**
- Build and serve production-ready static assets

It’s also a clean starting point for building **React dashboards**, **admin panels**, or **analytics UIs**.

> 🧩 **Note:** This project is **frontend-only** — there’s no backend or API integration.  
> The main goal is to learn and practice **Docker containerization concepts** in a React environment.

---

## ⚙️ Tech Stack

| Category        | Technology       |
|-----------------|------------------|
| Frontend        | React (Vite)     |
| Package Manager | npm              |
| Build Tool      | Vite             |
| Containerization| Docker           |

---
Dashboard Preview
<img width="1906" height="960" alt="image" src="https://github.com/user-attachments/assets/45eec2e9-cbcb-43c0-bcb1-8b42c2c6b95f" />

Docker Preview
<img width="1905" height="815" alt="image" src="https://github.com/user-attachments/assets/71da8b94-7ab3-4033-b0bd-c25238165a09" />

## 🐳 Docker Setup & Containerization

### 🏗️ Build the Docker Image

```bash
docker build -t modern-react-dashboard .

▶️ Run the Container Using Docker Volumes
docker run --name vite-container2 -p 3000:5173 --rm -v /app/node_modules -v ${PWD}:/app -e CHOKIDAR_USEPOLLING=true vite-image2

💻 Local Development (Without Docker)
# Clone the repo
git clone https://github.com/TharushaJM/modern-react-dashboard.git
cd modern-react-dashboard

# Install dependencies
npm install

# Start the dev server
npm run dev






