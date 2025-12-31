import Navbar from "./Navbar";

function Layout({children}){

    const containerStyle = {
        width: "90%",
        margin: "100px auto",
    };
    const backgroundStyle = {
        backgroundColor: "#484e5cff",
        minHeight: "100vh",
    };
    return(
        <div style={backgroundStyle}>
            <Navbar/>
            <div style={containerStyle}>{children}</div>
        </div>
    )
}

export default Layout;