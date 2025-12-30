import { Link } from "react-router-dom";

function Book({item}){
    return(
        <div>
            <Link to={`/view/${item.id}`}>
                    <h2>{item.title}</h2>
                    <img src={item.cover} width="200" alt={item.title} />
            </Link>
        </div>
    )
}


export default Book;