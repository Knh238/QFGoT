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

class HousesRegionDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { housesArr: [], region: '' };
  }

  componentDidMount() {
    const self = this;

    const currRegion = this.props.location.state.regionName;
    return axios
      .get(
        `https://www.anapioficeandfire.com/api/houses?page=1&pageSize=50&region=${currRegion}`
      )
      .then(function(res) {
        self.setState({ housesArr: res.data });
      });
  }

  renderRegion() {
    const regionArr = this.state.housesArr;
    return regionArr.map(house => (
      <Card
        style={{
          width: '40%',
          marginTop: 10
        }}
        raised={true}
        key={house.name}
      >
        <CardContent align="center">
          <Typography
            variant="h4"
            style={{ fontFamily: 'Pirata One, cursive', color: '#54bd9f' }}
            align="center"
          >
            {house.name}
          </Typography>
        </CardContent>

        <CardContent align="center">
          {house.coatOfArms.length > 1 ? (
            <Typography
              variant="h5"
              style={{ fontFamily: 'Marck Script,cursive', color: '#dab239' }}
              align="center"
            >
              "{house.coatOfArms}"
            </Typography>
          ) : null}
        </CardContent>

        <CardContent align="center">
          {house.words.length > 1 ? (
            <Typography
              variant="h6"
              style={{ fontFamily: 'Marck Script,cursive' }}
              align="center"
            >
              "{house.words}"
            </Typography>
          ) : null}
        </CardContent>
        <CardContent>
          <Typography
            variant="h5"
            style={{ fontFamily: 'Pirata One, cursive', color: '#22949f' }}
          >
            Seat: {house.seats}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography
            variant="h6"
            style={{ fontFamily: 'Pirata One, cursive' }}
          >
            Titles: "{house.titles}"
          </Typography>
          <Typography
            variant="h6"
            style={{ fontFamily: 'Pirata One, cursive' }}
          >
            Current Lord: "{house.currentLord.slice(49)}"
          </Typography>
          <Typography
            variant="h5"
            style={{
              fontFamily: 'Pirata One, cursive'
            }}
          >
            Heir: "{house.heir.slice(49)}"
          </Typography>
        </CardContent>
        <CardContent align="center">
          <Button
            variant="contained"
            style={{
              backgroundColor: '#2e4b77',
              fontFamily: 'Uncial Antiqua, cursive',
              fontWeight: 'bold'
            }}
            component={Link}
            to={{
              pathname: '/IndividualHouse',
              state: {
                houseId: house.url.slice(45)
              }
            }}
          >
            {house.name}
          </Button>
        </CardContent>
      </Card>
    ));
  }
  render() {
    const { classes } = this.props;
    const regionName = this.props.location.state.regionName;
    const regionImg = this.props.location.state.regionImg;
    return (
      <Paper style={{ marginLeft: 210 }}>
        <Card style={{ backgroundColor: '#2e4b77' }}>
          <CardContent align="center">
            <Typography
              variant="h3"
              style={{ fontFamily: 'Pirata One, cursive', color: '#dab239' }}
              align="center"
            >
              The Houses of {regionName}
            </Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent align="center">
            <CardMedia
              component="img"
              style={{ height: '40%', width: '30%' }}
              image={regionImg}
              title="key"
            />
          </CardContent>
        </Card>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around'
          }}
        >
          {this.renderRegion()}
        </div>
      </Paper>
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

HousesRegionDetail.propTypes = {
  classes: PropTypes.object.isRequired
};
export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles, { withTheme: true })(HousesRegionDetail)
);
