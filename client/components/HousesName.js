import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import { Link } from 'react-router-dom';
import axios from 'axios';
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
    const self = this;
    let oldPage = this.state.currentPage;

    if (oldPage < 23) {
      let newPage = oldPage++;
      return axios
        .get(
          `https://www.anapioficeandfire.com/api/houses?page=${newPage}&pageSize=20`
        )
        .then(function(res) {
          self.setState({ housesArr: res.data, currentPage: newPage });
        });
    }
  }
  loadPrevHouses() {
    const self = this;
    let currPage = this.state.currentPage;
    if (currPage < 1) {
      let newCurrPage = currPage--;
      return axios
        .get(
          `https://www.anapioficeandfire.com/api/houses?page=${newCurrPage}&pageSize=20`
        )
        .then(function(res) {
          self.setState({ housesArr: res.data, currentPage: newCurrPage });
        });
    }
  }

  renderMembers(members) {
    const allChars = this.props.allChars;
    const allMems = [];
    members.forEach(member => allMems.push(allChars[member.slice(49)].name));
    if (allMems.length > 1) {
      return allMems.map(person => (
        <Typography
          key={person}
          align="center"
          variant="h5"
          style={{ fontFamily: 'Marck Script,cursive', color: '#22949f' }}
        >
          {person}
        </Typography>
      ));
    }
  }
  renderOverlord(overlord) {
    const allHouses = this.props.allHouses;
    if (overlord.length > 1) {
      const overlordStr = overlord.slice(45);
      const overlordName = allHouses[overlordStr].name;
      return (
        <CardContent align="center">
          <Button
            align="center"
            variant="contained"
            style={{
              backgroundColor: '#dab239',
              fontFamily: 'Uncial Antiqua, cursive',
              fontSize: 20,
              alignSelf: 'center',
              color: 'white'
            }}
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
    const allChars = this.props.allChars;
    return this.state.housesArr.map(house => (
      <Card
        style={{
          width: '40%',
          marginTop: 10
        }}
        raised={true}
        key={house.name}
      >
        <CardContent
          style={{
            backgroundColor: '#22949f',
            marginRight: 2
          }}
        >
          <Typography
            variant="h3"
            style={{ fontFamily: 'Pirata One, cursive' }}
            align="center"
          >
            {house.name}
          </Typography>
        </CardContent>
        {house.coatOfArms.length ? (
          <CardContent>
            <Typography
              variant="h5"
              style={{
                fontFamily: 'Uncial Antiqua, cursive'
              }}
            >
              coat of arms:
            </Typography>
            <Typography
              variant="h5"
              style={{
                fontFamily: 'Marck Script,cursive',
                color: '#22949f'
              }}
              align="center"
            >
              {house.coatOfArms}
            </Typography>
          </CardContent>
        ) : null}

        {house.seats.length > 1 ? (
          <CardContent>
            <Typography
              variant="h5"
              style={{ fontFamily: 'Uncial Antiqua, cursive' }}
            >
              House Seats:
            </Typography>
            <Typography
              variant="h5"
              style={{
                fontFamily: 'Uncial Antiqua, cursive',
                color: '#54bd9f'
              }}
              align="center"
            >
              {house.seats}
            </Typography>
          </CardContent>
        ) : null}
        <CardContent>
          <Typography
            variant="h5"
            style={{ fontFamily: 'Uncial Antiqua, cursive' }}
          >
            Region:
          </Typography>
          <Typography
            variant="h5"
            align="center"
            style={{ fontFamily: 'Uncial Antiqua, cursive', color: '#22949f' }}
          >
            {house.region}
          </Typography>
        </CardContent>

        {house.currentLord.length > 1 ? (
          <CardContent>
            <Typography
              variant="h5"
              style={{
                fontFamily: 'Uncial Antiqua, cursive'
              }}
            >
              Current Lord:
            </Typography>
            <Typography
              variant="h4"
              align="center"
              style={{ fontFamily: 'Marck Script,cursive', color: '#dab239' }}
            >
              {allChars[house.currentLord.slice(49)].name}
            </Typography>
          </CardContent>
        ) : null}

        {house.swornMembers.length > 1 ? (
          <CardContent>
            <Typography
              variant="h5"
              style={{
                fontFamily: 'Uncial Antiqua, cursive'
              }}
            >
              Shown Members:
            </Typography>
            {this.renderMembers(house.swornMembers)}
          </CardContent>
        ) : null}
        {house.overlord.length > 1 ? (
          <CardContent>
            <Typography
              variant="h5"
              style={{ fontFamily: 'Uncial Antiqua, cursive' }}
            >
              Overlord:
            </Typography>
            {this.renderOverlord(house.overlord)}
          </CardContent>
        ) : null}
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
              variant="h2"
              style={{ fontFamily: 'Pirata One, cursive' }}
              align="center"
            >
              Houses By Name
            </Typography>
          </CardContent>
        </Card>
        <div
          style={{
            marginLeft: '15%',
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
            justifyContent: 'space-around',
            marginTop: 5
          }}
        >
          <Card>
            <CardContent>
              <Typography
                variant="h5"
                style={{ fontFamily: 'Uncial Antiqua, cursive' }}
                align="center"
              >
                current page:
              </Typography>
              <Typography
                variant="h5"
                style={{
                  fontFamily: 'Uncial Antiqua, cursive',
                  color: '#dab239'
                }}
                align="center"
              >
                {this.state.currentPage} of 23
              </Typography>
            </CardContent>
            <CardContent align="center">
              <Button
                variant="contained"
                style={{
                  backgroundColor: '#54bd9f',
                  fontFamily: 'Uncial Antiqua, cursive',
                  marginRight: 10,
                  fontSize: 25,
                  fontColor: 'white'
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
                  fontFamily: 'Uncial Antiqua, cursive',
                  fontSize: 25,
                  fontColor: 'white'
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
