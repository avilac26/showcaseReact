import { useState } from "react";
import { useAppContext } from "../store/Store";

import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";

function Create(){

    const inputStyles={
        formContainer: {
            width: "400px",
            margin: "0 auto",
        },
        container: {
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            margin: "15px 0",
        },
        title: {
            fontSize: "16px",
            textAlign: "left",
            color: "white",
            fontFamily: "tahoma",
        },
        input: {
            padding: "10px",
            borderRadius: "5px",
            fontSize: "16px",
            fontFamily: "tahoma",
            color: "black",
        },
        largeInput: {
            padding: "10px",
            borderRadius: "5px",
            fontSize: "16px",
            fontFamily: "tahoma",
            color: "black",
            height: "120px",
            width: "100%",
            resize: "vertical",
        }
    };

    const buttonStyle = {
        padding: "15px 20px",
        marginTop: "20px",
        minWidth: "200px",
        border: "none",
        borderRadius: "5px",
        backgroundColor: "#1e9638",
        color: "white",
        fotWeight: "bolder",
        fontSize: "18px",
        fontFamily: "tahoma"
    };

    const[title, SetTitle]=useState("");
    const[author, SetAuthor]=useState("");
    const[cover, SetCover]=useState("");
    const[intro, SetIntro]=useState("");
    const[completed, SetCompleted]=useState(false);
    const[review, SetReview]=useState("");

    const store = useAppContext();
    const navigate = useNavigate();

    function handleChange(e){
        const name = e.target.name;
        const value = e.target.value;
        switch (name){
            case 'title':
                SetTitle(value);
                break;
            case 'author':
                SetAuthor(value);
                break;
            case 'intro':
                SetIntro(value);
                break;
            case 'completed':
                SetCompleted(e.target.checked);
                break;
            case 'review':
                SetReview(value);
                break;
        }
    }

    function handleOnChangeFile(e){
        const element = e.target;
        const file = element.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onloadend = function(){
            SetCover(reader.result.toString());
        }

    }
    
    function handleSubmit(e){
        e.preventDefault();

        const newBook = {
            id: crypto.randomUUID(),
            title,
            author,
            cover,
            intro,
            completed,
            review,
        };

        //TODO: mandar a registrar
        store.createItem(newBook);
        navigate("/");
    }
    
    return(
        <Layout>
            <form onSubmit={handleSubmit} style={inputStyles.formContainer}>
                <div style={inputStyles.container}>
                    <h2 style={inputStyles.title}>Title</h2>
                    <input 
                        type="text" 
                        name="title" 
                        onChange={handleChange} 
                        value={title} 
                        style={inputStyles.input}
                    />
                </div>
                <div style={inputStyles.container}>
                    <h2 style={inputStyles.title}>Author</h2>
                    <input 
                        type="text" 
                        name="author" 
                        onChange={handleChange} 
                        value={author} 
                        style={inputStyles.input}
                    />
                </div>
                <div style={inputStyles.container}>
                    <h2 style={inputStyles.title}>Cover</h2>
                    <input 
                        type="file" 
                        name="cover" 
                        onChange={ handleOnChangeFile }
                        style={inputStyles.input}
                    />
                    <div> {!!cover? <img src={cover} width="200" alt="preview" /> : "" } </div>
                </div>
                <div style={inputStyles.container}>
                    <h2 style={inputStyles.title}>Introduction</h2>
                    <textarea  
                        type="text" 
                        name="intro" 
                        onChange={handleChange} 
                        value={intro} 
                        style={inputStyles.largeInput}
                    />
                </div>
                <div>
                    <h2 style={inputStyles.title}>Completed</h2>
                    <input 
                        type="checkbox" 
                        name="completed" 
                        checked={completed}
                        onChange={handleChange} 
                    />
                </div>
                <div>
                    <h2 style={inputStyles.title}>Review</h2>
                    <textarea 
                        type="text" 
                        name="review" 
                        onChange={handleChange} 
                        value={review} 
                        style={inputStyles.largeInput}
                    />
                </div>
                <input type="submit" value={"Register book"} style={buttonStyle}/>
            </form>
        </Layout>
    )
}

export default Create;