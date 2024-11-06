import "./header.css"
import profile from "../../assets/person.svg"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const Header = () => {

  const location = useLocation()
  const [head, setHead] = useState("")

  useEffect(() => {
    setHead(location.pathname)
  }, [location.pathname])



  return (
    <div className="header">
      <div className="headerHead">

        {
          head === "/" ? "Dashboard" : head === "/user" ? "User management" : "Dashboard"
        }

      </div>
      <div className="headerProfile">
        <div className="headerProfileImg">
          <img src={profile} alt="profile" />
        </div>
        <div className="headerDetails">
          Admin@gmail.com
          <br />
          Admin Account
        </div>
      </div>
    </div>
  )
}

export default Header