// import history from '../history';

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

  for (let h = 1; h < 9; h++) {
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
  // axios
  //   .get(`https://www.anapioficeandfire.com/api/houses?page=${2}&pageSize=50`)
  //   .then(function(res) {
  //     const housesData2 = res.data;

  //     const houseArr2 = housesData2.forEach(
  //       house => (houseMap[house.url.slice(45)] = { name: house.name })
  //     );
  //   });

  // axios
  //   .get(`https://www.anapioficeandfire.com/api/houses?page=${3}&pageSize=50`)
  //   .then(function(res) {
  //     const housesData3 = res.data;

  //     const houseArr3 = housesData3.forEach(
  //       house => (houseMap[house.url.slice(45)] = { name: house.name })
  //     );
  //   });
  // axios
  //   .get(`https://www.anapioficeandfire.com/api/houses?page=${4}&pageSize=50`)
  //   .then(function(res) {
  //     const housesData4 = res.data;

  //     const houseArr4 = housesData4.forEach(
  //       house => (houseMap[house.url.slice(45)] = { name: house.name })
  //     );
  //   });
  // axios
  //   .get(`https://www.anapioficeandfire.com/api/houses?page=${5}&pageSize=50`)
  //   .then(function(res) {
  //     const housesData5 = res.data;

  //     const houseArr5 = housesData5.forEach(
  //       house => (houseMap[house.url.slice(45)] = { name: house.name })
  //     );
  //   });

  console.log('house arrr is ', houseMap);
  dispatch(gotHouseList(houseMap));
};

