"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if(!mounted) return null

  return (
    <div>
      The current theme is: {theme}
      <button className="text-white" onClick={() => setTheme('light')}>Light Mode</button>
      <button className="text-white" onClick={() => setTheme('dark')}>Dark Mode</button>
    </div>
  )
};