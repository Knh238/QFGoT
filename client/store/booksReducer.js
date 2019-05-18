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
    coverImage: 'https://images.gr-assets.com/books/1554191954l/13496.jpg',
    characters: [
      'https://anapioficeandfire.com/api/characters/2',
      'https://anapioficeandfire.com/api/characters/12',
      'https://anapioficeandfire.com/api/characters/116',
      'https://anapioficeandfire.com/api/characters/120',
      'https://anapioficeandfire.com/api/characters/125',
      'https://anapioficeandfire.com/api/characters/128',
      'https://anapioficeandfire.com/api/characters/211',
      'https://anapioficeandfire.com/api/characters/487',
      'https://anapioficeandfire.com/api/characters/490',
      'https://anapioficeandfire.com/api/characters/1410',
      'https://anapioficeandfire.com/api/characters/1418',
      'https://anapioficeandfire.com/api/characters/1430',
      'https://anapioficeandfire.com/api/characters/1434',
      'https://anapioficeandfire.com/api/characters/1442',
      'https://anapioficeandfire.com/api/characters/1444',
      'https://anapioficeandfire.com/api/characters/1453',
      'https://anapioficeandfire.com/api/characters/1455',
      'https://anapioficeandfire.com/api/characters/1456',
      'https://anapioficeandfire.com/api/characters/1463',
      'https://anapioficeandfire.com/api/characters/1466',
      'https://anapioficeandfire.com/api/characters/1468',
      'https://anapioficeandfire.com/api/characters/1470',
      'https://anapioficeandfire.com/api/characters/1488',
      'https://anapioficeandfire.com/api/characters/1499',
      'https://anapioficeandfire.com/api/characters/1502',
      'https://anapioficeandfire.com/api/characters/1515',
      'https://anapioficeandfire.com/api/characters/1585',
      'https://anapioficeandfire.com/api/characters/1596',
      'https://anapioficeandfire.com/api/characters/1602',
      'https://anapioficeandfire.com/api/characters/1620',
      'https://anapioficeandfire.com/api/characters/1624',
      'https://anapioficeandfire.com/api/characters/1627',
      'https://anapioficeandfire.com/api/characters/1631',
      'https://anapioficeandfire.com/api/characters/1649',
      'https://anapioficeandfire.com/api/characters/1650',
      'https://anapioficeandfire.com/api/characters/1660',
      'https://anapioficeandfire.com/api/characters/1662',
      'https://anapioficeandfire.com/api/characters/1727',
      'https://anapioficeandfire.com/api/characters/1741',
      'https://anapioficeandfire.com/api/characters/1742',
      'https://anapioficeandfire.com/api/characters/1749',
      'https://anapioficeandfire.com/api/characters/1755',
      'https://anapioficeandfire.com/api/characters/1770',
      'https://anapioficeandfire.com/api/characters/1772',
      'https://anapioficeandfire.com/api/characters/1787',
      'https://anapioficeandfire.com/api/characters/1790',
      'https://anapioficeandfire.com/api/characters/1802',
      'https://anapioficeandfire.com/api/characters/1815',
      'https://anapioficeandfire.com/api/characters/1816',
      'https://anapioficeandfire.com/api/characters/1826',
      'https://anapioficeandfire.com/api/characters/1837',
      'https://anapioficeandfire.com/api/characters/1838',
      'https://anapioficeandfire.com/api/characters/1840',
      'https://anapioficeandfire.com/api/characters/1843',
      'https://anapioficeandfire.com/api/characters/1855',
      'https://anapioficeandfire.com/api/characters/1856',
      'https://anapioficeandfire.com/api/characters/1861',
      'https://anapioficeandfire.com/api/characters/1873',
      'https://anapioficeandfire.com/api/characters/1874',
      'https://anapioficeandfire.com/api/characters/1875',
      'https://anapioficeandfire.com/api/characters/1880',
      'https://anapioficeandfire.com/api/characters/1882',
      'https://anapioficeandfire.com/api/characters/1900',
      'https://anapioficeandfire.com/api/characters/1909',
      'https://anapioficeandfire.com/api/characters/1911',
      'https://anapioficeandfire.com/api/characters/1916',
      'https://anapioficeandfire.com/api/characters/1935',
      'https://anapioficeandfire.com/api/characters/1938',
      'https://anapioficeandfire.com/api/characters/1939',
      'https://anapioficeandfire.com/api/characters/1942',
      'https://anapioficeandfire.com/api/characters/1963',
      'https://anapioficeandfire.com/api/characters/1968',
      'https://anapioficeandfire.com/api/characters/1976',
      'https://anapioficeandfire.com/api/characters/2045',
      'https://anapioficeandfire.com/api/characters/2047',
      'https://anapioficeandfire.com/api/characters/2051',
      'https://anapioficeandfire.com/api/characters/2059',
      'https://anapioficeandfire.com/api/characters/2067',
      'https://anapioficeandfire.com/api/characters/2068',
      'https://anapioficeandfire.com/api/characters/2069',
      'https://anapioficeandfire.com/api/characters/2071',
      'https://anapioficeandfire.com/api/characters/2073',
      'https://anapioficeandfire.com/api/characters/2076',
      'https://anapioficeandfire.com/api/characters/2089',
      'https://anapioficeandfire.com/api/characters/2114',
      'https://anapioficeandfire.com/api/characters/2119',
      'https://anapioficeandfire.com/api/characters/2121'
    ]
  },
  {
    apiId: 2,
    title: 'A Clash of Kings',
    seriesNumber: 'A Song Of Ice and Fire #2',
    author: 'George R.R. Martin',
    datePublished: 1999,
    numOfPages: 768,
    coverImage: 'https://images.gr-assets.com/books/1353400431l/11788811.jpg',
    characters: [
      'https://anapioficeandfire.com/api/characters/2',
      'https://anapioficeandfire.com/api/characters/12'
    ]
  },
  {
    apiId: 3,
    title: 'A Storm of Swords',
    seriesNumber: 'A Song Of Ice and Fire #3',
    author: 'George R.R. Martin',
    datePublished: 2000,
    numOfPages: 992,
    coverImage: 'https://images.gr-assets.com/books/1427886300l/11133581.jpg',
    characters: [
      'https://anapioficeandfire.com/api/characters/40',
      'https://anapioficeandfire.com/api/characters/41',
      'https://anapioficeandfire.com/api/characters/42',
      'https://anapioficeandfire.com/api/characters/46',
      'https://anapioficeandfire.com/api/characters/129',
      'https://anapioficeandfire.com/api/characters/130',
      'https://anapioficeandfire.com/api/characters/135',
      'https://anapioficeandfire.com/api/characters/137',
      'https://anapioficeandfire.com/api/characters/142',
      'https://anapioficeandfire.com/api/characters/147',
      'https://anapioficeandfire.com/api/characters/149',
      'https://anapioficeandfire.com/api/characters/768',
      'https://anapioficeandfire.com/api/characters/775',
      'https://anapioficeandfire.com/api/characters/778',
      'https://anapioficeandfire.com/api/characters/779',
      'https://anapioficeandfire.com/api/characters/782',
      'https://anapioficeandfire.com/api/characters/784',
      'https://anapioficeandfire.com/api/characters/786',
      'https://anapioficeandfire.com/api/characters/797',
      'https://anapioficeandfire.com/api/characters/805',
      'https://anapioficeandfire.com/api/characters/806',
      'https://anapioficeandfire.com/api/characters/814',
      'https://anapioficeandfire.com/api/characters/815',
      'https://anapioficeandfire.com/api/characters/820',
      'https://anapioficeandfire.com/api/characters/823',
      'https://anapioficeandfire.com/api/characters/827'
    ]
  },
  {
    apiId: 5,
    title: 'A Feast for Crows',
    seriesNumber: 'A Song Of Ice and Fire #4',
    author: 'George R.R. Martin',
    datePublished: 2005,
    numOfPages: 748,
    coverImage: 'https://images.gr-assets.com/books/1525084743l/147917.jpg',
    characters: [
      'https://anapioficeandfire.com/api/characters/306',
      'https://anapioficeandfire.com/api/characters/313',
      'https://anapioficeandfire.com/api/characters/315',
      'https://anapioficeandfire.com/api/characters/325',
      'https://anapioficeandfire.com/api/characters/326',
      'https://anapioficeandfire.com/api/characters/327',
      'https://anapioficeandfire.com/api/characters/338',
      'https://anapioficeandfire.com/api/characters/346',
      'https://anapioficeandfire.com/api/characters/347',
      'https://anapioficeandfire.com/api/characters/348',
      'https://anapioficeandfire.com/api/characters/1277',
      'https://anapioficeandfire.com/api/characters/1278',
      'https://anapioficeandfire.com/api/characters/1280',
      'https://anapioficeandfire.com/api/characters/1282',
      'https://anapioficeandfire.com/api/characters/1284',
      'https://anapioficeandfire.com/api/characters/1289',
      'https://anapioficeandfire.com/api/characters/1296',
      'https://anapioficeandfire.com/api/characters/1299',
      'https://anapioficeandfire.com/api/characters/1304',
      'https://anapioficeandfire.com/api/characters/1317',
      'https://anapioficeandfire.com/api/characters/1326',
      'https://anapioficeandfire.com/api/characters/1333',
      'https://anapioficeandfire.com/api/characters/1335',
      'https://anapioficeandfire.com/api/characters/1336',
      'https://anapioficeandfire.com/api/characters/1340',
      'https://anapioficeandfire.com/api/characters/1346',
      'https://anapioficeandfire.com/api/characters/1352',
      'https://anapioficeandfire.com/api/characters/1355',
      'https://anapioficeandfire.com/api/characters/1373',
      'https://anapioficeandfire.com/api/characters/1383',
      'https://anapioficeandfire.com/api/characters/1389',
      'https://anapioficeandfire.com/api/characters/1396',
      'https://anapioficeandfire.com/api/characters/1409',
      'https://anapioficeandfire.com/api/characters/1410',
      'https://anapioficeandfire.com/api/characters/1418',
      'https://anapioficeandfire.com/api/characters/1430',
      'https://anapioficeandfire.com/api/characters/1434',
      'https://anapioficeandfire.com/api/characters/1442',
      'https://anapioficeandfire.com/api/characters/1444',
      'https://anapioficeandfire.com/api/characters/1453',
      'https://anapioficeandfire.com/api/characters/1455',
      'https://anapioficeandfire.com/api/characters/1456',
      'https://anapioficeandfire.com/api/characters/1715',
      'https://anapioficeandfire.com/api/characters/1717',
      'https://anapioficeandfire.com/api/characters/1721',
      'https://anapioficeandfire.com/api/characters/1724',
      'https://anapioficeandfire.com/api/characters/1725',
      'https://anapioficeandfire.com/api/characters/1727',
      'https://anapioficeandfire.com/api/characters/1741',
      'https://anapioficeandfire.com/api/characters/1742',
      'https://anapioficeandfire.com/api/characters/1749',
      'https://anapioficeandfire.com/api/characters/1755',
      'https://anapioficeandfire.com/api/characters/1770',
      'https://anapioficeandfire.com/api/characters/1772',
      'https://anapioficeandfire.com/api/characters/1787',
      'https://anapioficeandfire.com/api/characters/1790',
      'https://anapioficeandfire.com/api/characters/1802',
      'https://anapioficeandfire.com/api/characters/1815',
      'https://anapioficeandfire.com/api/characters/1816',
      'https://anapioficeandfire.com/api/characters/1826',
      'https://anapioficeandfire.com/api/characters/1837',
      'https://anapioficeandfire.com/api/characters/2069',
      'https://anapioficeandfire.com/api/characters/2071',
      'https://anapioficeandfire.com/api/characters/2073',
      'https://anapioficeandfire.com/api/characters/2076',
      'https://anapioficeandfire.com/api/characters/2089',
      'https://anapioficeandfire.com/api/characters/2114',
      'https://anapioficeandfire.com/api/characters/2119',
      'https://anapioficeandfire.com/api/characters/2121'
    ]
  },
  {
    apiId: 8,
    title: 'A Dance with Dragons',
    seriesNumber: 'A Song Of Ice and Fire #5',
    author: 'George R.R. Martin',
    datePublished: 2011,
    numOfPages: 1040,
    coverImage: 'https://images.gr-assets.com/books/1327885335l/10664113.jpg',
    characters: [
      'https://anapioficeandfire.com/api/characters/2',
      'https://anapioficeandfire.com/api/characters/12',
      'https://anapioficeandfire.com/api/characters/13',
      'https://anapioficeandfire.com/api/characters/16',
      'https://anapioficeandfire.com/api/characters/20',
      'https://anapioficeandfire.com/api/characters/27',
      'https://anapioficeandfire.com/api/characters/31',
      'https://anapioficeandfire.com/api/characters/38',
      'https://anapioficeandfire.com/api/characters/39',
      'https://anapioficeandfire.com/api/characters/40',
      'https://anapioficeandfire.com/api/characters/41',
      'https://anapioficeandfire.com/api/characters/42',
      'https://anapioficeandfire.com/api/characters/46',
      'https://anapioficeandfire.com/api/characters/54',
      'https://anapioficeandfire.com/api/characters/56',
      'https://anapioficeandfire.com/api/characters/57',
      'https://anapioficeandfire.com/api/characters/60',
      'https://anapioficeandfire.com/api/characters/61',
      'https://anapioficeandfire.com/api/characters/62',
      'https://anapioficeandfire.com/api/characters/66',
      'https://anapioficeandfire.com/api/characters/67',
      'https://anapioficeandfire.com/api/characters/69',
      'https://anapioficeandfire.com/api/characters/79',
      'https://anapioficeandfire.com/api/characters/89',
      'https://anapioficeandfire.com/api/characters/107',
      'https://anapioficeandfire.com/api/characters/115',
      'https://anapioficeandfire.com/api/characters/1245',
      'https://anapioficeandfire.com/api/characters/1247',
      'https://anapioficeandfire.com/api/characters/1253',
      'https://anapioficeandfire.com/api/characters/1260',
      'https://anapioficeandfire.com/api/characters/1262',
      'https://anapioficeandfire.com/api/characters/1265',
      'https://anapioficeandfire.com/api/characters/1266',
      'https://anapioficeandfire.com/api/characters/1267',
      'https://anapioficeandfire.com/api/characters/1268',
      'https://anapioficeandfire.com/api/characters/1269',
      'https://anapioficeandfire.com/api/characters/1275',
      'https://anapioficeandfire.com/api/characters/1277',
      'https://anapioficeandfire.com/api/characters/1278',
      'https://anapioficeandfire.com/api/characters/1280',
      'https://anapioficeandfire.com/api/characters/1282',
      'https://anapioficeandfire.com/api/characters/1284',
      'https://anapioficeandfire.com/api/characters/1289',
      'https://anapioficeandfire.com/api/characters/1296',
      'https://anapioficeandfire.com/api/characters/1299',
      'https://anapioficeandfire.com/api/characters/1304'
    ]
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
const initialState = {
  bookInfo: {},
  allHouses: {},
  allChars: {},
  housesLoaded: false,
  charsLoaded: false,
  charsInBook: [],
  charInfo: {},
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
