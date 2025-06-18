import React from 'react';
import { useNavigate } from 'react-router-dom';

function LogoutPopup({ showDelete, setShowDelete }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem('token'); // Remove authentication token
        navigate('/login'); // Redirect to login page
    };

    return (
        <>
            {showDelete && (
                <div className="fixed inset-0 h-screen w-screen backdrop-blur-md z-100 flex items-center justify-center">
                    <div className="relative w-[700px] h-[450px] border border-white shadow-[0px_0px_20px_20px_rgba(255,255,255,0.37)] rounded-[40px] bg-[#1F2D68] flex flex-col justify-around items-center p-12">
                        <div className="relative">
                            <img src="/svgs/banner.svg" alt="Banner" />
                            <div className="absolute bottom-[50px] w-full text-white text-center text-[43.46px] z-2">
                                LOGOUT
                            </div>
                        </div>
                        <div className="text-[29.23px] text-white">SURE YOU WANT TO LOGOUT</div>
                        <div className="flex gap-10">
                            <button
                                onClick={handleLogout}
                                className="bg-[#DF0025] rounded-md border-2 border-silver shadow-inner shadow-black/50 w-[220px] text-white text-[25px] px-4 py-2">
                                YES
                            </button>
                            <button
                                onClick={() => setShowDelete(false)}
                                className="bg-[#1F2D68] rounded-md border-2 border-silver shadow-inner shadow-black/50 w-[220px] text-white text-[25px] px-4 py-2">
                                NO
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default LogoutPopup;
