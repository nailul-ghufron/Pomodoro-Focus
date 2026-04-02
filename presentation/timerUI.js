export class TimerUI {
    constructor() {
        this.elements = {};
    }

    /**
     * Inisialisasi elemen-elemen DOM
     */
    init() {
        this.elements = {
            minutes: document.getElementById('timer-minutes'),
            seconds: document.getElementById('timer-seconds'),
            statusLabel: document.getElementById('timer-status'),
            modeIndicator: document.getElementById('mode-indicator'),
            startBtn: document.getElementById('start-btn'),
            pauseBtn: document.getElementById('pause-btn'),
            resetBtn: document.getElementById('reset-btn'),
            modeTabs: document.querySelectorAll('.mode-tab'),
            sessionCount: document.getElementById('completed-sessions-count'),
            progressBar: document.getElementById('daily-progress'),
            appContainer: document.querySelector('.app-container')
        };
    }

    /**
     * Menghubungkan event listener ke controller
     * @param {Object} handlers - Berisi fungsi handler untuk tiap aksi
     */
    bindEvents(handlers) {
        this.elements.startBtn.addEventListener('click', handlers.onStart);
        this.elements.pauseBtn.addEventListener('click', handlers.onPause);
        this.elements.resetBtn.addEventListener('click', handlers.onReset);

        this.elements.modeTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                handlers.onModeChange(tab.dataset.mode);
            });
        });
    }

    /**
     * Update tampilan timer
     * @param {number} time - Detik tersisa
     */
    updateDisplay(time) {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        
        this.elements.minutes.textContent = minutes.toString().padStart(2, '0');
        this.elements.seconds.textContent = seconds.toString().padStart(2, '0');
        
        // Update Title Browser (pajangan tab)
        document.title = `${minutes}:${seconds.toString().padStart(2, '0')} - Pomodoro Focus`;
    }

    /**
     * Update state visual mode
     * @param {string} mode - 'pomodoro', 'short-break', 'long-break'
     */
    updateMode(mode) {
        // Reset active tabs
        this.elements.modeTabs.forEach(tab => {
            tab.classList.toggle('active', tab.dataset.mode === mode);
        });

        // Update indikator teks
        const modeLabels = {
            'pomodoro': 'Time to focus!',
            'short-break': 'Time for a break',
            'long-break': 'Long break. Refuel!'
        };
        this.elements.modeIndicator.textContent = modeLabels[mode];

        // Ubah warna latar (via class body) sesuai mode
        const isBreak = mode.includes('break');
        document.body.classList.toggle('break-active', isBreak);
    }

    /**
     * Update state tombol dan label status
     * @param {string} status - 'idle', 'running', 'paused', 'finished'
     */
    showStatus(status) {
        this.elements.statusLabel.textContent = status.toUpperCase();

        if (status === 'running') {
            this.elements.startBtn.classList.add('hidden');
            this.elements.pauseBtn.classList.remove('hidden');
        } else {
            this.elements.startBtn.classList.remove('hidden');
            this.elements.pauseBtn.classList.add('hidden');
        }

        if (status === 'finished') {
            this.elements.statusLabel.style.color = 'var(--secondary-color)';
        } else {
            this.elements.statusLabel.style.color = 'var(--text-secondary)';
        }
    }

    /**
     * Update info sesi harian
     * @param {number} count - Jumlah sesi
     * @param {number} progress - Persentase progress (0-100)
     */
    updateProgress(count, progress) {
        this.elements.sessionCount.textContent = count;
        this.elements.progressBar.style.width = `${progress}%`;
    }
}
