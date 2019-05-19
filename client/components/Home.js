import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Paper style={{ marginLeft: 210 }}>
        <Card>
          <CardContent style={{ backgroundColor: '#54bd9f' }}>
            <Typography
              variant="h3"
              style={{ fontFamily: 'Pirata One, cursive' }}
              align="center"
            >
              Winter is coming
            </Typography>
          </CardContent>
          <CardContent>
            <Typography
              variant="h4"
              style={{
                fontFamily: 'Marck Script,cursive',
                marginTop: 10,
                color: '#dab239'
              }}
              align="center"
            >
              ....But that 6th book aint!
            </Typography>
            <Typography
              variant="h4"
              style={{
                fontFamily: 'Marck Script,cursive',
                marginTop: 10,
                color: '#22949f'
              }}
              align="center"
            >
              #SHADE
            </Typography>
          </CardContent>

          <CardContent align="center">
            <CardMedia
              component="img"
              style={{ height: '50%', width: '50%' }}
              image="https://cdn131.picsart.com/294876470053201.jpg?c480x480"
              title="books"
            />
          </CardContent>
        </Card>
      </Paper>
    );
  }
}
const styles = {
  card: {
    maxWidth: 345,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  media: {
    objectFit: 'cover'
  }
};
const mapStateToProps = state => {
  return {
    ...state,
    videoList: state.videoList,
    views: state.views
  };
};

export default connect(mapStateToProps, null)(Home);
