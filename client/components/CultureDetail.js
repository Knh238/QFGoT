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
              Featured in: {person.tvSeries}
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
              style={{ fontFamily: 'Pirata One, cursive' }}
            >
              Appears in: {person.books}
              {/* books.slice(44) would give us just the number */}
            </Typography>
          </CardContent>
        ) : null}
      </Card>
    ));
  }
  render() {
    const { classes } = this.props;
    const cultureName = this.props.location.state.cultureName;
    return (
      <Paper>
        <Card>
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
