//gets two arguments: the current state and an action.

//state argument is not application state, but only the state this reducer is responsible for, in this case, the active book.

//state = null is ES6 syntax's way of saying if the initial state is undefined, set it to null.

export default function(state = null, action){
    switch(action.type){
        case 'BOOK_SELECTED':
        //the action.payload is the book the user clicked on.
        return action.payload;
    }
    return state;
};
//don't ever try to manipulate state itself within the reducer.
