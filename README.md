# Calendar Application

![Calendar App Screenshot](./screenshot.png)

A full-stack calendar application with event management capabilities.

## Features
- **Interactive Calendar View**: Month, week, and day views
- **Event Management**: Create, edit, and delete events
- **Responsive Design**: Works on all device sizes
- **Attractive UI**: Gradient borders, animations, and modern styling
- **Real-time Updates**: Events appear immediately after creation

## Tech Stack
### Frontend
- React
- Vite
- Tailwind CSS
- Day.js
- Axios

### Backend
- Node.js
- Express
- REST API

## Installation
1. Clone the repository:
```bash
2. Install dependencies for both frontend and backend:
```
cd calendar-app/frontend && npm install
cd ../backend && npm install
```
3. Start both servers:
```
# In frontend directory
npm run dev

# In backend directory
npm start
```
## Configuration
1. Create a .env file in the backend directory:
```
PORT=3001
```
2. Create a .env file in the frontend directory:
```
VITE_API_BASE_URL=http://localhost:3001/api
```
## Project Structure
```
calendar-app/
├── backend/          # Backend server code
│   ├── src/          # Source files
│   ├── data/         # JSON data storage
│   └── package.json  # Backend dependencies
└── frontend/         # Frontend React app
    ├── src/          # React components
    ├── public/       # Static assets
    └── package.json  # Frontend dependencies
```
## Available Scripts
### Frontend
- npm run dev - Start development server
- npm run build - Build for production
- npm run preview - Preview production build
### Backend
- npm start - Start backend server
- npm run dev - Start in development mode with nodemon
## Screenshots
Add your screenshots here after taking them.

## License
MIT

```

To use this README:
1. Save this content to `README.md` in your project 
root
2. Replace placeholder URLs with your actual 
repository URL
3. Add actual screenshots by replacing `screenshot.
png`
4. Customize any sections as needed for your 
specific implementation
```
