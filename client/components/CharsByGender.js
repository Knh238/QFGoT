import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import { Link } from 'react-router-dom';
import axios from 'axios';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  card: {
    maxWidth: 345,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
});

class CharsByGender extends React.Component {
  constructor(props) {
    super(props);
    this.state = { charsArr: [], currentPage: 1, maxPage: 1 };
    this.loadNextHouses = this.loadNextHouses.bind(this);
    this.loadPrevHouses = this.loadPrevHouses.bind(this);
    this.renderBooks = this.renderBooks.bind(this);
    this.renderTVList = this.renderTVList.bind(this);
  }

  componentDidMount() {
    const self = this;
    const currPage = this.state.currentPage;

    const currGender = this.props.location.state.gender;
    return axios
      .get(
        `https://www.anapioficeandfire.com/api/characters?page=${currPage}&pageSize=50&gender=${currGender}`
      )
      .then(function(res) {
        if (currGender === 'Female') {
          self.setState({
            charsArr: res.data,
            gender: currGender,
            maxPage: 10
          });
        } else {
          self.setState({
            charsArr: res.data,
            gender: currGender,
            maxPage: 34
          });
        }
      });
  }
  loadNextHouses() {
    let oldPage = this.state.currentPage;
    let newPage = oldPage++;
    const currGenderN = this.state.gender;
    const currMax = this.state.maxPage;
    const self = this;
    if (oldPage < currMax) {
      return axios
        .get(
          `https://www.anapioficeandfire.com/api/characters?page=${newPage}&pageSize=50&gender=${currGenderN}`
        )
        .then(function(res) {
          self.setState({ charsArr: res.data, currentPage: newPage });
        });
    }
  }
  loadPrevHouses() {
    let currPage = this.state.currentPage;
    if (currPage > 1) {
      let newCurrPage = currPage--;
      const self = this;
      const currGenderP = this.state.gender;
      return axios
        .get(
          `https://www.anapioficeandfire.com/api/characters?page=${newCurrPage}&pageSize=50&gender=${currGenderP}`
        )
        .then(function(res) {
          self.setState({ charsArr: res.data, currentPage: newCurrPage });
        });
    }
  }

  renderBooks(booksStr) {
    const bookList = this.props.bookList;
    const bookIds = booksStr.map(item => item.slice(44));
    if (bookIds.length > 1) {
      return bookIds.map(id => (
        <CardContent align="center" key={id}>
          <Typography
            variant="h4"
            style={{ fontFamily: 'Pirata One, cursive' }}
          >
            {bookList[id].title}
          </Typography>
        </CardContent>
      ));
    }
  }

  renderTVList(seasons) {
    if (seasons.length > 1) {
      return seasons.map(season => (
        <CardContent align="center" key={season}>
          <Typography
            variant="h4"
            style={{ fontFamily: 'Pirata One, cursive' }}
          >
            {season}
          </Typography>
        </CardContent>
      ));
    }
  }
  renderHouse(houses) {
    const allHouses = this.props.allHouses;
    const houseIds = houses.map(item => item.slice(45));
    if (houseIds.length > 1) {
      return houseIds.map(house => (
        <CardContent align="center" key={house}>
          <Button
            variant="contained"
            style={{
              backgroundColor: '#54bd9f',
              fontFamily: 'Uncial Antiqua, cursive',
              fontWeight: 'bold'
            }}
            component={Link}
            to={{
              pathname: '/IndividualHouse',
              state: {
                houseId: house
              }
            }}
          >
            {allHouses[house].name}
          </Button>
        </CardContent>
      ));
    }
  }
  renderAlias(aliases) {
    if (aliases.length > 1) {
      return aliases.map(alias => (
        <CardContent align="center" key={alias}>
          <Typography
            variant="h3"
            style={{
              fontFamily: 'Marck Script,cursive',
              color: '#ffee58'
            }}
          >
            {alias}
          </Typography>
        </CardContent>
      ));
    }
  }
  renderTitles(titles) {
    if (titles.length > 1) {
      return titles.map(title => (
        <CardContent key={title}>
          <Typography
            variant="h4"
            style={{ fontFamily: 'Pirata One, cursive', color: '#dab239' }}
          >
            {title}
          </Typography>
        </CardContent>
      ));
    }
  }

