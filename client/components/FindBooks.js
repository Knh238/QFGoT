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
import { getBookList } from '../store/booksReducer';
import { Link } from 'react-router-dom';

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

const searchOptions = [
  {
    value: 'author',
    label: 'By author'
  },
  {
    value: 'title',
    label: 'By title'
  },
  {
    value: 'ibsn',
    label: 'By ibsn'
  },
  {
    value: 'bookkey',
    label: 'By book key'
  }
];

class FindBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchType: '', searchTerm: '', error: '' };
  }

  componentDidMount() {
    this.setState({ books: this.props.bookList });
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleSubmit() {
    const bookList = this.props.bookList;
    const searchType = this.state.searchType;
    const searchInfo = this.state.searchTerm;

    const booksFiltered = bookList.filter(
      item => item[searchType] === `${searchInfo}`
    );

    if (booksFiltered.length) {
      this.props.history.push(`/SingleBook`, booksFiltered[0]);
      this.setState({ searchType: '', searchTerm: '' });
    } else {
      this.setState({
        searchType: '',
        searchTerm: '',
        error: `book ${searchInfo} with ${searchType} Not found!Try again!`
      });
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <Card
        style={{
          float: 'none',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      >
        <Typography
          variant="h3"
          style={{ fontFamily: 'Signika' }}
          align="center"
        >
          Find a book!
        </Typography>
        <CardContent align="center">
          <CardMedia
            component="img"
            style={{ height: '30%', width: '20%' }}
            image="https://cdn130.picsart.com/289256017027201.jpg?c480x480"
            title="key"
          />
        </CardContent>
        {this.state.error ? (
          <Card style={{ backgroundColor: 'pink' }}>
            <CardContent>
              <Typography
                variant="h3"
                style={{ fontFamily: 'Signika' }}
                align="center"
              >
                {this.state.error}
              </Typography>
            </CardContent>
          </Card>
        ) : null}

        <CardContent align="center">
          <form>
            <TextField
              id="searchByTextField"
              select
              label="Search By"
              className={classes.textField}
              value={this.state.searchType}
              onChange={this.handleChange('searchType')}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
              helperText="Please select your search type"
              margin="normal"
              variant="outlined"
            >
              {searchOptions.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-multiline-flexible"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              value={this.state.searchTerm}
              onChange={event =>
                this.setState({ searchTerm: event.target.value })
              }
              margin="normal"
              variant="outlined"
            />
          </form>
        </CardContent>
        <CardContent align="center">
          <Button
            variant="contained"
            style={{ backgroundColor: '#ef9a9a' }}
            onClick={() => this.handleSubmit()}
          >
            Submit
          </Button>
        </CardContent>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    bookList: state.bookList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBookList: id => dispatch(getBookList(id))
  };
};

FindBooks.propTypes = {
  classes: PropTypes.object.isRequired
};
export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles, { withTheme: true })(FindBooks)
);
