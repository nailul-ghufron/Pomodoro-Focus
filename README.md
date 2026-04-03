# 🎯 Pomodoro Focus

> **Minimalist. Focused. Productivity Redefined.**

**Pomodoro Focus** is a premium web-based productivity tool designed with a "Soft Focus" aesthetic. Built on a clean, layered architectural foundation, it provides a distraction-free environment for deep work using the Pomodoro technique.

![Initial UI](https://nailul-ghufron.github.io/Pomodoro-Focus/)

## ✨ Features

- **Soft Focus UI**: A modern, glassmorphic dark theme designed to reduce eye strain and promote focus.
- **Three Strategic Modes**:
  - **Pomodoro (25m)**: For intense deep work.
  - **Short Break (5m)**: For quick mental refreshes.
  - **Long Break (15m)**: For recharging after several sessions.
- **Smart Session Persistence**: Automatically tracks your daily progress using the browser's LocalStorage.
- **Audio Notifications**: Gentle audio cues using the Web Audio API to alert you when sessions finish.
- **Responsive Design**: Seamless experience across Desktop, Tablet, and Mobile devices.

## 🏗️ Architecture (Clean Layered Pattern)

The project follows a strict **Layered Architecture** (Separation of Concerns) to ensure scalability and maintainability:

1.  **Presentation Layer**: `timerUI.js` manages all DOM manipulations and visual updates.
2.  **Controller Layer**: `pomodoroController.js` orchestrates communication between the UI, business logic, and storage.
3.  **Business Layer**: `pomodoroService.js` contains the core timer logic and mode management independently of the UI.
4.  **Data Layer**: `storage.js` handles data persistence via the browser's storage APIs.

## 🛠️ Technology Stack

- **HTML5**: Semantic structure for accessibility.
- **Vanilla CSS**: Custom styling with Glassmorphism, CSS variables, and fluid typography.
- **Vanilla JavaScript (ESM)**: Modern ES6+ modules for a clean, dependency-free codebase.
- **Google Fonts**: *Inter* for interface and *JetBrains Mono* for precision timing display.

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge, Safari).
- A simple local server (recommended for ES Module support).

### Installation
1.  Clone the repository:
    ```bash
    git clone https://github.com/nailul-ghufron/Pomodoro-Focus.git
    cd pomodoro-focus
    ```
2.  Serve the project:
    ```bash
    # Using http-server
    npx http-server ./ -p 8080
    ```
3.  Open `http://localhost:8080` in your browser.

## 🗂️ Project Structure

```text
pomodoro-app/
├── business/        # Core business logic (Timer engine)
├── controller/      # Orchestrator (Bridges UI and Logic)
├── data/            # Data access layer (LocalStorage)
├── presentation/    # UI manipulation layer
├── styles/          # All CSS styling
├── assets/          # Static assets (icons/screenshots)
├── app.js           # Main entry point
└── index.html       # Application backbone
```

## 📜 Design Principles

Inspired by the design documents in the `Rancangan/` folder:
- **Architecture**: `Rancangan/Architecture.md` (Layered Architecture).
- **Logic Flow**: `Rancangan/Design(class-flow).md` (Interaction Flow).
- **Aesthetics**: `Rancangan/UI-UX.md` (Soft Focus Productivity).

---

Developed with ❤️ by **Nailul**.
#
