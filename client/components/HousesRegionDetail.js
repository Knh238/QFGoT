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
      .get(`https://www.anapioficeandfire.com/api/houses?region=${currRegion}`)
      .then(function(res) {
        self.setState({ housesArr: res.data });
      });
  }

  renderRegion() {
    const regionArr = this.state.housesArr;
    return regionArr.map(house => (
      <Card
        style={{
          width: '40%'
        }}
        key={house.name}
      >
        <CardContent align="center">
          <Typography
            variant="h3"
            style={{ fontFamily: 'Pirata One, cursive' }}
            align="center"
          >
            {house.name}
          </Typography>
        </CardContent>

        <CardContent align="center">
          <Typography
            variant="h4"
            style={{ fontFamily: 'Marck Script,cursive' }}
            align="center"
          >
            Coat of Arms: "{house.coatOfArms}"
          </Typography>
        </CardContent>

        <CardContent align="center" />
        <Typography
          variant="h5"
          style={{ fontFamily: 'Pirata One, cursive' }}
          align="center"
        >
          Words: "{house.words}"
        </Typography>
        <Typography
          variant="h4"
          style={{ fontFamily: 'Uncial Antiqua, cursive' }}
          align="center"
        >
          Seat: "{house.seats}"
        </Typography>
        <Typography
          variant="h5"
          style={{ fontFamily: 'Uncial Antiqua, cursive' }}
          align="center"
        >
          Titles: "{house.titles}"
        </Typography>
        <Typography
          variant="h5"
          style={{ fontFamily: 'Uncial Antiqua, cursive' }}
          align="center"
        >
          Current Lord: "{house.currentLord.slice(49)}"
        </Typography>
        <Typography
          variant="h5"
          style={{ fontFamily: 'Uncial Antiqua, cursive' }}
          align="center"
        >
          Heir: "{house.heir.slice(49)}"
        </Typography>

        <CardContent align="center">
          <Button
            variant="contained"
            style={{
              backgroundColor: '#dab239',
              fontFamily: 'Uncial Antiqua, cursive'
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
      <Paper>
        <Card>
          <CardContent align="center">
            <Typography
              variant="h3"
              style={{ fontFamily: 'Pirata One, cursive' }}
              align="center"
            >
              {regionName}
            </Typography>
          </CardContent>
          <CardContent align="center">
            <CardMedia
              component="img"
              style={{ height: '50%', width: '30%' }}
              image={regionImg}
              title="key"
            />
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
