import { useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Đọc từ localStorage, mặc định là 'dark'
    return (localStorage.getItem('theme') as Theme) || 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
};
