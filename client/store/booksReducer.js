// import history from '../history';
import booksData from './bookInfo';
import axios from 'axios';

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
  axios
    .get(`https://www.anapioficeandfire.com/api/houses?page=${1}&pageSize=50`)
    .then(function(res) {
      const housesData = res.data;

      const houseArr1 = housesData.forEach(
        house => (houseMap[house.url.slice(45)] = { name: house.name })
      );
    });
  axios
    .get(`https://www.anapioficeandfire.com/api/houses?page=${2}&pageSize=50`)
    .then(function(res) {
      const housesData2 = res.data;

      const houseArr2 = housesData2.forEach(
        house => (houseMap[house.url.slice(45)] = { name: house.name })
      );
    });

  axios
    .get(`https://www.anapioficeandfire.com/api/houses?page=${3}&pageSize=50`)
    .then(function(res) {
      const housesData3 = res.data;

      const houseArr3 = housesData3.forEach(
        house => (houseMap[house.url.slice(45)] = { name: house.name })
      );
    });
  axios
    .get(`https://www.anapioficeandfire.com/api/houses?page=${4}&pageSize=50`)
    .then(function(res) {
      const housesData4 = res.data;

      const houseArr4 = housesData4.forEach(
        house => (houseMap[house.url.slice(45)] = { name: house.name })
      );
    });
  axios
    .get(`https://www.anapioficeandfire.com/api/houses?page=${5}&pageSize=50`)
    .then(function(res) {
      const housesData5 = res.data;

      const houseArr5 = housesData5.forEach(
        house => (houseMap[house.url.slice(45)] = { name: house.name })
      );
    });

  console.log('house arrr is ', houseMap);
  dispatch(gotHouseList(houseMap));
};

export const getCharList = () => dispatch => {
  const list = booksData;
  dispatch(gotCharList(list));
};

const initialState = {
  bookInfo: {},
  allHouses: {},
  allChars: {},
  charsInBook: [],
  charInfo: {}
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_HOUSE_LIST:
      return { ...state, allHouses: action.allHouses };
    case GOT_BOOK_CHAR_LIST:
      return {
        ...state,
        charsInBook: action.charsInBook
      };
    case GOT_ALL_CHARS:
      return {
        ...state,
        allChars: action.allChars
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
