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

class BookChars extends React.Component {
  constructor(props) {
    super(props);
    this.state = { charsArr: [], currentPage: 1 };
    this.renderChars = this.renderChars.bind(this);
  }

  componentDidMount() {
    const self = this;
    const bookId = this.props.location.state.bookId;
    return axios
      .get(`https://www.anapioficeandfire.com/api/books/${bookId}`)
      .then(function(res) {
        self.setState({ charsArr: res.data.characters, title: res.data.title });
      });
  }
  renderChars() {
    const allChars = this.props.allChars;
    const charsArr = this.state.charsArr;
    const bookCast = [];
    charsArr.forEach(person => bookCast.push(person.slice(49)));
    console.log('book cast arr', bookCast);

    return bookCast.map(person => (
      <Card
        style={{
          width: '40%'
        }}
        key={person}
      >
        {person !== '' ? (
          <CardContent align="center">
            <Button
              variant="contained"
              style={{
                backgroundColor: '#54bd9f',
                fontFamily: 'Uncial Antiqua, cursive',
                fontSize: 35,
                borderRadius: 15,
                fontWeight: 'bold'
              }}
              component={Link}
              to={{
                pathname: '/IndividualChar',
                state: {
                  charId: person
                }
              }}
            >
              {allChars[person] ? allChars[person].name : null}
            </Button>
          </CardContent>
        ) : null}
        {/* <Button color:color: '#54bd9f'/> */}
        {/* <Typography
              variant="h2"
              style={{ fontFamily: 'Pirata One, cursive', color: '#54bd9f' }}
              align="center"
            >
              {allChars[person] ? allChars[person].name || '' : null}
            </Typography>
          </CardContent> */}
        {/* ) : null} */}
      </Card>
    ));
  }
  render() {
    const { classes } = this.props;
    const bookName = this.props.location.state.bookTitle;
    return (
      <Paper>
        <Card>
          <CardContent align="center">
            <Typography
              variant="h1"
              style={{ fontFamily: 'Pirata One, cursive', color: '#dab239' }}
              align="center"
            >
              {bookName} Characters
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
        />
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
    allCutlures: state.allCutlures,
    allChars: state.allChars
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBookList: id => dispatch(getBookList(id))
  };
};

BookChars.propTypes = {
  classes: PropTypes.object.isRequired
};
export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles, { withTheme: true })(BookChars)
);
