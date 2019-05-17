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
import AddIcon from '@material-ui/icons/Add';
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
    console.log('this was pressed, this pages is:', this.state.currentPage);
    const newPage = (this.state.currentPage += 1);

    const self = this;
    // const currPage = this.state.currentPage;
    return axios
      .get(
        `https://www.anapioficeandfire.com/api/houses?page=${newPage}&pageSize=20`
      )
      .then(function(res) {
        self.setState({ housesArr: res.data, currentPage: newPage });
      });
  }
  renderOverlord(overlord) {
    const allHouses = this.props.allHouses;
    if (overlord.length > 1) {
      const overlordStr = overlord.slice(45);
      const overlordNum = parseInt(overlordStr);
      if (overlordNum < 250) {
        const overlordName = allHouses[overlordStr].name;
        return (
          <CardContent align="center">
            <Button
              variant="contained"
              style={{ backgroundColor: '#ef9a9a', fontFamily: 'Signika' }}
              onClick={() => this.handleSubmit()}
            >
              overlord:{overlordName}
            </Button>
          </CardContent>
          // <Typography
          //   variant="h5"
          //   style={{ fontFamily: 'Signika' }}
          //   align="center"
          // >
          //   Overlord: {overlordName}
          // </Typography>
        );
      }
    } else {
      return '';
    }
  }
  renderRegions() {
    const allHouses = this.props.allHouses;
    return this.state.housesArr.map(house => (
      <Card
        style={{
          width: '40%'
        }}
        key={house.name}
      >
        <Typography
          variant="h2"
          style={{ fontFamily: 'PatrickHand' }}
          align="center"
        >
          {house.name}
        </Typography>
        <Typography
          variant="h3"
          style={{ fontFamily: 'Marck Script,cursive' }}
          align="center"
        >
          {house.coatOfArms.length ? house.coatOfArms : null}
        </Typography>
        <Typography
          variant="h3"
          style={{ fontFamily: 'Patrick Hand' }}
          align="center"
        >
          {house.region}
        </Typography>
        <Typography
          variant="h3"
          style={{ fontFamily: 'Patrick Hand' }}
          align="center"
        >
          {house.seats}
        </Typography>
        <Typography
          variant="h5"
          style={{ fontFamily: 'Signika' }}
          align="center"
        >
          {house.currentlord}
        </Typography>
        <Typography
          variant="h5"
          style={{ fontFamily: 'Signika' }}
          align="center"
        >
          {house.overlord.slice(45)}
        </Typography>
        {this.renderOverlord(house.overlord)}
        {/* <Typography
          variant="h5"
          style={{ fontFamily: 'Signika' }}
          align="center"
        >
          {/* {house.overlord} */}
        {/* {allHouses[house.overlord.slice(45)]}
        </Typography> */}
        {/* <CardContent align="center">
          <CardMedia
            component="img"
            style={{ height: '30%', width: '30%' }}
            image={house.url}
            title="key"
          />
        </CardContent> */}
        {/* <CardContent align="center">
          <Button
            variant="contained"
            style={{ backgroundColor: '#ef9a9a', fontFamily: 'Signika' }}
            onClick={() => this.handleSubmit()}
          >
            {house.name}
          </Button>
        </CardContent> */}
      </Card>
    ));
  }
  render() {
    const { classes } = this.props;
    // console.log('this state house is', this.state.housesArr);
    console.log('this state house all houses ', this.props.allHouses);
    return (
      <div>
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
                variant="h3"
                style={{ fontFamily: 'Patrick Hand' }}
                align="center"
              >
                current page: {this.state.currentPage} of 23
              </Typography>
              <IconButton
                variant="contained"
                style={{
                  backgroundColor: 'magenta',
                  fontFamily: 'Signika',
                  height: 80,
                  width: 150
                }}
                onClick={this.loadNextHouses}
              >
                <AddIcon />
                next 20
              </IconButton>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    allHouses: state.allHouses
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
