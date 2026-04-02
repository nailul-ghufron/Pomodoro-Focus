🧱 1. Class Design (Struktur Kelas)

Kita tetap pakai Layered Architecture, jadi class dibagi per layer.

🔹 Business Layer (INTI SISTEM)
🧠 PomodoroService
Class: PomodoroService

Properties:
- time: number
- mode: string (pomodoro | short_break | long_break)
- status: string (idle | running | paused)
- interval: object

Methods:
- start(callback)
- pause()
- reset()
- setMode(mode)
- tick()

👉 Penjelasan:

start() → mulai timer
tick() → jalan tiap detik
callback → kirim update ke UI
🔹 Data Layer
💾 Storage
Class: Storage

Methods:
- saveSession(data)
- getSession()
- clearSession()

👉 Hanya urus penyimpanan (localStorage)

🔹 Presentation Layer
🎨 TimerUI
Class: TimerUI

Properties:
- displayElement
- startButton
- pauseButton
- resetButton

Methods:
- init()
- bindEvents()
- updateDisplay(time)
- showStatus(status)
🎮 Controller (opsional tapi bagus)

👉 Ini yang menghubungkan UI ↔ Business

Class: PomodoroController

Properties:
- service: PomodoroService
- storage: Storage
- ui: TimerUI

Methods:
- handleStart()
- handlePause()
- handleReset()
- handleTick(time)

👉 Ini bikin kode kamu lebih clean dan scalable

🧩 2. Relasi Antar Class
TimerUI → Controller → PomodoroService → Storage

👉 Artinya:

UI tidak langsung ke service
Semua lewat controller
🔄 3. Flow Utama (Saat User Klik Start)
▶️ Flow: Start Timer
User klik Start
   ↓
TimerUI (event click)
   ↓
Controller.handleStart()
   ↓
PomodoroService.start()
   ↓
setInterval jalan tiap detik
   ↓
PomodoroService.tick()
   ↓
Controller.handleTick(time)
   ↓
UI.updateDisplay(time)
   ↓
Storage.saveSession()
⏸ Flow: Pause
User klik Pause
   ↓
UI
   ↓
Controller.handlePause()
   ↓
PomodoroService.pause()
   ↓
Status berubah → paused
🔄 Flow: Reset
User klik Reset
   ↓
Controller.handleReset()
   ↓
PomodoroService.reset()
   ↓
UI.updateDisplay()
   ↓
Storage.clearSession()
🧠 4. State Design (PENTING)
IDLE → RUNNING → PAUSED → RUNNING → FINISHED

👉 Jangan asal ubah state, harus jelas transisinya.

🧪 5. Contoh Interaksi Nyata (biar kebayang)

Misal waktu berjalan:

PomodoroService.tick()
   ↓
time = time - 1
   ↓
callback(time)
   ↓
Controller.handleTick()
   ↓
UI.updateDisplay()
⚠️ Kesalahan yang harus kamu hindari
❌ UI langsung ke Service
button.onclick = () => service.start()

👉 Harus lewat controller

❌ Logic di UI
if (time <= 0) { ... }

👉 Ini harus di service

❌ Tidak pakai state

👉 Akibatnya:

bisa start berkali-kali
bug aneh
🔥 Insight (ini penting banget)

Dengan design ini:

Kamu bisa ganti UI tanpa ubah logic
Bisa tambah fitur tanpa merusak sistem
Bisa evolve ke Clean Architecture dengan mudah