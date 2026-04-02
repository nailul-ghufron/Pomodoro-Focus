export class Storage {
    constructor() {
        this.STORAGE_KEY = 'pomodoro_session_data';
    }

    /**
     * Menyimpan data sesi ke localStorage
     * @param {Object} data - Objek data (e.g. { completedSessions: 5, lastUpdated: '2026-04-02' })
     */
    saveSession(data) {
        try {
            const jsonData = JSON.stringify(data);
            localStorage.setItem(this.STORAGE_KEY, jsonData);
        } catch (error) {
            console.error('Gagal menyimpan ke localStorage:', error);
        }
    }

    /**
     * Mengambil data sesi dari localStorage
     * @returns {Object|null}
     */
    getSession() {
        try {
            const data = localStorage.getItem(this.STORAGE_KEY);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error('Gagal mengambil data dari localStorage:', error);
            return null;
        }
    }

    /**
     * Menghapus semua data sesi
     */
    clearSession() {
        localStorage.removeItem(this.STORAGE_KEY);
    }
}
