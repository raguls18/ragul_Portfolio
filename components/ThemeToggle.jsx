// components/ThemeToggle.jsx
"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check if user has a theme preference in localStorage
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme')
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

      if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsDark(true)
        document.documentElement.classList.add('dark')
      }
    }
  }, [])

  const toggleTheme = () => {
    if (typeof window !== 'undefined') {
      if (isDark) {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
        setIsDark(false)
      } else {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
        setIsDark(true)
      }
    }
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-300 shadow-lg shadow-slate-500/10 hover:shadow-slate-500/20"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: isDark ? 360 : 0,
          scale: isDark ? 0.8 : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <Moon className="w-5 h-5 text-slate-700 dark:text-slate-300" />
        ) : (
          <Sun className="w-5 h-5 text-slate-700 dark:text-slate-300" />
        )}
      </motion.div>
    </motion.button>
  )
}