import "./Login.css"
import logo from "../../assets/logo.svg"
import { useNavigate } from "react-router-dom"
import { useState } from "react"


const Login = () => {

    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })


    const handleLogin = async () => {
        navigate("/")
    }

    return (
        <div className="adminLogin">

            <div className="adminLoginComp">

                <div className="adminLoginLogo">
                    <img src={logo} alt="logo" />
                </div>

                <div className="adminLoginForm">
                    <div className="adminLoginInputDiv text-center">
                        <div className="loginHead">
                            ADMIN LOGIN!
                        </div>
                        <div className="adminLoginInput mt-2 ">
                            <input type="email" className="loginEmailInput" placeholder="ENTER EMAIL ID" value={formData.email} onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }} />
                            <input type="password" className="loginPasswordInput" placeholder="ENTER PASSWORD" style={{ fontFamily: "sans-serif" }} value={formData.password} onChange={(e) => { setFormData({ ...formData, password: e.target.value }) }} />
                        </div>
                        <div className="adminLoginButton mt-5">
                            <button className="btn" onClick={handleLogin} >LOGIN</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Login