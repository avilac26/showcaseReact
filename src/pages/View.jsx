import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { useAppContext } from "../store/Store";
import "./View.css";

function View(){

    

    const viewImgStyle={
        marginTop: "10%",
        maxWidth: "100%",
        height: "auto"
    }

    const viewLetterStyle={
        fontFamily: "tahoma",
    };

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
            <div className="item-container">
                <div>
                    <div style={viewImgStyle}>{item?.cover? <img src={item.cover} width="400" />: "" } </div>
                </div>
                <div>
                    <h2 style={viewLetterStyle}>{item?.title}</h2>
                    <h3 style={viewLetterStyle}>{item?.author} </h3>
                    <p style={viewLetterStyle}>Description: {item?.intro} </p>
                    <p style={viewLetterStyle}>Progress: {item?.completed? "Completed":"To finish"} </p>
                    <p style={viewLetterStyle}>Review: {item?.review}</p>
                </div>
            </div>
        </Layout>
    )
}

export default View;