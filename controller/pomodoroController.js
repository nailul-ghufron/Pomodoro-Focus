export class PomodoroController {
    /**
     * @param {PomodoroService} service 
     * @param {TimerUI} ui 
     * @param {Storage} storage 
     */
    constructor(service, ui, storage) {
        this.service = service;
        this.ui = ui;
        this.storage = storage;
        
        // State sesi (Sederhana untuk demo: 4 sesi = 100%)
        this.sessionData = {
            completedSessions: 0,
            lastUpdated: new Date().toLocaleDateString()
        };
    }

    /**
     * Inisialisasi controller
     */
    init() {
        this.ui.init();
        this.loadSessionData();
        
        // Bind event handlers
        this.ui.bindEvents({
            onStart: () => this.handleStart(),
            onPause: () => this.handlePause(),
            onReset: () => this.handleReset(),
            onModeChange: (mode) => this.handleModeChange(mode)
        });

        // Set awal tampilan
        this.ui.updateDisplay(this.service.time);
        this.ui.updateMode(this.service.mode);
        this.ui.showStatus(this.service.status);
    }

    /**
     * Memulai timer
     */
    handleStart() {
        this.service.start((time) => this.handleTick(time));
        this.ui.showStatus('running');
    }

    /**
     * Pause timer
     */
    handlePause() {
        this.service.pause();
        this.ui.showStatus('paused');
    }

    /**
     * Reset timer
     */
    handleReset() {
        this.service.reset();
        this.ui.updateDisplay(this.service.time);
        this.ui.showStatus('idle');
    }

    /**
     * Pindah mode (Pomodoro/Break)
     * @param {string} mode 
     */
    handleModeChange(mode) {
        this.service.setMode(mode);
        this.ui.updateDisplay(this.service.time);
        this.ui.updateMode(mode);
        this.ui.showStatus('idle');
    }

    /**
     * Logic tiap detik dikirim dari service
     * @param {number} time 
     */
    handleTick(time) {
        this.ui.updateDisplay(time);
        
        if (time === 0) {
            this.handleFinish();
        }
    }

    /**
     * Ketika timer selesai
     */
    handleFinish() {
        this.ui.showStatus('finished');
        
        // Jika mode Pomodoro selesai, hitung sesi
        if (this.service.mode === 'pomodoro') {
            this.sessionData.completedSessions++;
            this.updateSessionData();

            // Sederhana: Bunyi notif (opsional)
            this.playNotification();
        }
    }

    /**
     * Update & Simpan progress sesi ke storage
     */
    updateSessionData() {
        this.storage.saveSession(this.sessionData);
        
        // Hitung progress bar (Target: 4 sesi sehari)
        const progress = Math.min((this.sessionData.completedSessions / 4) * 100, 100);
        this.ui.updateProgress(this.sessionData.completedSessions, progress);
    }

    /**
     * Ambil data lama dari storage
     */
    loadSessionData() {
        const saved = this.storage.getSession();
        const today = new Date().toLocaleDateString();

        if (saved && saved.lastUpdated === today) {
            this.sessionData = saved;
        } else {
            // Reset jika hari berbeda
            this.sessionData.completedSessions = 0;
            this.sessionData.lastUpdated = today;
        }

        this.updateSessionData();
    }

    /**
     * Notifikasi bunyi (menggunakan AudioContext agar tidak butuh file eksternal)
     */
    playNotification() {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.5);

        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 0.5);
    }
}
