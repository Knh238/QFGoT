// import history from '../history';
import axios from 'axios';
import {
  allBooks,
  allCultures,
  regionsArr,
  minorBooksArr,
  mainBooksArr
} from './fireIceInfo';

const GOT_HOUSE_LIST = 'GOT_HOUSE_LIST';
const GOT_BOOK_CHAR_LIST = 'GOT_BOOK_CHAR_LIST';
const GOT_ALL_CHARS = 'GOT_ALL_CHARS';
const GOT_BOOK_INFO = 'GOT_BOOK_INFO';
const GOT_CHAR_BIO = 'GOT_CHAR_BIO';
const GOT_OVERLORD = 'GOT_OVERLORD';

const gotHouseList = allHouses => ({
  type: GOT_HOUSE_LIST,
  allHouses
});

const gotOverlord = lord => ({
  type: GOT_OVERLORD,
  lord
});

const gotBookCharList = charsInBook => ({
  type: GOT_BOOK_CHAR_LIST,
  charsInBook
});

const gotAllChars = allChars => ({
  type: GOT_ALL_CHARS,
  allChars
});

const gotCharBio = bio => ({
  type: GOT_CHAR_BIO,
  bio
});

const gotBookInfo = bookInfo => ({
  type: GOT_BOOK_INFO,
  bookInfo
});

export const getHouseList = () => dispatch => {
  const houseMap = {};

  for (let h = 1; h <= 9; h++) {
    grabHouses(h);
  }
  function grabHouses(num) {
    axios
      .get(
        `https://www.anapioficeandfire.com/api/houses?page=${num}&pageSize=50`
      )
      .then(function(res) {
        const housesData = res.data;

        const houseArr1 = housesData.forEach(
          house => (houseMap[house.url.slice(45)] = { name: house.name })
        );
      });
  }

  dispatch(gotHouseList(houseMap));
};

export const getCharList = () => dispatch => {
  const allCharsMap = {};

  for (let i = 1; i < 43; i++) {
    grabChars(i);
  }
  function grabChars(num) {
    axios
      .get(
        `https://www.anapioficeandfire.com/api/characters?page=${num}&pageSize=50`
      )
      .then(function(res) {
        const charsData = res.data;

        const charsArr1 = charsData.forEach(
          person => (allCharsMap[person.url.slice(49)] = { name: person.name })
        );
      });
  }

  console.log('charactersmap arrr is ', allCharsMap);
  dispatch(gotAllChars(allCharsMap));
};

const initialState = {
  bookInfo: {},
  allHouses: {},
  allChars: {},
  housesLoaded: false,
  charsLoaded: false,
  allBooks,
  allCultures,
  regionsArr,
  minorBooksArr,
  mainBooksArr
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_HOUSE_LIST:
      return { ...state, allHouses: action.allHouses, housesLoaded: true };
    case GOT_BOOK_CHAR_LIST:
      return {
        ...state,
        charsInBook: action.charsInBook
      };
    case GOT_ALL_CHARS:
      return {
        ...state,
        allChars: action.allChars,
        charsLoaded: true
      };
    case GOT_CHAR_BIO:
      return {
        ...state,
        charInfo: action.charBio
      };
    case GOT_BOOK_INFO:
      return {
        ...state,
        bookInfo: action.bookInfo
      };

    default:
      return state;
  }
};

export default booksReducer;
