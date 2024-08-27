import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languanges</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="search icon" className="icons" />
        <p>Children</p>
        <img src={bell_icon} alt="bell icon" className="icons" />
        <div className="navbar-profile">
          <img src={profile_img} alt="profile image" className="profile" />
          <img src={caret_icon} alt="caret icon" />
          <div className="dropdown">
            <p>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
