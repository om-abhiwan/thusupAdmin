import "./Sidebar.css"
import logo from "../../assets/logo.svg"
import { NavLink } from "react-router-dom"
import umIcon from "../../assets/umIcon.svg"
import homeIcon from "../../assets/homeIcon.svg"
import logoutSvg from "../../assets/Logout.svg"
import person from "../../assets/person.svg"
import hrLine from "../../assets/hrLine.svg"
const Sidebar = () => {
    return (
        <div className="sidebar">

            <div className="sidebarLogo">
                <img src={logo} alt="logo" />
            </div>

            <div className="text-center">
                <img src={hrLine} />
            </div>

            <div className="sidebarMenu">

                <NavLink to="/" className="my-4">
                    <div className="sidebarItem">
                        <div className="itemIcon">
                            <img src={homeIcon} alt="homeIcon" />
                        </div>
                        <div className="itemName">
                            DASHBOARD
                        </div>
                    </div>
                </NavLink>

                <NavLink to="/user">
                    <div className="sidebarItem">
                        <div className="itemIcon">
                            <img src={umIcon} />
                        </div>
                        <div className="itemName">
                            USER
                        </div>
                    </div>
                </NavLink>
            </div>

            <div className="sidebarFooter">
                <div className="sidebarFooterImg">
                    <img src={person} alt="person" />
                </div>
                <div className="sidebarDetails mx-2 ">
                    <div className="sidebarEmail">Admin@gmail.com</div>
                    <div className="sidebarHeading">Admin Account</div>
                </div>
                <div className="exitButton">
                    <img src={logoutSvg} alt="logout" />
                </div>
            </div>


        </div >
    )
}

export default Sidebar