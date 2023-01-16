import { Route, Routes } from "react-router-dom"
import { Navbar } from "./component/Navbar"
import { Propiedades } from "./page/Propiedades"
import { Huespedes } from "./page/Huespedes"
import { Home } from "./page/Home"
import { Login } from "./page/Login"
import { Register } from "./page/Register"

export const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div className="container mt-3">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/propiedades" element={<Propiedades />} />
            <Route path="/huespedes" element={<Huespedes />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </main>
    </div>
  )
} 