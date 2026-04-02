import { PomodoroService } from './business/pomodoroService.js';
import { TimerUI } from './presentation/timerUI.js';
import { Storage } from './data/storage.js';
import { PomodoroController } from './controller/pomodoroController.js';

/**
 * Entry point untuk aplikasi Pomodoro Focus
 * Inisialisasi semua layer dan hubungkan dengan controller.
 */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Inisialisasi komponen-komponen utama
    const service = new PomodoroService();
    const ui = new TimerUI();
    const storage = new Storage();

    // 2. Hubungkan kaitan-kaitan melalui controller
    const controller = new PomodoroController(service, ui, storage);

    // 3. Jalankan aplikasi
    controller.init();
});
