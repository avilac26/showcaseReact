import { Link } from "react-router-dom";

function Navbar(){

    const linkStyle = {
        padding: "10px",
        display: "block",
        fontSize: "18px",
        color: "white",
        textDecoration: "none",
        fontFamily: "arial"
    };

    const navContainerStyle = {
        backgroundColor: "#181d27",
        padding: "10px",
        display: "flex",
        gap: "5px",
        justifyContent: "center",
    };

    return(
        <div style={navContainerStyle}>
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="/create" style={linkStyle}>Add Book</Link>
        </div>
    )
}

export default Navbar;