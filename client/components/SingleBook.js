import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
class SingleBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.formatDescription = this.formatDescription.bind(this);
  }
  componentDidMount() {
    const bookInfo = this.props.location.state;

    this.setState({ bookInfo });
    this.formatDescription();
  }

  formatDescription() {
    const oldDescription = this.props.location.state.description;
    const re = /<[^>]*>/g;
    const replacePunc = /&rsquo;s/g;
    const replaceDash = /&mdash;/g;

    const regExFileredV = oldDescription.replace(re, '');
    const regExPunc = regExFileredV.replace(replacePunc, "'s");
    const regDashPunc = regExPunc.replace(replaceDash, '--');

    this.setState({ description: regDashPunc });
  }
  render() {
    const book = this.props.location.state;

    return (
      <Paper>
        <Card key={book._id}>
          <CardContent>
            <Typography align="center" variant="h3">
              {book.title}
            </Typography>
          </CardContent>
          <CardContent align="center">
            <img
              src={'https://' + book.image}
              alt={book.title}
              style={{ height: '25%' }}
            />
          </CardContent>
          <CardContent>
            <Typography align="center" variant="h3">
              By: {book.authors[0].display_name}
            </Typography>
          </CardContent>
          <CardContent align="center">
            <Typography variant="h5">Active: </Typography>
            {book.active ? (
              <CheckCircleIcon style={{ fontSize: 40, color: 'green' }} />
            ) : (
              <CancelIcon style={{ fontSize: 40, color: 'red' }} />
            )}
          </CardContent>
          <CardContent>
            <Typography align="center" variant="h5">
              Primary Genre: {book.primary_bisacs}
            </Typography>
            <Typography align="center" variant="h5">
              Publisher: {book.publisher}
            </Typography>
          </CardContent>
        </Card>
        <Card style={{ backgroundColor: '#4dd0e1' }}>
          <CardContent style={{ alignContent: 'flex-start' }}>
            <Typography variant="h3">Description:</Typography>
            <Typography
              style={{ paddingLeft: 20, paddingRight: 20 }}
              variant="h5"
            >
              {this.state.description}
            </Typography>
          </CardContent>
        </Card>
        <Card
          key={book._id + 'stats'}
          style={{
            backgroundColor: '#9e9e9e',
            display: 'flex',
            flexDirection: 'row'
          }}
        >
          <CardContent>
            <Typography variant="h4" style={{ alignContent: 'center' }}>
              Book Stats:
            </Typography>
          </CardContent>
          <CardContent style={{ alignContent: 'flex-start' }}>
            <Typography variant="h4">
              Amazon Rank: {book.amazon_rank}
            </Typography>
            <Typography variant="h4">Price: ${book.price}</Typography>
          </CardContent>
          <CardContent style={{ alignContent: 'flex-end' }}>
            <Typography variant="h5">Ibsn: {book.isbns}</Typography>
            <Typography variant="h5">Book Key: {book.bookkey}</Typography>
            <Typography variant="h5">
              Newsletter References :
              {book.ebb_newsletter_data
                ? book.ebb_newsletter_data.length
                : ' 0'}
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
    bookList: state.bookList,
    currentBook: state.currentBook
  };
};

export default connect(mapStateToProps, null)(SingleBook);