  renderChars() {
    const charsArr = this.state.charsArr;
    return charsArr.map(person => (
      <Card
        style={{
          width: '30%',
          marginRight: 5,
          marginTop: 10
        }}
        raised={true}
        key={person.name}
      >
        <CardContent align="center" style={{ backgroundColor: '#22949f' }}>
          {person.name === '' ? (
            <Typography
              variant="h3"
              style={{ fontFamily: 'Pirata One, cursive', color: '#424242' }}
              align="center"
            >
              unknown
            </Typography>
          ) : (
            <Typography
              variant="h3"
              style={{ fontFamily: 'Pirata One, cursive' }}
              align="center"
            >
              {person.name}
            </Typography>
          )}
        </CardContent>

        {person.aliases.length > 1 ? (
          <CardContent>
            <Typography
              variant="h5"
              align="center"
              style={{ fontFamily: 'Pirata One, cursive', color: '#54bd9f' }}
            >
              also known as:
            </Typography>
            {this.renderAlias(person.aliases)}
          </CardContent>
        ) : null}

        <CardContent>
          <Typography variant="h5" style={{ fontFamily: 'Signika' }}>
            {person.gender}
          </Typography>
        </CardContent>

        <CardContent>
          {person.born.length > 1 ? (
            <Typography variant="h5" style={{ fontFamily: 'Signika' }}>
              Born: {person.born}
            </Typography>
          ) : null}
          {person.died.length > 1 ? (
            <Typography variant="h5" style={{ fontFamily: 'Signika' }}>
              Died: {person.died}
            </Typography>
          ) : null}
        </CardContent>
        {person.titles.length > 1 ? (
          <CardContent>
            <Typography
              variant="h5"
              style={{
                fontFamily: 'Pirata One, cursive',
                color: '#22949f'
              }}
            >
              Titles:
            </Typography>
            {this.renderTitles(person.titles)}
          </CardContent>
        ) : null}
        {person.culture.length > 1 ? (
          <CardContent style={{ display: 'flex', flexDirection: 'row' }}>
            <Typography
              variant="h5"
              style={{
                fontFamily: 'Pirata One, cursive',
                color: '#22949f'
              }}
            >
              Culture :
            </Typography>
            <Typography
              variant="h5"
              style={{
                fontFamily: 'Pirata One, cursive'
              }}
            >
              {person.culture}
            </Typography>
          </CardContent>
        ) : null}
        {person.tvSeries.length > 1 ? (
          <CardContent>
            <Typography
              variant="h5"
              style={{
                fontFamily: 'Pirata One, cursive',
                color: '#22949f'
              }}
            >
              Featured in TV Series:
            </Typography>
            {this.renderTVList(person.tvSeries)}
            <Typography
              align="center"
              variant="h4"
              style={{
                fontFamily: 'Pirata One, cursive',
                color: '#54bd9f'
              }}
            >
              Played By:
            </Typography>
            <Typography
              variant="h4"
              style={{ fontFamily: 'Marck Script,cursive', color: '#dab239' }}
              align="center"
            >
              {person.playedBy}
            </Typography>
          </CardContent>
        ) : null}
        {person.books.length > 1 ? (
          <CardContent>
            <Typography
              variant="h5"
              style={{ fontFamily: 'Pirata One, cursive', color: '#22949f' }}
            >
              Appears in Books:
            </Typography>
            {this.renderBooks(person.books)}
          </CardContent>
        ) : null}
        {person.allegiances.length > 1 ? (
          <CardContent>
            <Typography
              variant="h5"
              style={{ fontFamily: 'Pirata One, cursive', color: '#dab239' }}
            >
              Allied With:
            </Typography>
            {this.renderHouse(person.allegiances)}
          </CardContent>
        ) : null}
        <CardContent alignSelf="flex-end">
          <Typography
            variant="h5"
            style={{
              fontFamily: 'Signika',
              float: 'right',
              fontWeight: 'bold'
            }}
          >
            api id: {person.url.slice(49)}
          </Typography>
        </CardContent>
      </Card>
    ));
  }
  render() {
    const { classes } = this.props;
    const cultureName = this.props.location.state.gender;
    return (
      <Paper>
        <Card align="center">
          <CardContent align="center" style={{ backgroundColor: '#2e4b77' }}>
            <Typography
              variant="h2"
              style={{ fontFamily: 'Pirata One, cursive', color: '#dab239' }}
              align="center"
            >
              {cultureName} Characters
            </Typography>
          </CardContent>
          {cultureName === 'Female' ? (
            <CardContent>
              <CardMedia
                component="img"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7d99oQHo4ks3wHeIVp-lJwpS-5q9rzoWv7RySzy-qNQFgTGKP"
                title="key"
                style={{ height: '40%', width: '30%' }}
              />
            </CardContent>
          ) : (
            <CardContent>
              <CardMedia
                component="img"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrz1HCHooHNzhKdS11b1ycBzzX32-yBQIA9og7wQ8DsjVAlZqDwA"
                title="key"
                style={{ height: '40%', width: '30%' }}
              />
            </CardContent>
          )}
        </Card>
        <div
          style={{
            marginLeft: '10%',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around'
          }}
        >
          {this.renderChars()}
        </div>
        <div
          style={{
            marginLeft: '10%',
            display: 'flex',
            height: '15%',
            justifyContent: 'center',
            marginTop: 5
          }}
        >
          <Card>
            <CardContent>
              <Typography
                variant="h5"
                style={{ fontFamily: 'Uncial Antiqua, cursive' }}
                align="center"
              >
                current page: {this.state.currentPage} of {this.state.maxPage}
              </Typography>
            </CardContent>
            <CardContent align="center">
              <Button
                variant="contained"
                style={{
                  backgroundColor: '#dab239',
                  fontFamily: 'Uncial Antiqua, cursive',
                  marginRight: 10,
                  fontSize: 40
                }}
                align="center"
                onClick={this.loadPrevHouses}
              >
                <KeyboardArrowLeftIcon />
                previous 50
              </Button>
              <Button
                variant="contained"
                style={{
                  backgroundColor: '#dab239',
                  fontFamily: 'Uncial Antiqua, cursive',
                  fontSize: 40
                }}
                align="center"
                onClick={this.loadNextHouses}
              >
                next 50
                <KeyboardArrowRightIcon />
              </Button>
            </CardContent>
          </Card>
        </div>
      </Paper>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    bookList: state.allBooks,
    allHouses: state.allHouses,
    regionsArr: state.regionsArr,
    allCultures: state.allCultures
  };
};

CharsByGender.propTypes = {
  classes: PropTypes.object.isRequired
};
export default connect(mapStateToProps, null)(
  withStyles(styles, { withTheme: true })(CharsByGender)
);
