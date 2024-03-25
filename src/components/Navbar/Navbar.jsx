import "./Navbar.css";
import menu_icon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search.png";
import notification_icon from "../../assets/notification.png";
import more_icon from "../../assets/more.png";
import upload_icon from "../../assets/upload.png";
import profile_icon from "../../assets/user_profile.jpg";

export default function Navbar() {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img src={menu_icon} alt="menu icon" className="menu-icon" />
        <img src={logo} alt="logo" className="logo-icon" />
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search here" />
          <img src={search_icon} alt="search icon" />
        </div>
      </div>
      <div className="nav-right flex-div">
        <img src={upload_icon} alt="upload icon" />
        <img src={more_icon} alt="more icon" />
        <img src={notification_icon} alt="notification icon" />
        <img src={profile_icon} alt="profile icon" className="user-icon" />
      </div>
    </nav>
  );
}
