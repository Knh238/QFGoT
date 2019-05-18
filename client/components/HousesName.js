import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
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

class HousesName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      housesArr: [],
      houseList: {},
      currentPage: 1
    };
    this.loadNextHouses = this.loadNextHouses.bind(this);
    this.loadPrevHouses = this.loadPrevHouses.bind(this);
    this.renderMembers = this.renderMembers.bind(this);
  }

  componentDidMount() {
    const self = this;
    const currPage = this.state.currentPage;
    const allHouses = this.props.allHouses;

    return axios
      .get(
        `https://www.anapioficeandfire.com/api/houses?page=${currPage}&pageSize=20`
      )
      .then(function(res) {
        self.setState({ housesArr: res.data, houseList: allHouses });
      });
  }

  loadNextHouses() {
    const newPage = (this.state.currentPage += 1);
    //add error handling so it wont go above 24
    const self = this;
    return axios
      .get(
        `https://www.anapioficeandfire.com/api/houses?page=${newPage}&pageSize=20`
      )
      .then(function(res) {
        self.setState({ housesArr: res.data, currentPage: newPage });
      });
  }
  loadPrevHouses() {
    const newPage = (this.state.currentPage -= 1);
    //add error handling so it wont go below or to 0
    const self = this;
    return axios
      .get(
        `https://www.anapioficeandfire.com/api/houses?page=${newPage}&pageSize=20`
      )
      .then(function(res) {
        self.setState({ housesArr: res.data, currentPage: newPage });
      });
  }

  renderMembers(members) {
    const allChars = this.props.allChars;
    const allMems = [];
    members.forEach(member => allMems.push(allChars[member.slice(49)].name));
    if (allMems.length > 1) {
      return allMems.map(person => (
        <Typography
          variant="h5"
          style={{ fontFamily: 'Uncial Antiqua, cursive' }}
          align="center"
        >
          {person}
        </Typography>
      ));
    }

    console.log('all mems', allMems);
  }
  renderOverlord(overlord) {
    const allHouses = this.props.allHouses;
    if (overlord.length > 1) {
      const overlordStr = overlord.slice(45);
      const overlordName = allHouses[overlordStr].name;
      return (
        <CardContent align="center">
          <Typography
            variant="h4"
            style={{ fontFamily: 'Pirata One, cursive', color: '#dab239' }}
          >
            overlord:
          </Typography>
          <Button
            variant="contained"
            style={{ backgroundColor: '#dab239', fontFamily: 'Signika' }}
            component={Link}
            to={{
              pathname: '/IndividualHouse',
              state: {
                houseId: overlordStr
              }
            }}
          >
            {overlordName}
          </Button>
        </CardContent>
      );
    } else {
      return '';
    }
  }
  renderRegions() {
    const allHouses = this.props.allHouses;
    const allChars = this.props.allChars;
    return this.state.housesArr.map(house => (
      <Card
        style={{
          width: '40%'
        }}
        key={house.name}
      >
        <CardContent
          style={{
            backgroundColor: '#22949f',
            marginRight: 2
          }}
        >
          <Typography
            variant="h2"
            style={{ fontFamily: 'Pirata One, cursive' }}
            align="center"
          >
            {house.name}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography
            variant="h4"
            style={{
              fontFamily: 'Marck Script,cursive'
            }}
            align="center"
          >
            {house.coatOfArms.length ? house.coatOfArms : null}
          </Typography>
        </CardContent>

        {house.seats.length > 1 ? (
          <CardContent>
            <Typography
              variant="h4"
              style={{ fontFamily: 'Uncial Antiqua, cursive' }}
              align="center"
            >
              Seat:
              {house.seats}
            </Typography>
          </CardContent>
        ) : null}
        <CardContent>
          <Typography
            variant="h4"
            style={{ fontFamily: 'Uncial Antiqua, cursive' }}
            align="center"
          >
            Region: {house.region}
          </Typography>
        </CardContent>
        <CardContent>
          {house.currentLord.length > 1 ? (
            <Typography
              variant="h5"
              style={{ fontFamily: 'Uncial Antiqua, cursive' }}
              align="center"
            >
              Current Lord: {allChars[house.currentLord.slice(49)].name}
            </Typography>
          ) : null}
        </CardContent>
        <CardContent>
          <Typography
            variant="h5"
            style={{ fontFamily: 'Uncial Antiqua, cursive', color: '#22949f' }}
            align="center"
          >
            swornMembers:
          </Typography>
          {house.swornMembers.length > 1
            ? this.renderMembers(house.swornMembers)
            : null}
        </CardContent>
        <CardContent>{this.renderOverlord(house.overlord)}</CardContent>
      </Card>
    ));
  }
  render() {
    const { classes } = this.props;

    return (
      <Paper>
        <Card style={{ backgroundColor: '#2e4b77' }}>
          <CardContent align="center">
            <Typography
              variant="h1"
              style={{ fontFamily: 'Pirata One, cursive' }}
              align="center"
            >
              Houses By Name
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
          {this.state.housesArr ? this.renderRegions() : null}
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
          <Card>
            <CardContent>
              <Typography
                variant="h4"
                style={{ fontFamily: 'Uncial Antiqua, cursive' }}
                align="center"
              >
                current page: {this.state.currentPage} of 23
              </Typography>
            </CardContent>
            <CardContent align="center">
              <Button
                variant="contained"
                style={{
                  backgroundColor: '#54bd9f',
                  fontFamily: 'Uncial Antiqua, cursive',
                  marginRight: 10
                }}
                align="center"
                onClick={this.loadPrevHouses}
              >
                <KeyboardArrowLeftIcon />
                previous 20
              </Button>
              <Button
                variant="contained"
                style={{
                  backgroundColor: '#54bd9f',
                  fontFamily: 'Uncial Antiqua, cursive'
                }}
                align="center"
                onClick={this.loadNextHouses}
              >
                next 20
                <KeyboardArrowRightIcon />
              </Button>
            </CardContent>
          </Card>
        </div>
      </Paper>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    allHouses: state.allHouses,
    allChars: state.allChars
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getHouseList: () => dispatch(getHouseList())
  };
};
HousesName.propTypes = {
  classes: PropTypes.object.isRequired
};
export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles, { withTheme: true })(HousesName)
);
