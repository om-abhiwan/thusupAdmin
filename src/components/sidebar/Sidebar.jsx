import "./Sidebar.css"
import logo from "../../assets/logo.svg"
import { NavLink } from "react-router-dom"
import umIcon from "../../assets/umIcon.svg"
// import homeIcon from "../../assets/homeIcon.svg"
import logoutSvg from "../../assets/Logout.svg"
import person from "../../assets/person.svg"
import hrLine from "../../assets/hrLine.svg"
import bellIcon from "../../assets/bellIcon.svg"
import LogoutPopup from "../popups/LogoutPopup"
import { useState } from "react"

const Sidebar = () => {

    const [showDelete, setShowDelete] = useState(false);

    return (
        <div className="sidebar">

            <div className="sidebarLogo flex justify-center items-center">
                <img src={logo} alt="logo" />
            </div>

            <div className="text-center">
                <img src={hrLine} style={{ width: "100%" }} />
            </div>

            <div className="sidebarMenu">

                {/* <NavLink to="/" className="my-4">
                    <div className="sidebarItem">
                        <div className="itemIcon">
                            <img src={homeIcon} alt="homeIcon" />
                        </div>
                        <div className="itemName">
                            DASHBOARD
                        </div>
                    </div>
                </NavLink> */}

                <NavLink to="/user" className="sidebarItemLink">
                    <div className="sidebarItem">
                        <div className="itemIcon mx-2">
                            <img src={umIcon} />
                        </div>
                        <div className="itemName">
                            USER
                        </div>
                    </div>
                </NavLink>
                {/* <NavLink to="/notification" className="sidebarItemLink">
                    <div className="sidebarItem">
                        <div className="itemIcon  mx-2">
                            <img src={bellIcon} />
                        </div>
                        <div className="itemName">
                            NOTIFICATION
                        </div>
                    </div>
                </NavLink> */}
            </div>

            <div className="sidebarFooter">
                <div className="sidebarFooterImg">
                    <img src={person} alt="person" />
                </div>
                <div className="sidebarDetails mx-2 ">
                    <div className="sidebarEmail">Admin@gmail.com</div>
                    <div className="sidebarHeading">Admin Account</div>
                </div>
                <div className="exitButton cursor-pointer">
                    <img height="25px" src={logoutSvg} alt="logout" onClick={() => setShowDelete(true)} />
                </div>
            </div>

            <LogoutPopup showDelete={showDelete} setShowDelete={setShowDelete} />
            

        </div >
    )
}

export default Sidebar