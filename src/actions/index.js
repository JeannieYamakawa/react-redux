//this is our action creator function that runs whenever a user clicks on a book.
export function selectBook(book) {
    // console.log('A book has been selected', book.title); to make sure the action creator is running.


    //this selectBook function will return an action. an action is an object with a 'type' property that describes the purpose of the action. an action creator will also usually return a payload.
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}
