🧱 1. Skema Arsitektur (High-Level)
[ Presentation Layer (UI) ]
        ↓
[ Business Logic Layer ]
        ↓
[ Data Layer ]

👉 Aliran hanya ke bawah (one-way dependency)

🔄 2. Skema Alur Interaksi (Real Case Pomodoro)

Misal user klik tombol Start:

User klik Start
        ↓
UI (timerUI.js)
        ↓
PomodoroService.start()
        ↓
Timer berjalan (logic)
        ↓
UI update tampilan waktu
        ↓
UI simpan ke storage
        ↓
Data Layer (localStorage)
🧩 3. Skema Detail Per Layer
🔹 Presentation Layer (UI)

Tanggung jawab:

Menampilkan waktu
Menangkap input user
Memanggil business logic
[ UI ]
- tombol Start / Pause / Reset
- display waktu (25:00)

Aksi:
→ panggil PomodoroService
→ update tampilan
→ panggil Data Layer (opsional)
🔹 Business Layer (Logic)

Tanggung jawab:

Mengatur waktu
State (running, pause, selesai)
Rules Pomodoro
[ PomodoroService ]
- start()
- pause()
- reset()

State:
- time
- interval

Tidak tahu:
❌ UI
❌ localStorage
🔹 Data Layer

Tanggung jawab:

Simpan & ambil data
[ Storage ]
- saveSession()
- getSession()

Media:
- localStorage / database

Tidak tahu:
❌ UI
❌ logic
🔁 4. Skema Dependency (WAJIB DIPATUHI)
Presentation → Business → Data

🚫 Dilarang:

Business → UI
Data → Business
🗂️ 5. Skema Struktur Folder
pomodoro-app/
│
├── presentation/
│   └── timerUI.js
│
├── business/
│   └── pomodoroService.js
│
├── data/
│   └── storage.js
│
├── styles/
│   └── style.css
│
└── index.html
🧠 6. Skema Hubungan File (Visual Simple)
index.html
   ↓
timerUI.js (Presentation)
   ↓
pomodoroService.js (Business)
   ↓
storage.js (Data)
⚡ 7. Skema State Pomodoro (Bonus biar lebih matang)
[ IDLE ]
   ↓ start
[ RUNNING ]
   ↓ pause
[ PAUSED ]
   ↓ resume
[ RUNNING ]
   ↓ selesai
[ FINISHED ]
🔥 Insight Penting (Jangan dilewatkan)

Skema ini kelihatan simpel, tapi efeknya besar:

Kamu tidak akan bikin kode berantakan
Mudah nambah fitur (notif, mode, statistik)
Bisa evolve ke Clean Architecture