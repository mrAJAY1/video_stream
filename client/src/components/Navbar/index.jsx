import "./index.scss";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='navbar-container'>
      <nav>
        <h1>Streamy</h1>
        <div className='icon-container'>
          <div className='icon'>
            <input type='text' />
            <BiSearchAlt2 />
          </div>
          <div className='icon'>
            <BsPerson />
          </div>
          <div className='icon'>
            <Link to='/signin'>
              <Button
                sx={{
                  height: "100%",
                  padding: 0,
                  color: "#fff",
                  fontSize: "0.8rem",
                }}
              >
                Sign in
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
