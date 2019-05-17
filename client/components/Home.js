import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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
      <Card
        style={{
          float: 'none',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      >
        <Typography
          variant="h1"
          style={{ fontFamily: 'Pirata One, cursive' }}
          align="center"
        >
          Winter is coming
        </Typography>
        <Typography
          variant="h3"
          style={{ fontFamily: 'Marck Script,cursive', marginTop: 10 }}
          align="center"
        >
          ....But that 6th book aint!
        </Typography>
        <Typography
          variant="h5"
          style={{ fontFamily: 'Marck Script,cursive', marginTop: 10 }}
          align="center"
        >
          #SHADE
        </Typography>

        <CardContent align="center">
          <CardMedia
            component="img"
            style={{ height: '50%', width: '50%' }}
            // image="https://cdn130.picsart.com/270704750020201.jpg?c480x480"
            image="https://cdn131.picsart.com/294876470053201.jpg?c480x480"
            title="books"
          />
        </CardContent>
      </Card>
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
