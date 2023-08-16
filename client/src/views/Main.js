import React, { useEffect, useState } from 'react';
import CreateBook from '../components/CreateBook';
import DisplayAll from '../components/DisplayAll';


const Main = (props) => {

    const [bookList, setBookList] = useState([]);


    

    return(
        <div>
            <CreateBook bookList = {bookList} setBookList = {setBookList}/>
            <DisplayAll bookList = {bookList} setBookList = {setBookList} />
        </div>
    )
}


export default Main;