export const getCharList = () => dispatch => {
  const allCharsMap = {};
  //43 pages to get  by going through 50 eahc time

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

const regionsArr = [
  {
    name: 'Dorne',
    img:
      'https://vignette.wikia.nocookie.net/gameofthrones/images/f/f5/Dorne.png/revision/latest?cb=20120719190909'
  },
  {
    name: 'The Westerlands',
    img:
      'https://vignette.wikia.nocookie.net/gameofthrones/images/7/7f/The_Westerlands.png/revision/latest?cb=20120719201401'
  },

  {
    name: 'The North',
    img:
      'https://vignette.wikia.nocookie.net/gameofthrones/images/f/f3/The_North.png/revision/latest?cb=20120719200112'
  },
  {
    name: 'The Reach',
    img:
      'https://vignette.wikia.nocookie.net/gameofthrones/images/8/89/The_Reach.png/revision/latest?cb=20120719200419'
  },
  {
    name: 'The Vale',
    img:
      'https://vignette.wikia.nocookie.net/gameofthrones/images/d/d7/Vale_of_Arryn.png/revision/latest?cb=20120719201619'
  },
  {
    name: 'Iron Islands',
    img:
      'https://vignette.wikia.nocookie.net/gameofthrones/images/e/eb/Iron_Islands.png/revision/latest?cb=20120719194710'
  },
  {
    name: 'The Crownlands',
    img:
      'https://vignette.wikia.nocookie.net/gameofthrones/images/5/59/The_Crownlands.png/revision/latest?cb=20120719191632'
  },
  {
    name: 'The Stormlands',
    img:
      'https://vignette.wikia.nocookie.net/gameofthrones/images/5/5f/The_Stormlands.png/revision/latest?cb=20150221004502'
  },
  {
    name: 'The Riverlands',
    img:
      'https://vignette.wikia.nocookie.net/gameofthrones/images/d/d0/The_Riverlands.png/revision/latest?cb=20120719200633'
  }
];

const allCultures = [
  'Dothraki',
  'Valemen',
  'First Men',
  'Northmen',
  'Rivermen',
  'Braavosi',
  'Andal',
  'Crannogmen',
  'Valyrian',
  'Rhoynar',
  'Free Folk',
  'Dornish',
  'Ironborn',
  'Myrish',
  'Tyroshi',
  'Norvoshi',
  'Ghiscari',
  'Lhazareen',
  'Qartheen',
  'Asshai',
  'Ibbenese',
  'Naathi'
];

const mainBooksArr = [
  {
    apiId: 1,
    title: 'A Game of Thrones',
    seriesNumber: 'A Song Of Ice and Fire #1',
    author: 'George R.R. Martin',
    datePublished: 1996,
    numOfPages: 694,
    coverImage: 'https://images.gr-assets.com/books/1554191954l/13496.jpg'
  },
  {
    apiId: 2,
    title: 'A Clash of Kings',
    seriesNumber: 'A Song Of Ice and Fire #2',
    author: 'George R.R. Martin',
    datePublished: 1999,
    numOfPages: 768,
    coverImage: 'https://images.gr-assets.com/books/1353400431l/11788811.jpg'
  },
  {
    apiId: 3,
    title: 'A Storm of Swords',
    seriesNumber: 'A Song Of Ice and Fire #3',
    author: 'George R.R. Martin',
    datePublished: 2000,
    numOfPages: 992,
    coverImage: 'https://images.gr-assets.com/books/1427886300l/11133581.jpg'
  },
  {
    apiId: 5,
    title: 'A Feast for Crows',
    seriesNumber: 'A Song Of Ice and Fire #4',
    author: 'George R.R. Martin',
    datePublished: 2005,
    numOfPages: 748,
    coverImage: 'https://images.gr-assets.com/books/1525084743l/147917.jpg'
  },
  {
    apiId: 8,
    title: 'A Dance with Dragons',
    seriesNumber: 'A Song Of Ice and Fire #5',
    author: 'George R.R. Martin',
    datePublished: 2011,
    numOfPages: 1040,
    coverImage: 'https://images.gr-assets.com/books/1327885335l/10664113.jpg'
  }
];
const minorBooksArr = [
  {
    apiId: 4,
    title: 'The Hedge Knight',

    author: 'George R.R. Martin',
    mediaType: 'graphic novel',
    datePublished: 2005,
    numOfPages: 164
  },
  {
    apiId: 6,
    title: 'The Sworn Sword',

    author: 'George R.R. Martin',
    datePublished: 2008,
    mediaType: 'graphic novel',
    numOfPages: 152
  },
  {
    apiId: 7,
    title: 'The Mystery Knight',

    author: 'George R.R. Martin',
    datePublished: 2011,
    mediaType: 'novella',
    numOfPages: 416
  },
  {
    apiId: 9,
    title: 'The Princess and the Queen',

    author: 'George R.R. Martin',
    datePublished: 2013,
    mediaType: 'novella',
    numOfPages: 784
  },
  {
    apiId: 10,
    title: 'The Rogue Prince',

    author: 'George R.R. Martin',
    datePublished: 2014,
    mediaType: 'novella',
    numOfPages: 832
  },
  {
    apiId: 11,
    title: 'The World of Ice and Fire',
    author: 'Elio Garcia, Linda Antonsson, George R. R. Martin',
    datePublished: 2014,
    mediaType: 'companion',
    numOfPages: 336
  },
  {
    apiId: 12,
    title: 'A Knight of the Seven Kingdoms',
    author: 'George R.R. Martin',
    datePublished: 2015,
    mediaType: 'novella',
    numOfPages: 368
  }
];

const allBooks = {
  1: {
    apiId: 1,
    title: 'A Game of Thrones',
    seriesNumber: 'A Song Of Ice and Fire #1',
    author: 'George R.R. Martin',
    datePublished: 1996,
    numOfPages: 694,
    coverImage: 'https://images.gr-assets.com/books/1554191954l/13496.jpg'
  },
  2: {
    apiId: 2,
    title: 'A Clash of Kings',
    seriesNumber: 'A Song Of Ice and Fire #2',
    author: 'George R.R. Martin',
    datePublished: 1999,
    numOfPages: 768,
    coverImage: 'https://images.gr-assets.com/books/1353400431l/11788811.jpg'
  },
  3: {
    apiId: 3,
    title: 'A Storm of Swords',
    seriesNumber: 'A Song Of Ice and Fire #3',
    author: 'George R.R. Martin',
    datePublished: 2000,
    numOfPages: 992,
    coverImage: 'https://images.gr-assets.com/books/1427886300l/11133581.jpg'
  },
  5: {
    apiId: 5,
    title: 'A Feast for Crows',
    seriesNumber: 'A Song Of Ice and Fire #4',
    author: 'George R.R. Martin',
    datePublished: 2005,
    numOfPages: 748,
    coverImage: 'https://images.gr-assets.com/books/1525084743l/147917.jpg'
  },
  8: {
    apiId: 8,
    title: 'A Dance with Dragons',
    seriesNumber: 'A Song Of Ice and Fire #5',
    author: 'George R.R. Martin',
    datePublished: 2011,
    numOfPages: 1040,
    coverImage: 'https://images.gr-assets.com/books/1327885335l/10664113.jpg'
  },
  4: {
    apiId: 4,
    title: 'The Hedge Knight',

    author: 'George R.R. Martin',
    mediaType: 'graphic novel',
    datePublished: 2005,
    numOfPages: 164
  },
  6: {
    apiId: 6,
    title: 'The Sworn Sword',

    author: 'George R.R. Martin',
    datePublished: 2008,
    mediaType: 'graphic novel',
    numOfPages: 152
  },
  7: {
    apiId: 7,
    title: 'The Mystery Knight',

    author: 'George R.R. Martin',
    datePublished: 2011,
    mediaType: 'novella',
    numOfPages: 416
  },
  9: {
    apiId: 9,
    title: 'The Princess and the Queen',

    author: 'George R.R. Martin',
    datePublished: 2013,
    mediaType: 'novella',
    numOfPages: 784
  },
  10: {
    apiId: 10,
    title: 'The Rogue Prince',

    author: 'George R.R. Martin',
    datePublished: 2014,
    mediaType: 'novella',
    numOfPages: 832
  },
  11: {
    apiId: 11,
    title: 'The World of Ice and Fire',
    author: 'Elio Garcia, Linda Antonsson, George R. R. Martin',
    datePublished: 2014,
    mediaType: 'companion',
    numOfPages: 336
  },
  12: {
    apiId: 12,
    title: 'A Knight of the Seven Kingdoms',
    author: 'George R.R. Martin',
    datePublished: 2015,
    mediaType: 'novella',
    numOfPages: 368
  }
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
