import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">CRYPTO WALLET</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          

          <li>
            
            <Link to="/" style={{ textDecoration: "none" }}> 
            
            
            <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
            </li>
            

            </Link>
            
          </li>
          
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Watchlist</span>
            </li>
            </li>
          </Link>
          
          
        
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          

          <Link to="/Login" style={{ textDecoration: "none" }}>
           
            <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
            </li>
            
          </Link>



        </ul>
      </div>
      
    </div>
  );
};

export default Sidebar;
