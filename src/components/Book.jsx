import { Link } from "react-router-dom";

function Book({item}){
    const bookContainerStyle = {
        display: "flex",
        flexDirection: "column",
        width: "300px"
    };
    const bookInfoStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        textDecoration: "none"
    };
    const bookTitleStyle = {
        fontFamily: "tahoma",
    }
    return(
        <div style={bookContainerStyle}>
            <Link to={`/view/${item.id}`} style={bookInfoStyle}>
                    <img src={item.cover} width="200" height="350" alt={item.title} />
                    <h2 style={bookTitleStyle}>{item.title}</h2>
            </Link>
        </div>
    )
}


export default Book;