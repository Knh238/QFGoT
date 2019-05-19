import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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

class BookChars extends React.Component {
  constructor(props) {
    super(props);
    this.state = { charsArr: [] };
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

    return bookCast.map(person => (
      <Card
        style={{
          width: '20%',
          marginTop: 10
        }}
        elevation={0}
        key={person}
      >
        {person !== '' ? (
          <CardContent align="center">
            <Button
              variant="contained"
              style={{
                backgroundColor: '#2e4b77',
                fontFamily: 'Uncial Antiqua, cursive',
                fontSize: 15,
                borderRadius: 5,
                fontWeight: 'bold',
                color: 'white'
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
      </Card>
    ));
  }
  render() {
    const { classes } = this.props;
    const bookName = this.props.location.state.bookTitle;
    return (
      <Paper style={{ marginLeft: 210 }}>
        <Card>
          <CardContent align="center" style={{ backgroundColor: '#2e4b77' }}>
            <Typography
              variant="h3"
              style={{ fontFamily: 'Pirata One, cursive', color: '#dab239' }}
              align="center"
            >
              {bookName} Characters
            </Typography>
          </CardContent>
          <CardContent align="center" style={{ backgroundColor: '#2e4b77' }}>
            <Typography
              variant="h3"
              style={{ fontFamily: 'Pirata One, cursive', color: '#dab239' }}
              align="center"
            >
              Click on character name for more info!
            </Typography>
          </CardContent>
        </Card>
        <div
          style={{
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

BookChars.propTypes = {
  classes: PropTypes.object.isRequired
};
export default connect(mapStateToProps, null)(
  withStyles(styles, { withTheme: true })(BookChars)
);
