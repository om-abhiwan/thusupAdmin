import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";
import { useEffect, useState } from "react";

const Layout = () => {
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        if (!sessionStorage.getItem("token")) {
            navigate('/login');
        }
    }, []);

    return (
        <div
            className="w-full h-full bg-cover bg-center bg-no-repeat text-white font-[thumbsup] p-4 relative"
            style={{ backgroundImage: "url('/images/background.png')" }}
        >
            {/* Backdrop Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-md z-40 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                ></div>
            )}

            <div className="flex h-full">
                {/* Sidebar */}
                <div
                    className={`fixed md:relative md:w-1/4 h-full z-40
                        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"} 
                        transition-transform duration-300 ease-in-out`}
                >
                    <Sidebar />
                </div>

                {/* Main Content */}
                <div className="w-full md:w-3/4 h-full flex flex-col">
                    {/* Header */}
                    <div className="relative">
                        <button
                            className="md:hidden p-2 text-white bg-transparent backdrop-blur-md rounded-md fixed top-4 left-4 z-50"
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        >
                            {isSidebarOpen ? "✖" : "☰"}
                        </button>
                        <Header />
                    </div>

                    {/* Page Content */}
                    <div
                        className="mx-auto w-full h-[85vh] max-h-[90%] overflow-y-auto bg-[#1f2d68] shadow-lg rounded-[26px] border border-white p-4 relative"
                        style={{
                            boxShadow: `0px 3.47205px 1.73602px rgba(0, 0, 0, 0.5),
                            inset 0px -3.91924px 4.70309px rgba(0, 0, 0, 0.25),
                            inset -7.05463px 5.48693px 7.2114px rgba(0, 0, 0, 0.25),
                            inset -2.0618px -2.74907px 2.74907px rgba(255, 255, 255, 0.15),
                            inset 2.74907px 0px 6.87267px 1.37453px rgba(0, 0, 0, 0.25)`
                        }}
                    >
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;
