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

  dense: {
    marginTop: 16
  }
});

class SingleCharView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { charInfo: {} };
    this.renderBooks = this.renderBooks.bind(this);
    this.renderTVList = this.renderTVList.bind(this);
  }

  componentDidMount() {
    const self = this;
    const charId = this.props.location.state.charId;
    const charName = this.props.location.state.charName;
    console.log('character id in the single var view is '.charId);
    return axios
      .get(`https://www.anapioficeandfire.com/api/characters/${charId}`)
      .then(function(res) {
        self.setState({
          charInfo: res.data
        });
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

  render() {
    const person = this.state.charInfo;

    return (
      <Paper>
        {person.name ? (
          <Card
            style={{
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
            align="center"
            key={person.name}
          >
            <CardContent align="center" style={{ backgroundColor: '#22949f' }}>
              {person.name === '' ? (
                <Typography
                  variant="h2"
                  style={{
                    fontFamily: 'Pirata One, cursive',
                    color: '#424242'
                  }}
                  align="center"
                >
                  unknown
                </Typography>
              ) : (
                <Typography
                  variant="h2"
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
                  variant="h4"
                  align="center"
                  style={{
                    fontFamily: 'Pirata One, cursive',
                    color: '#54bd9f'
                  }}
                >
                  also known as:
                </Typography>
                {this.renderAlias(person.aliases)}
              </CardContent>
            ) : null}
            <CardContent>
              <Typography variant="h4" style={{ fontFamily: 'Signika' }}>
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
            {person.culture.length > 1 ? (
              <CardContent style={{ display: 'flex', flexDirection: 'row' }}>
                <Typography
                  variant="h4"
                  style={{
                    fontFamily: 'Pirata One, cursive',
                    color: '#22949f'
                  }}
                >
                  Culture :
                </Typography>
                <Typography
                  variant="h4"
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
                  style={{
                    fontFamily: 'Marck Script,cursive',
                    color: '#dab239'
                  }}
                  align="center"
                >
                  {person.playedBy}
                </Typography>
              </CardContent>
            ) : null}
            {person.books.length > 1 ? (
              <CardContent>
                <Typography
                  variant="h4"
                  style={{
                    fontFamily: 'Pirata One, cursive',
                    color: '#22949f'
                  }}
                >
                  Appears in Books:
                </Typography>
                {this.renderBooks(person.books)}
              </CardContent>
            ) : null}
            {person.allegiances.length > 1 ? (
              <CardContent>
                <Typography
                  variant="h4"
                  style={{
                    fontFamily: 'Pirata One, cursive',
                    color: '#dab239'
                  }}
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
        ) : null}
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

SingleCharView.propTypes = {
  classes: PropTypes.object.isRequired
};
export default connect(mapStateToProps, null)(
  withStyles(styles, { withTheme: true })(SingleCharView)
);
