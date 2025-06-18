import "./header.css";
import profile from "../../assets/person.svg";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [head, setHead] = useState("");

  useEffect(() => {
    setHead(location.pathname);
  }, [location.pathname]);

  return (
    <div className="header">
      <div className="headerHead">
        {head === "/" ? "Dashboard" : head === "/user" ? "USER MANAGEMENT" : "DASHBOARD"}
      </div>
      <div className="headerProfile">
        <div className="headerProfileImg cursor-pointer">
          <img src={profile} alt="profile" />
        </div>
        <div className="headerDetails cursor-pointer">
          <div>Admin@gmail.com</div>
          <div>Admin Account</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
