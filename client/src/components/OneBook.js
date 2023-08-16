import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";


const OneBook = (props) => {

    const {id} = useParams();
    const [oneBook, setOneBook] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/books/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setOneBook(res.data);
            })
            .catch((err) => console.log(err))
    }, [id])

    const deleteFilter = (idFromBelow) => {
        axios.delete(`http://localhost:8000/api/books/${id}`)
            .then((res) => {
                console.log(res.data);
                navigate("/");
            })
            .catch((err) => console.log(err))

        }


    return(
        <div className="auth-form-container">
            <h2>{oneBook.title}</h2>

            <p>{oneBook.description}</p>
            <button onClick={deleteFilter}>Delete</button>
            <Link to={"/"}>
                <button>Return Home</button>
            </Link>
        </div>
    )
}


export default OneBook;