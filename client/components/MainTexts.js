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
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getHouseList } from '../store/booksReducer';

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

class MainTexts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      housesArr: [],
      houseList: {},
      currentPage: 1
    };
    this.renderBooks = this.renderBooks.bind(this);
  }

  renderBooks() {
    const mainBooks = this.props.mainBooksArr;
    return mainBooks.map(book => (
      <Card
        style={{
          width: '40%',
          height: '20%',
          marginTop: 10
        }}
        raised={true}
        key={book.apiId}
      >
        <CardContent align="center">
          <CardMedia
            component="img"
            image={book.coverImage}
            style={{
              width: '40%',
              height: '20%'
            }}
            title="key"
          />
        </CardContent>
        <CardContent>
          <Typography
            variant="h3"
            style={{ fontFamily: 'Pirata One, cursive', color: '#dab239' }}
            align="center"
          >
            {book.title}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography
            variant="h4"
            style={{ fontFamily: 'Marck Script,cursive', color: '#54bd9f' }}
            align="center"
          >
            {book.seriesNumber}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography
            variant="h5"
            style={{ fontFamily: 'Pirata One, cursive', color: '#22949f' }}
            align="center"
          >
            {book.author}
          </Typography>
        </CardContent>
        <CardContent style={{ display: 'flex', flexDirection: 'row' }}>
          <Typography
            variant="h5"
            style={{ fontFamily: 'Pirata One, cursive' }}
          >
            pages:
          </Typography>
          <Typography
            variant="h5"
            style={{ fontFamily: 'Signika', paddingLeft: 10 }}
          >
            {book.numOfPages}
          </Typography>
        </CardContent>
        <CardContent style={{ display: 'flex', flexDirection: 'row' }}>
          <Typography
            variant="h5"
            style={{ fontFamily: 'Pirata One, cursive' }}
          >
            Published:
          </Typography>
          <Typography
            variant="h5"
            style={{ fontFamily: 'Signika', paddingLeft: 10 }}
          >
            {book.datePublished}
          </Typography>
        </CardContent>
        <CardContent align="center">
          <Button
            variant="contained"
            style={{
              backgroundColor: '#2e4b77',
              fontFamily: 'Uncial Antiqua, cursive',
              fontSize: 20,
              color: 'white',
              boderRadius: 15
            }}
            component={Link}
            to={{
              pathname: '/CharsByBook',
              state: {
                bookId: book.apiId,
                bookTitle: book.title
              }
            }}
          >
            List of characters in this book
          </Button>
        </CardContent>
      </Card>
    ));
  }
  render() {
    const { classes } = this.props;

    return (
      <Paper style={{ marginLeft: 210 }}>
        <Card style={{ backgroundColor: '#080e28' }}>
          <CardContent>
            <Typography
              variant="h3"
              style={{ fontFamily: 'Uncial Antiqua, cursive' }}
              align="center"
            >
              Novels
            </Typography>
          </CardContent>
        </Card>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            marginTop: 5
          }}
        >
          {this.renderBooks()}
        </div>
        <Card style={{ backgroundColor: '#dab239' }}>
          <CardContent
            style={{
              border: 2,
              borderColor: 'white'
            }}
          >
            <Typography
              variant="h3"
              style={{
                fontFamily: 'Pirata One, cursive',
                color: '#2d3258'
              }}
              align="center"
            >
              Read more @
              <a
                target="_blank"
                href="https://www.goodreads.com/series/43790-a-song-of-ice-and-fire"
              >
                Goodreads
              </a>
            </Typography>
          </CardContent>
        </Card>
      </Paper>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    allHouses: state.allHouses,
    mainBooksArr: state.mainBooksArr,
    allChars: state.allChars
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getHouseList: () => dispatch(getHouseList())
  };
};
MainTexts.propTypes = {
  classes: PropTypes.object.isRequired
};
export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles, { withTheme: true })(MainTexts)
);
