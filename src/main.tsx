import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router"
import Layout from './components/Layout'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route path="/register" element={<div>Register</div>} />
            </Route>
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
