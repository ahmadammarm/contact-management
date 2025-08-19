import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
            <Route element={<div>App</div>}>
                <Route path="/register" element={<div>Register</div>} />
            </Route>
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
