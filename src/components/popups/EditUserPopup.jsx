import React, { useState } from "react";
import { editUser } from "../../services/apis";

function EditProfile({ showEdit, setShowEdit, rows, selectedRowIndex, setIsEdit }) {
    const [name, setName] = useState("");

    const handleUpdate = async () => {
        try {
            const headers = {
                authorization: sessionStorage.getItem("token"),
            };
            const data = {
                name,
                userId: rows[selectedRowIndex]?.userId,
            };

            const response = await editUser(data, headers);
            setIsEdit(name);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            {showEdit && (
                <div className="fixed inset-0 h-screen w-screen backdrop-blur-md z-100 flex items-center justify-center">
                    <div className="relative w-[700px] h-[450px] border border-white shadow-[0px_0px_20px_20px_rgba(255,255,255,0.37)] rounded-[40px] bg-[#1F2D68] flex flex-col justify-around items-center p-12">
                        <div className="relative">
                            <img src="/svgs/banner.svg" alt="Banner" />
                            <div className="absolute bottom-[50px] w-full text-white text-center text-[43.46px] z-2">
                                Edit Name
                            </div>
                        </div>

                        <input
                            type="text"
                            placeholder="Enter new name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-[80%] px-4 py-2 text-white text-[20px] bg-transparent border-2 border-white rounded-md outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-300"
                        />

                        <div className="flex gap-10">
                            <button
                                onClick={() => { setShowEdit(false); handleUpdate(); }}
                                className="bg-[#DF0025] rounded-md border-2 border-silver shadow-inner shadow-black/50 w-[220px] text-white text-[25px] px-4 py-2"
                            >
                                SAVE
                            </button>
                            <button
                                onClick={() => setShowEdit(false)}
                                className="bg-[#1F2D68] rounded-md border-2 border-silver shadow-inner shadow-black/50 w-[220px] text-white text-[25px] px-4 py-2"
                            >
                                CANCEL
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default EditProfile;
