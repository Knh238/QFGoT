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
import { getBookList } from '../store/booksReducer';
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

class CultureDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { charsArr: [], region: '' };
  }

  componentDidMount() {
    const self = this;

    const cultureName = this.props.location.state.cultureName;
    return axios
      .get(
        `https://www.anapioficeandfire.com/api/characters?page=1&pageSize=50&culture=${cultureName}`
      )
      .then(function(res) {
        self.setState({ charsArr: res.data });
      });
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
        <CardContent key={house}>
          <Button
            variant="contained"
            style={{
              backgroundColor: '#22949f',
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
              color: '#dab239'
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
          width: '40%',
          backgroundColor: '#080e28',
          marginRight: 2
        }}
        key={person.name}
      >
        <CardContent align="center" style={{ backgroundColor: '#2d3258' }}>
          <Typography
            variant="h2"
            style={{ fontFamily: 'Pirata One, cursive' }}
            align="center"
          >
            {person.name}
          </Typography>
        </CardContent>

        {person.aliases.length > 1 ? (
          <CardContent>
            <Typography
              variant="h4"
              align="center"
              style={{ fontFamily: 'Pirata One, cursive', color: '#22949f' }}
            >
              also known as:
            </Typography>
            {this.renderAlias(person.aliases)}
          </CardContent>
        ) : null}
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
            <Typography variant="h4" style={{ fontFamily: 'Signika' }}>
              Born: {person.born}
            </Typography>
          ) : null}
          {person.died.length > 1 ? (
            <Typography variant="h4" style={{ fontFamily: 'Signika' }}>
              Died: {person.died}
            </Typography>
          ) : null}
        </CardContent>
        {person.titles.length > 1 ? (
          <CardContent>
            <Typography
              variant="h4"
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
        {person.tvSeries.length > 1 ? (
          <CardContent>
            <Typography
              variant="h4"
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
              variant="h3"
              style={{
                fontFamily: 'Pirata One, cursive',
                color: '#54bd9f'
              }}
            >
              Played By:
            </Typography>
            <Typography
              variant="h3"
              style={{ fontFamily: 'Marck Script,cursive', color: '#dab239' }}
              align="center"
            >
              {person.playedBy}
            </Typography>
          </CardContent>
        ) : null}
        {person.allegiances.length > 1 ? (
          <CardContent>
            <Typography
              variant="h4"
              style={{ fontFamily: 'Pirata One, cursive', color: '#54bd9f' }}
            >
              Allied With:
            </Typography>
            {this.renderHouse(person.allegiances)}
          </CardContent>
        ) : null}
        <CardContent alignSelf="flex-end">
          <Typography
            variant="h4"
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
    const cultureName = this.props.location.state.cultureName;
    return (
      <Paper>
        <Card>
          <CardContent align="center" style={{ backgroundColor: '#080e28' }}>
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
            marginLeft: '15%',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          {this.renderChars()}
        </div>
      </Paper>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    bookList: state.bookList,
    allHouses: state.allHouses,
    regionsArr: state.regionsArr,
    allCutlures: state.allCutlures
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBookList: id => dispatch(getBookList(id))
  };
};

CultureDetail.propTypes = {
  classes: PropTypes.object.isRequired
};
export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles, { withTheme: true })(CultureDetail)
);
