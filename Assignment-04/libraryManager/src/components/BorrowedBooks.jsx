import React from "react"
import { useContext } from "react";
import { BorrowedBooksContext } from '../App';

const BorrowedBooks=()=>{
    const { borrowedBooks } = useContext(BorrowedBooksContext);
    return(
        <div style={{backgroundColor:"white", marginLeft:"80px",marginRight:"80px",marginTop:"20px"}}><h1 style={{color:"purple"}}>Borrowed Books</h1>
        {borrowedBooks.length > 0 ? (
        borrowedBooks.map((book) => (
        <p style={{color:"black"}}>{book}</p>
        ))
        )
        :(
        <p style={{color:"black"}}>No Borrowed books yet.</p>
        )}
        </div>
    )

}
export default BorrowedBooks;
