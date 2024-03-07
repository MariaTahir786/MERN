import React from 'react'


const Display = (props) => {
    const { bookList,completeBook,deleteBook } = props


    return (
        <div>
            <h1>This is a display</h1>
            {
                //mapping only runs when we add a book and delete will not work unless we add abook thats why they are in same function for delete we wre filtering and in react we do not deal with dom we will filter and return the new filtered array same goes with mapping and the we set the sate to set new values
                bookList.map((book, idx) => {
                    return(<div key={book.id}>
                        {/* //we will change the styling by using class name and we will cit through the when we click the check box on page once we click checkbox class becomes completed based on condition we gave here look for App.css where we change the styling to cut line through*/}
                        <h2 className={ book.isComplete?"completed" : ""}>{book.oneBook}</h2>
                        <input type="checkbox" onChange={()=>completeBook(book)}/>
                        <input type="submit" value="Delete" onClick={()=>deleteBook(book.id)} />
                    </div>)
                })
            }
           
        </div>
    )

}
export default Display