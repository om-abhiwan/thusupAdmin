import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login/Login"
import Layout from "./layout/Layout"
import Dashboard from "./pages/Dashboard/Dashboard"
import User from "./pages/User/User"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="" element={<Layout />} >
          <Route path="/" element={<Dashboard />} />
          <Route path="/user" element={<User />} />
        </Route>

      </Routes>
    </>
  )
}

export default App
