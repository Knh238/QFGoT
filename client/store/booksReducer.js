// import history from '../history';
import booksData from './bookInfo';

const GOT_BOOK_LIST = 'GOT_BOOK_LIST';
const GOT_CURRENT_BOOK = 'GOT_CURRENT_BOOK';
const BOOK_FOUND = 'BOOK_FOUND';
const BOOK_NOT_FOUND = 'BOOK_NOT_FOUND';

const gotBookList = list => ({
  type: GOT_BOOK_LIST,
  list
});
const gotCurrentBook = book => ({
  type: GOT_CURRENT_BOOK,
  book
});
const bookFound = quotes => ({
  type: BOOK_FOUND,
  quotes
});
const bookNotFound = dates => ({
  type: BOOK_NOT_FOUND,
  dates
});

export const getSingleBookInfo = id => dispatch => {
  //     dispatch(gotCurrentBook(book));
};

export const getBookList = id => dispatch => {
  const list = booksData;

  dispatch(gotBookList(list));
};

const initialState = {
  books: [],
  bookList: [],
  currentBook: []
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_BOOK_LIST:
      return { ...state, bookList: action.list };
    case GOT_CURRENT_BOOK:
      return {
        ...state,
        currentBook: [...state.currentBook, action.book]
      };
    case BOOK_FOUND:
      return {
        ...state,
        book: action.book
      };
    case BOOK_NOT_FOUND:
      return {
        ...state,
        error: action.error
      };

    default:
      return state;
  }
};

export default booksReducer;
