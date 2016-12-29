//this is our action creator function that runs whenever a user clicks on a book.
export function selectBook(book) {
    // console.log('A book has been selected', book.title);
    //selectBook will return an action, which is an object with a type property that describes the purpose of the action, and usually also a payload.
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}
