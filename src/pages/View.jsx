import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { useAppContext } from "../store/Store";

function View(){
    const [item, setItem]=useState(null)
    const params = useParams();
    const store = useAppContext();

    useEffect(()=>{
        const book = store.getItem(params.bookId);
        setItem(book);
    },[]);

    if (!item){
        return(
            <Layout><p>Item not found</p></Layout>
        )
    }
    return(
        <Layout>
            <h2>{item?.title}</h2>
            <div>{item?.cover? <img src={item.cover} width="400" />: "" } </div>
            <h3>{item?.author} </h3>
            <p>{item?.intro} </p>
            <div>{item?.completed? "Leído":"Por terminar"} </div>
            <p>{item?.review}</p>
        </Layout>
    )
}

export default View;