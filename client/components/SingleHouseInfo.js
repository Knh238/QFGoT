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

class SingleHouseInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      housesArr: [],
      houseList: {},
      currHouse: {},
      currentPage: 1
    };
  }

  componentDidMount() {
    const self = this;
    const currHouse = this.props.location.state.houseId;

    return axios
      .get(`https://www.anapioficeandfire.com/api/houses/${currHouse}`)
      .then(function(res) {
        self.setState({ currHouse: res.data });
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
              style={{ backgroundColor: '#dab239', fontFamily: 'Signika' }}
              onClick={() => this.handleSubmit()}
            >
              overlord:{overlordName}
            </Button>
          </CardContent>
        );
      }
    } else {
      return '';
    }
  }
  renderHouse() {
    return this.state.currHouse ? (
      <Card>
        <CardContent>
          <Typography
            variant="h2"
            style={{
              fontFamily: 'Pirata One, cursive',
              color: '#dab239'
            }}
            align="center"
          >
            {this.state.currHouse.name}
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
            Coat of Arms: "{this.state.currHouse.coatOfArms}"
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
            Words: "{this.state.currHouse.words}"
          </Typography>
        </CardContent>
        <CardContent>
          <Typography
            variant="h4"
            style={{ fontFamily: 'Uncial Antiqua, cursive' }}
            align="center"
          >
            Seat:"{this.state.currHouse.seats}"
          </Typography>

          <Typography
            variant="h4"
            style={{ fontFamily: 'Uncial Antiqua, cursive' }}
            align="center"
          >
            Region: {this.state.currHouse.region}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography
            variant="h5"
            style={{ fontFamily: 'Uncial Antiqua, cursive' }}
            align="center"
          >
            Titles: "{this.state.currHouse.titles}"
          </Typography>

          {this.state.currHouse.heir ? (
            <Typography
              variant="h5"
              style={{ fontFamily: 'Uncial Antiqua, cursive' }}
              align="center"
            >
              Heir: "{this.state.currHouse.heir.slice(49)}"
            </Typography>
          ) : null}
        </CardContent>
        <CardContent>
          {this.state.currHouse.currentLord ? (
            <Typography
              variant="h5"
              style={{ fontFamily: 'Uncial Antiqua, cursive' }}
              align="center"
            >
              {this.state.currHouse.currentlord}
            </Typography>
          ) : null}
        </CardContent>
      </Card>
    ) : null;
  }
  render() {
    const { classes } = this.props;

    return (
      <div>
        <div
          style={{
            marginLeft: '15%',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          {this.state.currHouse ? this.renderHouse() : null}
        </div>
        <div
          style={{
            marginLeft: '10%',
            display: 'flex',
            height: '15%',
            justifyContent: 'center',
            marginTop: 5
          }}
        />
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
SingleHouseInfo.propTypes = {
  classes: PropTypes.object.isRequired
};
export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles, { withTheme: true })(SingleHouseInfo)
);
