import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from "axios";



const UpdateBook = (props) => {

    const {id} = useParams();
    const {bookList, setBookList} = props;
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/books/${id}`)
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setTitle(res.data.title);
            setDescription(res.data.description);   
        })
        .catch((err) => console.log(err))
    },[])

    const submitHandler = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/books/${id}`, {
            title,
            description
        })
        .then((res) => {
            console.log(res);
            console.log(res.data);
            navigate("/");
        })
        .catch((err) => console.log(err))
    }


    return(
        <div className="auth-form-container">   
        <h2>Edit Book</h2>

        <form onSubmit={submitHandler}>
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
            name="description" type="text" className="form-control" id="escription" />
        </div>
        <div>
        <input type="submit" className="submit-input" value="Update" />
        </div>
        </form>

        <Link to={"/"}>Return Home</Link>
    </div>
    )
}







export default UpdateBook;