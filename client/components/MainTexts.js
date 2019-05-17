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

class MainTexts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      housesArr: [],
      houseList: {},
      currentPage: 1
    };
    this.loadNextHouses = this.loadNextHouses.bind(this);
    this.loadPrevHouses = this.loadPrevHouses.bind(this);
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

  renderRegions() {
    const allHouses = this.props.allHouses;
    return this.state.housesArr.map(house => (
      <Card
        style={{
          width: '40%'
        }}
        key={house.name}
      >
        <CardContent>
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
          <Typography
            variant="h5"
            style={{ fontFamily: 'Uncial Antiqua, cursive' }}
            align="center"
          >
            {house.currentlord}
          </Typography>
        </CardContent>
        <CardContent>
          {/* <Typography
            variant="h5"
            style={{ fontFamily: 'Uncial Antiqua, cursive' }}
            align="center"
          >
            {house.overlord.slice(45)}
          </Typography> */}
          {this.renderOverlord(house.overlord)}
        </CardContent>
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
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    allHouses: state.allHouses,
    mainBooksArr: state.mainBooksArr
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getHouseList: () => dispatch(getHouseList())
  };
};
MainTexts.propTypes = {
  classes: PropTypes.object.isRequired
};
export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles, { withTheme: true })(MainTexts)
);
