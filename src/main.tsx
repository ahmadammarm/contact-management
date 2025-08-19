import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router"
import Layout from './components/Layout'
import UserRegisterForm from './components/auth/UserRegisterForm'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
            {/* not authenticated user routes */}
            <Route element={<Layout />}>
                <Route path="/register" element={<UserRegisterForm />} />
            </Route>

            {/* authenticated user routes */}
            <Route element={<Layout />}>
                <Route path="/dashboard" element={<div>Dashboard</div>} />
            </Route>
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
