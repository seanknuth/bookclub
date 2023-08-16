import React, { useState } from 'react';
import axios from 'axios';



const CreateBook = (props) => {

    const {bookList, setBookList} = props;
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/books", {
            title,
            description
        })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setBookList([...bookList, res.data])
                setTitle("");
                setDescription("");               
            })       
            .catch((err) => {console.log(err)});
    }


    return(
        <div className="auth-form-container">   
            <h2>Add a new Book</h2>

            <form onSubmit = {submitHandler}>
            <div>
                <label for="title" className="form-label">Title</label>
                <input onChange={(e) => setTitle(e.target.value)} 
                value={title} 
                name="title" type="text" className="form-control" id="title" placeholder="enter a book title!"/>
            </div>
            <div>
                <label for="description" className="form-label">Description</label>
                <textarea onChange={(e) => setDescription(e.target.value)} 
                value={description} 
                name="description" type="text" className="form-control" id="description" />
            </div>
            <input type="submit" className="submit-input" value="Add" />
            </form>
        </div>

    )
}



export default CreateBook;