'use client';

import { useEffect, useState } from "react";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    useEffect(()=>{
        const currentTheme = localStorage.getItem('theme');
        if(currentTheme === 'dark'){
            document.documentElement.classList.add('dark')
            setTheme('dark')
        }
    },[])

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
        localStorage.setItem('theme', newTheme);
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors">
            <button onClick={toggleTheme} className="p-2 text-sm border rounded mt-4 ml-4">
                {theme === 'light' ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
            {children}
       </div>
    )
}
