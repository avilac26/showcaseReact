import { useAppContext } from "../store/Store";
import { Link } from "react-router-dom";

function Index(){
    const store = useAppContext();
    return(
        <div>
            <Link to="/create">Create</Link>
            {store.items.map((item) =>(
                <p key={item.id}>{item.title}</p>
            ))}
            
        </div>
    )
}

export default Index;