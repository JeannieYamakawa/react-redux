import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

//reducers contain the state.
const rootReducer = combineReducers({
    books: BooksReducer

});

export default rootReducer;
