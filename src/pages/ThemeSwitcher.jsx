import { useEffect, useState } from 'react';
import { ThemeProvider } from '../contexts/theme';
import ThemeBtn from '../Components/ThemeBtn';
import Card from '../Components/Kard';

function ThemeSwitcher() {
  const [themeMode, setThemeMode] = useState("dark");

  const lightTheme = () => {
    setThemeMode("light");
  }

  const darkTheme = () => {
    setThemeMode("dark");
  }
  
  // actual change in theme
  useEffect(() => {
     document.querySelector('html').classList.remove("dark");
     document.querySelector('html').classList.remove("light");
     document.querySelector('html').classList.add(themeMode);
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center dark:text-red-600">
        <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                <ThemeBtn/>
            </div>

            <div className="w-full max-w-sm mx-auto">
                <Card/>
            </div>
        </div>
      </div>
    </ThemeProvider>
  
  )
}

export default ThemeSwitcher;
