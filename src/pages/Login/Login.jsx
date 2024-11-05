import "./Login.css"
import logo from "../../assets/logo.svg"
const Login = () => {
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
                            <input type="email" />
                            <input type="password" />
                        </div>
                        <div className="adminLoginButton mt-5">
                            <button className="btn">LOGIN</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Login