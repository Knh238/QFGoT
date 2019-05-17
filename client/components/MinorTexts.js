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

  componentDidMount() {
    const self = this;
    // const currPage = this.state.currentPage;
    // const allHouses = this.props.allHouses;

    // return axios
    //   .get(`https://www.anapioficeandfire.com/api/books/1`)
    //   .then(function(res) {
    //     self.setState({ housesArr: res.data, houseList: allHouses });
    //   });
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
        {/* <CardContent>
          <CardMedia
            component="img"
            // style={{ height: '40%', width: '20%' }}
            image={book.coverImage}
            title="key"
          />
        </CardContent> */}
        <CardContent>
          <Typography
            variant="h2"
            style={{ fontFamily: 'Pirata One, cursive' }}
            align="center"
          >
            {book.title}
          </Typography>
          <Typography
            variant="h3"
            style={{ fontFamily: 'Marck Script,cursive' }}
            align="center"
          >
            {book.seriesNumber}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography
            variant="h4"
            style={{ fontFamily: 'Pirata One, cursive' }}
            align="center"
          >
            author: {book.author}
          </Typography>
          <Typography
            variant="h4"
            style={{ fontFamily: 'Pirata One, cursive' }}
            align="center"
          >
            pages: {book.numOfPages}
          </Typography>
          <Typography
            variant="h4"
            style={{ fontFamily: 'Pirata One, cursive' }}
            align="center"
          >
            published:{book.datePublished}
          </Typography>
        </CardContent>
      </Card>
    ));
  }
  render() {
    const { classes } = this.props;

    return (
      <div>
        <div>
          <Card>
            <CardContent>
              <Typography
                variant="h4"
                style={{ fontFamily: 'Uncial Antiqua, cursive' }}
                align="center"
              >
                other novellas, graphic novels, and companion texts
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
          {/* https://www.goodreads.com/series/43790-a-song-of-ice-and-fire */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    allHouses: state.allHouses,
    minorBooksArr: state.minorBooksArr
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
