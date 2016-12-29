import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

//reducers contain the state and are responsible for returning different state.

//for each key here, one reducer is assigned from the imports above.
const rootReducer = combineReducers({
    books: BooksReducer,
    activeBook: ActiveBook

});

export default rootReducer;
