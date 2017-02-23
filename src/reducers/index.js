import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  // Inside here we declare all the state of redux,
  // The data of the state comes from the reducer.
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
