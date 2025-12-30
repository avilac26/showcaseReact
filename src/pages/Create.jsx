import { useState } from "react";
import { useAppContext } from "../store/Store";

import { Link } from "react-router-dom";

function Create(){

    const[title, SetTitle]=useState("");
    const[author, SetAuthor]=useState("");
    const[cover, SetCover]=useState("");
    const[intro, SetIntro]=useState("");
    const[completed, SetCompleted]=useState(false);
    const[review, SetReview]=useState("");

    const store = useAppContext();

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
    }
    
    return(
        <div>
            <Link to="/">Home</Link>
            <form onSubmit={handleSubmit}>
                <div>
                    <h2>Title</h2>
                    <input 
                        type="text" 
                        name="title" 
                        onChange={handleChange} 
                        value={title} 
                    />
                </div>
                <div>
                    <h2>Author</h2>
                    <input 
                        type="text" 
                        name="author" 
                        onChange={handleChange} 
                        value={author} 
                    />
                </div>
                <div>
                    <h2>Cover</h2>
                    <input 
                        type="file" 
                        name="cover" 
                        onChange={ handleOnChangeFile }
                    />
                    <div> {!!cover? <img src={cover} width="200" alt="preview" /> : "" } </div>
                </div>
                <div>
                    <h2>Introduction</h2>
                    <input 
                        type="text" 
                        name="intro" 
                        onChange={handleChange} 
                        value={intro} 
                    />
                </div>
                <div>
                    <h2>Completed</h2>
                    <input 
                        type="checkbox" 
                        name="completed" 
                        checked={completed}
                        onChange={handleChange} 
                    />
                </div>
                <div>
                    <h2>Review</h2>
                    <input 
                        type="text" 
                        name="review" 
                        onChange={handleChange} 
                        value={review} 
                    />
                </div>
                <input type="submit" value={"Register books"} />
            </form>
        </div>
    )
}

export default Create;