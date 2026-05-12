/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Để hỗ trợ Dark Mode sau này
  theme: {
    extend: {
      colors: {
        // Bạn có thể định nghĩa màu chủ đạo cho brand cá nhân ở đây
        primary: "#0a0a0a",
        accent: "#3b82f6",
      },
    },
  },
  plugins: [],
}