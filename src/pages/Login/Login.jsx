import "./Login.css"
import logo from "../../assets/logo.svg"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { adminLogin } from "../../services/apis"
import toast from "react-hot-toast"


const Login = () => {

    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })


    const handleLogin = async () => {
        try {

            const getResp = await adminLogin(formData)
            // console.log(getResp.data.responseMessage)

            if (getResp.data.status) {
                toast.error(getResp.data.responseMessage)
            }

            // navigate("/")    
        } catch (err) {
            toast.error(err.message)
        }
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