export class PomodoroService {
    constructor() {
        this.modes = {
            'pomodoro': 25 * 60,
            'short-break': 5 * 60,
            'long-break': 15 * 60
        };
        
        this.mode = 'pomodoro';
        this.time = this.modes[this.mode];
        this.status = 'idle'; // idle | running | paused | finished
        this.interval = null;
        this.onTickCallback = null;
    }

    /**
     * Memulai timer
     * @param {Function} callback - Fungsi untuk update UI tiap detik
     */
    start(callback) {
        if (this.status === 'running') return;
        
        this.status = 'running';
        this.onTickCallback = callback;
        
        this.interval = setInterval(() => {
            this.tick();
        }, 1000);
    }

    /**
     * Pause timer
     */
    pause() {
        if (this.status !== 'running') return;
        
        this.status = 'paused';
        clearInterval(this.interval);
    }

    /**
     * Reset timer ke awal sesuai mode saat ini
     */
    reset() {
        this.status = 'idle';
        clearInterval(this.interval);
        this.time = this.modes[this.mode];
    }

    /**
     * Mengatur mode timer
     * @param {string} mode - 'pomodoro' | 'short-break' | 'long-break'
     */
    setMode(mode) {
        if (!this.modes[mode]) return;
        
        this.mode = mode;
        this.reset();
    }

    /**
     * Logika tiap detik
     */
    tick() {
        if (this.time > 0) {
            this.time--;
            
            if (this.onTickCallback) {
                this.onTickCallback(this.time);
            }
        } else {
            this.finish();
        }
    }

    /**
     * Ketika waktu habis
     */
    finish() {
        this.status = 'finished';
        clearInterval(this.interval);
        
        if (this.onTickCallback) {
            this.onTickCallback(0);
        }
    }

    /**
     * Mendapatkan waktu yang diformat (MM:SS)
     */
    getFormattedTime() {
        const minutes = Math.floor(this.time / 60);
        const seconds = this.time % 60;
        return {
            minutes: minutes.toString().padStart(2, '0'),
            seconds: seconds.toString().padStart(2, '0')
        };
    }
}
