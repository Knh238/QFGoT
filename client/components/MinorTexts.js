import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import AddIcon from '@material-ui/icons/Add';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
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

class MinorTexts extends React.Component {
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
    const mainBooks = this.props.minorBooksArr;
    console.log('main books arr', mainBooks);
    return mainBooks.map(book => (
      <Card
        style={{
          width: '40%'
        }}
        key={book.apiId}
      >
        <CardContent>
          <Typography
            variant="h2"
            style={{ fontFamily: 'Pirata One, cursive', color: '#54bd9f' }}
            align="center"
          >
            {book.title}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography
            variant="h4"
            style={{ fontFamily: 'Marck Script,cursive', fontWeight: 'bold' }}
            align="center"
          >
            {book.author}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography
            variant="h4"
            style={{ fontFamily: 'Pirata One, cursive', color: '#22949f' }}
          >
            pages: {book.numOfPages}
          </Typography>
          <Typography
            variant="h4"
            style={{ fontFamily: 'Pirata One, cursive', color: '#22949f' }}
          >
            published:{book.datePublished}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography
            variant="h4"
            style={{
              fontFamily: 'Marck Script,cursive',
              color: '#dab239',
              fontWeight: 'bold'
            }}
            align="center"
          >
            type: {book.mediaType}
          </Typography>
        </CardContent>
        <CardContent align="center">
          <Button
            variant="contained"
            style={{
              backgroundColor: '#2d3258',
              fontFamily: 'Pirata One, cursive',
              fontSize: 40,
              color: 'white'
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
            characters in this book
          </Button>
        </CardContent>
      </Card>
    ));
  }
  render() {
    const { classes } = this.props;

    return (
      <div>
        <div>
          <Card style={{ backgroundColor: '#080e28' }}>
            <CardContent>
              <Typography
                variant="h2"
                style={{ fontFamily: 'Pirata One, cursive' }}
                align="center"
              >
                Novellas, Graphic Novels, & Companion Works
              </Typography>
            </CardContent>
          </Card>
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
              variant="h2"
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
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    allHouses: state.allHouses,
    minorBooksArr: state.minorBooksArr,
    allChars: state.allChars
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getHouseList: () => dispatch(getHouseList())
  };
};
MinorTexts.propTypes = {
  classes: PropTypes.object.isRequired
};
export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles, { withTheme: true })(MinorTexts)
);
