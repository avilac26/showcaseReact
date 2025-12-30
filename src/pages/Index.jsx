import { useAppContext } from "../store/Store";
import Layout from "../components/Layout";
import Book from "../components/Book";

function Index(){
    const store = useAppContext();
    return(
        <Layout>
            <div>
                {store.items.map((item) =>(
                    <Book key={item.id} item={item}/>
                ))}
            </div>
        </Layout>
    )
}

export default Index;