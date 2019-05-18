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
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

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
    this.state = { charsArr: [], currentPage: 1 };
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
        self.setState({ charsArr: res.data, gender: currGender });
      });
  }
  loadNextHouses() {
    const newPage = (this.state.currentPage += 1);
    //add error handling so it wont go above 24
    const currGenderN = this.state.gender;
    const self = this;
    return axios
      .get(
        `https://www.anapioficeandfire.com/api/characters?page=${newPage}&pageSize=50&gender=${currGenderN}`
      )
      .then(function(res) {
        self.setState({ charsArr: res.data, currentPage: newPage });
      });
  }
  loadPrevHouses() {
    const newPage = (this.state.currentPage -= 1);
    //add error handling so it wont go below or to 0
    const self = this;
    const currGenderP = this.state.gender;
    return axios
      .get(
        `https://www.anapioficeandfire.com/api/characters?page=${newPage}&pageSize=50&gender=${currGenderP}`
      )
      .then(function(res) {
        self.setState({ charsArr: res.data, currentPage: newPage });
      });
  }

  renderBooks(booksStr) {
    const charsArr = this.state.charsArr;
    const bookList = this.props.bookList;
    const appearsInBooks = [];
    const bookIds = booksStr.map(item => item.slice(44));
    console.log('book ids', bookIds);
    if (bookIds.length > 1) {
      return bookIds.map(id => (
        <CardContent>
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
        <CardContent>
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

  renderChars() {
    const charsArr = this.state.charsArr;
    return charsArr.map(person => (
      <Card
        style={{
          width: '40%'
        }}
        key={person.name}
      >
        <CardContent align="center">
          <Typography
            variant="h2"
            style={{ fontFamily: 'Pirata One, cursive', color: '#54bd9f' }}
            align="center"
          >
            {person.name}
          </Typography>
        </CardContent>
        <CardContent align="center">
          {person.titles.length > 1 ? (
            <Typography
              variant="h3"
              style={{ fontFamily: 'Marck Script,cursive', color: '#dab239' }}
              align="center"
            >
              {person.titles}
            </Typography>
          ) : null}
        </CardContent>
        <CardContent align="center">
          {person.aliases.length > 1 ? (
            <Typography
              variant="h3"
              style={{ fontFamily: 'Marck Script,cursive', color: '#dab239' }}
              align="center"
            >
              {person.aliases}
            </Typography>
          ) : null}
        </CardContent>
        <CardContent>
          <Typography
            variant="h4"
            style={{ fontFamily: 'Marck Script,cursive' }}
          >
            {person.gender}
          </Typography>
        </CardContent>

        <CardContent>
          {person.born.length > 1 ? (
            <Typography
              variant="h4"
              style={{ fontFamily: 'Pirata One, cursive' }}
            >
              Born: {person.born}
            </Typography>
          ) : null}
          {person.died.length > 1 ? (
            <Typography
              variant="h4"
              style={{ fontFamily: 'Pirata One, cursive' }}
            >
              Died: {person.died}
            </Typography>
          ) : null}
        </CardContent>

        {person.tvSeries.length > 1 ? (
          <CardContent>
            <Typography
              variant="h3"
              style={{ fontFamily: 'Pirata One, cursive', color: '#22949f' }}
            >
              Featured in: {this.renderTVList(person.tvSeries)}
            </Typography>
            <Typography
              variant="h3"
              style={{ fontFamily: 'Marck Script,cursive', color: '#22949f' }}
              align="center"
            >
              Played By: {person.playedBy}
            </Typography>
          </CardContent>
        ) : null}
        {person.books.length > 1 ? (
          <CardContent>
            <Typography
              variant="h4"
              style={{ fontFamily: 'Pirata One, cursive', color: '#22949f' }}
            >
              Appears in Books:
            </Typography>
            {this.renderBooks(person.books)}
          </CardContent>
        ) : null}
      </Card>
    ));
  }
  render() {
    const { classes } = this.props;
    const cultureName = this.props.location.state.gender;
    return (
      <Paper>
        <Card style={{ backgroundColor: '#2e4b77' }}>
          <CardContent align="center">
            <Typography
              variant="h1"
              style={{ fontFamily: 'Pirata One, cursive', color: '#dab239' }}
              align="center"
            >
              {cultureName} Characters
            </Typography>
          </CardContent>
        </Card>
        <div
          style={{
            marginLeft: '10%',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center'
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
                variant="h4"
                style={{ fontFamily: 'Uncial Antiqua, cursive' }}
                align="center"
              >
                current page: {this.state.currentPage} of{' '}
                {this.state.gender === 'Female' ? 10 : 34}
              </Typography>
            </CardContent>
            <CardContent align="center">
              <Button
                variant="contained"
                style={{
                  backgroundColor: '#54bd9f',
                  fontFamily: 'Uncial Antiqua, cursive',
                  marginRight: 10
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
                  backgroundColor: '#54bd9f',
                  fontFamily: 'Uncial Antiqua, cursive'
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
    allCutlures: state.allCutlures
  };
};

CharsByGender.propTypes = {
  classes: PropTypes.object.isRequired
};
export default connect(mapStateToProps, null)(
  withStyles(styles, { withTheme: true })(CharsByGender)
);
