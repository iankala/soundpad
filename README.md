# 🎵 Soundpad

A React-based soundpad application demonstrating the use of **refs** (`useRef`) to trigger and manage audio playback events.

## About

Soundpad is an interactive sound board where users can click buttons to play sounds. The project is specifically built to showcase how React's `useRef` hook can be used to access and control DOM elements — in this case, audio elements — without causing unnecessary re-renders.

## What You'll Learn

- How to use `useRef` to reference DOM elements in React
- Controlling audio playback imperatively with refs
- The difference between refs and state for DOM interactions
- Handling multiple audio sources in a component-based architecture

## Tech Stack

- **React** — UI and component logic
- **Vite** — Build tool and dev server
- **JavaScript / JSX**
- **CSS**

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/iankala/soundpad.git
   cd soundpad
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser at `http://localhost:5173`

## Project Structure

```
soundpad/
├── src/            # React components and audio logic
├── public/         # Audio files and static assets
├── index.html      # Entry point
└── vite.config.js  # Vite configuration
```

## Key Concept

```jsx
// Using useRef to control audio without re-rendering
const audioRef = useRef(null)

const playSound = () => {
  audioRef.current.currentTime = 0
  audioRef.current.play()
}

return <audio ref={audioRef} src="sound.mp3" />
```

## Author

**Ian Kala** — [GitHub](https://github.com/iankala)
