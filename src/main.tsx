import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router"
import Layout from './components/Layout'
import UserRegisterForm from './components/auth/UserRegisterForm'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route path="/register" element={<UserRegisterForm />} />
            </Route>
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
