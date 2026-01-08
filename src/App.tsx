import { Routes } from "./routes";
import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import './App.css'

function App() {

  useEffect(() => {
    const applyTheme = () => {
      const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
      // document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
    };

    applyTheme();
  }, []);

  return (
    <>
      <RouterProvider router={Routes} />
    </>
  )
}

export default App
