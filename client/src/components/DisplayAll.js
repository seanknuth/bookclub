import React, { useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';



const DisplayAll = (props) => {

    const {bookList, setBookList} = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/books")
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setBookList(res.data);
            })
            .catch((err) => console.log(err))
    }, [])  

    const deleteFilter = (idFromBelow) => {
        axios.delete(`http://localhost:8000/api/books/${idFromBelow}`)
            .then((res) => {
                console.log(res.data);
                setBookList(bookList.filter((book, index) =>book._id !== idFromBelow));
            })
            .catch((err) => console.log(err))
    }

    return(
        <div className="auth-form-container">
            <h2>
                My Books
            </h2>

            {
                bookList.map((book, index) => (
                    <div key = {book._id}>
                        <div>
                        <Link to={`/book/${book._id}`}>{book.title}</Link>
                        </div>
                        <Link to={`/book/edit/${book._id}`}>
                            <button>Edit</button>
                        </Link>
                        <button onClick={() => deleteFilter(book._id)}>Delete</button>
                    </div>
            

                ))
            }
        </div>
    )
}


export default DisplayAll;