import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { useAppContext } from "../store/Store";
import { useNavigate } from "react-router-dom";
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

    const buttonStyle = {
        padding: "15px 20px",
        marginTop: "20px",
        minWidth: "200px",
        border: "none",
        borderRadius: "5px",
        backgroundColor: "red",
        color: "white",
        fotWeight: "bolder",
        fontSize: "18px",
        fontFamily: "tahoma"
    };

    const [item, setItem]=useState(null)
    const params = useParams();
    const store = useAppContext();
    const navigate = useNavigate();

    useEffect(()=>{
        const book = store.getItem(params.bookId);
        setItem(book);
    },[]);

    if (!item){
        return(
            <Layout><p>Item not found</p></Layout>
        )
    }

    function handleSubmit(e){
        e.preventDefault();

        //TODO: mandar a registrar
        store.deleteItem(item.id);
        navigate("/");
    }
    return(
        <Layout>
            <div className="item-container">
                <div>
                    <div style={viewImgStyle}>{item?.cover? <img src={item.cover} width="400" height="700" />: "" } </div>
                </div>
                <div>
                    <h2 style={viewLetterStyle}>{item?.title}</h2>
                    <h3 style={viewLetterStyle}>{item?.author} </h3>
                    <p style={viewLetterStyle}>Description: {item?.intro} </p>
                    <p style={viewLetterStyle}>Progress: {item?.completed? "Completed":"To finish"} </p>
                    <p style={viewLetterStyle}>Review: {item?.review}</p>
                    <form onSubmit={handleSubmit}>
                        <input type="submit" value={"Delete book"} style={buttonStyle}/>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default View;