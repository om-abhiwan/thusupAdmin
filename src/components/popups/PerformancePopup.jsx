import React, { useEffect, useState } from 'react';
import { performanceUser } from '../../services/apis';
import { toast } from 'react-hot-toast';

function PerformancePopup({ showPerformance, setShowPerformance, rows, selectedRowIndex }) {
    const [performanceData, setPerformanceData] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const headers = {
                    authorization: sessionStorage.getItem('token')
                };

                const body = {
                    userId: rows[selectedRowIndex].userId
                };

                const response = await performanceUser(body, headers);

                if (response.data.performance) {
                    setPerformanceData(response.data.performance);
                } else {
                    toast.error("Data not found", { id: "data-error", duration: 1000 });
                }
            } catch (error) {
                toast.error(error.message, { id: "data-error", duration: 1000 });
            }
        };
        fetchData();
    }, []);

    const stats = [
        { label: "Total Points", value: performanceData?.totalPointsEarned },
        { label: "Total Games Played", value: performanceData?.totalGamesPlayed },
        { label: "Total Wins", value: performanceData?.totalWins },
        { label: "Total Losses", value: performanceData?.totalLosses },
        { label: "Total Thumsup collected", value: performanceData?.collectables?.totalThumsupCollected },
        { label: "Total Biryanis collected", value: performanceData?.collectables?.totalBiryaniCollected },
        { label: "Total Double Thums Up Collected", value: performanceData?.collectables?.totalDoubleThumsupCollected },
        { label: "Total Biryani Combo Collected", value: performanceData?.collectables?.totalBiryaniComboCollected },
    ];

    return (
        <>
            {showPerformance && (
                <div className="fixed inset-0 h-screen w-screen backdrop-blur-md z-100 flex items-center justify-center">
                    <div className="relative w-[800px] h-[550px] border border-white shadow-[0px_0px_20px_20px_rgba(255,255,255,0.37)] rounded-[40px] bg-[#1F2D68] flex flex-col justify-around items-center p-12">
                        <div className='absolute top-5 right-10'>
                            <img src="/svgs/crossButton.svg" className='cursor-pointer' onClick={() => setShowPerformance(false)} />
                        </div>
                        <div className="relative">
                            <img src="/svgs/banner.svg" alt="Banner" />
                            <div className="absolute bottom-[50px] w-full text-white text-center text-[43.46px] z-2">
                                PERFORMANCE
                            </div>
                        </div>
                        <div className="text-white p-6 rounded-lg w-full max-w-md mx-auto">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between items-center text-lg font-semibold mb-2"
                                >
                                    <span className="tracking-wide">{stat.label}</span>
                                    <span className="font-bold text-white text-glow">: {stat.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default PerformancePopup;
