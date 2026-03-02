# Planora 📅✅

A modern task management application built with **MEVN** stack (MongoDB, Express, Vue.js, Node.js) and **Pinia** for state management. Features calendar integration, real-time updates, and OAuth authentication.


<img width="1349" height="681" alt="Planora Calendar" src="https://github.com/user-attachments/assets/6a74323d-f5be-470b-9b04-e204afb7ca13" />

<img width="1357" height="684" alt="Planora Dashboard" src="https://github.com/user-attachments/assets/0490eb29-72ed-4fc3-b7be-ae82b4ec20f9" />

## Features

- **Task Management**: ✅ Create, organize, and prioritize tasks with ease
- **Calendar Integration**: 📅 View tasks on an interactive calendar interface
- **Real-time Updates**: 🔄 Instant synchronization across all devices

## Installation

### Frontend

```bash
cd frontend
npm run dev
```

### Backend

```bash
cd server
npm run dev
```

## Environment Variables

Create a `.env` file in the server directory:

```bash
PORT=5000
SERVER_URL=http://localhost:5000
CLIENT_URL=http://localhost:5173
MONGO_URI=your_mongodb_connection_string

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# GitHub OAuth
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

**Note**: Replace placeholder values with your actual credentials from Google Cloud Console and GitHub OAuth settings.
