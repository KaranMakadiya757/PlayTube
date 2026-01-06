import { createRoot } from 'react-dom/client'
import Theme from './Common/Theme/Theme.ts'
import { ThemeProvider } from '@mui/material/styles'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <ThemeProvider theme={Theme}>
    <App />
  </ThemeProvider>
  // </StrictMode>,
)
