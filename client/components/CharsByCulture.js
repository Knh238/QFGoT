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

class CharsByCulture extends React.Component {
  constructor(props) {
    super(props);
    this.state = { houseList: {} };
  }

  renderCultures() {
    const allCultures = this.props.allCultures;
    return allCultures.map(culture => (
      <Card
        style={{
          width: '20%'
        }}
        transparent
        key={culture}
      >
        <CardContent align="center">
          <Button
            variant="contained"
            style={{
              backgroundColor: '#2e4b77',
              fontFamily: 'Pirata One, cursive',
              fontSize: 55,
              color: 'white',
              borderRadius: 15
            }}
            component={Link}
            to={{
              pathname: '/CultureDetail',
              state: {
                cultureName: culture
              }
            }}
          >
            {culture}
          </Button>
        </CardContent>
      </Card>
    ));
  }
  render() {
    const { classes } = this.props;
    console.log('this state houses fulll list', this.props.allCultures);
    return (
      <Paper>
        <Card>
          <CardContent align="center" style={{ backgroundColor: '#2d3258' }}>
            <Typography
              variant="h1"
              style={{ fontFamily: 'Pirata One, cursive' }}
              align="center"
            >
              Characters By Culture
            </Typography>
          </CardContent>z
          <CardContent align="center">
            <CardMedia
              component="img"
              style={{ height: '40%', width: '20%' }}
              image={'https://awoiaf.westeros.org/images/5/5f/Wildlings.jpg'}
              title="key"
            />
          </CardContent>
        </Card>
        <div
          style={{
            display: 'flex',
            marginLeft: '10%',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          {this.renderCultures()}
        </div>
      </Paper>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    allHouses: state.allHouses,
    regionsArr: state.regionsArr,
    allCutlures: state.allCutlures
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getHouseList: () => dispatch(getHouseList())
  };
};

CharsByCulture.propTypes = {
  classes: PropTypes.object.isRequired
};
export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles, { withTheme: true })(CharsByCulture)
);
