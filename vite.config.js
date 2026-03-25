import { defineConfig } from 'vite';

export default defineConfig({
    // 設定 base 為儲存庫名稱，讓 GitHub Pages 能正確讀取資源
    base: '/portfolio/',
    build: {
        outDir: 'dist',
    },
});
