import logo from "../../assets/logo.svg";
import buttonImg from "../../assets/buttonImg.svg";
import { useState } from "react";
import { adminLogin } from "../../services/apis";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleLogin = async () => {
        try {
            const getResp = await adminLogin(formData);
            console.log(getResp.data);
            sessionStorage.setItem("token", getResp.data.token);

            if (getResp.data.sucess) {
                navigate("/");
                toast.success(getResp.data.responseMessage);
            } else {
                toast.error(getResp.data.responseMessage);
            }
        } catch (err) {
            toast.error(err.message);
        }
    };

    return (
        <div className="flex h-screen w-full items-center justify-between bg-[#1f2d68] p-4  font-thumsup text-[30px]">
            <div className="flex h-full w-full flex-wrap items-center justify-center ">
                <div className="w-full md:w-1/2 flex justify-center">
                    <img src={logo} alt="logo" className="w-[75%] md:ml-[30%]" />
                </div>

                <div className="w-full md:w-1/2 flex justify-center ">
                    <div className="w-full md:w-3/5 rounded-xl bg-gradient-to-r from-gray-400 via-white to-gray-700 p-1">
                        <div className="flex h-[50vh] flex-col items-center justify-center rounded-xl bg-[#404c7f] p-3 text-white shadow-lg backdrop-blur-md">
                            <h2 className="text-2xl font-bold">ADMIN LOGIN!</h2>
                            <div className="mt-4 w-full space-y-3">
                                <input
                                    type="email"
                                    className="w-full rounded-md border text-white border-gray-600 px-4 py-2 text-[#1f2d68] mb-3"
                                    placeholder="EMAIL ID"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                                <input
                                    type="password"
                                    className="w-full rounded-md border border-gray-600 px-4 py-2 text-[#1f2d68]"
                                    placeholder="PASSWORD"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                />
                            </div>
                            <div className="mt-5">
                                <img src={buttonImg} onClick={handleLogin} className="cursor-pointer" alt="Login Button" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
