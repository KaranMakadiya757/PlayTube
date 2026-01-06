import { useEffect } from "react";
import './App.css'

function App() {

  useEffect(() => {
    const applyTheme = () => {
      const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    };

    applyTheme();
  }, []);

  return (
    <>
      Hello World
    </>
  )
}

export default App
