🎯 1. DESIGN PHILOSOPHY (WAJIB PAHAM DULU)

Project kamu itu:

Logic-heavy (timer, state, mode)
Interaction-driven (start, pause, reset)
Butuh fokus (Pomodoro = deep work)

👉 Jadi arah desainnya:

Minimalist + Focused + Feedback-driven UI

Bukan UI rame.

🧠 2. STRUKTUR UI BERDASARKAN ARCHITECTURE

Kita mapping ke Presentation Layer:

🧱 UI Sections
1. Header
App name: Pomodoro Focus
Mode indicator (Pomodoro / Break)
Optional: settings icon
2. Main Timer (CORE)
Circular timer / digital timer
Time besar (25:00)
Status label (Running / Paused)
3. Controls
Start
Pause
Reset
4. Mode Switch
Pomodoro
Short Break
Long Break
5. Session Info (opsional tapi powerful)
Completed sessions hari ini
Progress bar
🎨 3. VISUAL STYLE (BIAR KELIHATAN MAHAL)
Theme:

👉 “Soft Focus Productivity”

Color Palette
Background: Dark navy / soft black
Primary: Red soft (Pomodoro feel)
Secondary: Green (break mode)
Accent: Blue glow
Typography
Timer: Monospace / digital feel
UI text: Clean sans-serif (Inter / SF Pro)
UI Style
Glassmorphism ringan
Soft shadow
Rounded (border-radius besar)
📱 4. RESPONSIVE DESIGN (WAJIB)
Desktop
Centered layout
Timer besar di tengah
Controls horizontal
Tablet
Sedikit dipadatkan
Timer tetap dominan
Mobile
Full screen focus
Tombol besar (thumb-friendly)
Bottom controls
🧩 5. UX FLOW (ALIGN DENGAN SYSTEM DESIGN)
Saat Start:
Tombol berubah jadi Pause
Timer animasi jalan
Warna berubah (feedback visual)
Saat Pause:
Timer freeze
UI sedikit redup
Saat Finish:
Notifikasi visual
Optional sound
⚡ 6. MICRO INTERACTION (INI YANG BIKIN LEVEL PRO)
Hover → tombol glow
Klik → scale down sedikit
Timer tick → smooth transition
Mode switch → color transition
🧠 7. DESIGN SYSTEM (BIAR SCALABLE)

Component:

Button (primary, secondary)
Timer Display
Mode Tabs
Card Container