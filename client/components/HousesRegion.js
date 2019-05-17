import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { getHouseList } from '../store/booksReducer';
import { Link } from 'react-router-dom';

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

class HousesRegion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { houseList: {} };
  }

  componentDidMount() {
    this.setState({ houseList: this.props.allHouses });
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  renderRegions() {
    const regionsArr = this.props.regionsArr;
    return regionsArr.map(region => (
      <Card
        style={{
          width: '40%'
        }}
        key={region.name}
      >
        <Typography
          variant="h3"
          style={{ fontFamily: 'Pirata One, cursive' }}
          align="center"
        >
          {region.name}
        </Typography>

        <CardContent align="center">
          <Button
            variant="contained"
            style={{ backgroundColor: '#22949f', fontFamily: 'Signika' }}
            component={Link}
            to={{
              pathname: '/HousesInRegion',
              state: {
                regionName: region.name,
                regionImg: region.img
              }
            }}
          >
            {region.name}
          </Button>
        </CardContent>
      </Card>
    ));
  }
  render() {
    const { classes } = this.props;
    console.log('this state houses fulll list', this.props.allHouses);
    return (
      <Paper>
        <Card>
          <CardContent align="center">
            <Typography
              variant="h3"
              style={{ fontFamily: 'Pirata One, cursive' }}
              align="center"
            >
              Regions
            </Typography>
          </CardContent>
          <CardContent align="center">
            <CardMedia
              component="img"
              style={{ height: '40%', width: '20%' }}
              image={
                'https://i.pinimg.com/564x/f2/eb/e5/f2ebe540d30a8c006be97627f2859b0b.jpg'
              }
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
          {this.renderRegions()}
        </div>
      </Paper>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    allHouses: state.allHouses,
    regionsArr: state.regionsArr
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getHouseList: () => dispatch(getHouseList())
  };
};

HousesRegion.propTypes = {
  classes: PropTypes.object.isRequired
};
export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles, { withTheme: true })(HousesRegion)
);
