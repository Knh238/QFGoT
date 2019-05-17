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
    //props state = region
    const currRegion = this.state.currentRegion;
    return axios
      .get(`https://www.anapioficeandfire.com/api/houses?region=${currRegion}`)
      .then(function(res) {
        self.setState({ housesArr: res.data });
      });
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  regionDetails() {}

  renderRegions() {
    const regionsArr = [
      {
        name: 'Dorne',
        img:
          'https://vignette.wikia.nocookie.net/gameofthrones/images/f/f5/Dorne.png/revision/latest/top-crop/width/200/height/150?cb=20120719190909'
      },
      {
        name: 'The Westerlands',
        img:
          'https://vignette.wikia.nocookie.net/gameofthrones/images/7/7f/The_Westerlands.png/revision/latest/top-crop/width/200/height/150?cb=20120719201401'
      },
      {
        name: 'The Riverlands',
        img:
          'https://vignette.wikia.nocookie.net/gameofthrones/images/d/d0/The_Riverlands.png/revision/latest/top-crop/width/200/height/150?cb=20120719200633'
      },
      {
        name: 'The North',
        img:
          'https://vignette.wikia.nocookie.net/gameofthrones/images/f/f3/The_North.png/revision/latest/top-crop/width/200/height/150?cb=20120719200112'
      },
      {
        name: 'The Reach',
        img:
          'https://vignette.wikia.nocookie.net/gameofthrones/images/8/89/The_Reach.png/revision/latest/top-crop/width/200/height/150?cb=20120719200419'
      },
      {
        name: 'The Vale',
        img:
          'https://vignette.wikia.nocookie.net/gameofthrones/images/d/d7/Vale_of_Arryn.png/revision/latest/top-crop/width/200/height/150?cb=20120719201619'
      },
      {
        name: 'Iron Islands',
        img:
          'https://vignette.wikia.nocookie.net/gameofthrones/images/e/eb/Iron_Islands.png/revision/latest/top-crop/width/200/height/150?cb=20120719194710'
      },
      {
        name: 'The Crownlands',
        img:
          'https://vignette.wikia.nocookie.net/gameofthrones/images/5/59/The_Crownlands.png/revision/latest/top-crop/width/200/height/150?cb=20120719191632'
      },
      {
        name: 'The Stormlands',
        img:
          'https://vignette.wikia.nocookie.net/gameofthrones/images/5/5f/The_Stormlands.png/revision/latest/top-crop/width/200/height/150?cb=20150221004502'
      }
    ];
    return regionsArr.map(region => (
      <Card
        style={{
          width: '40%'
        }}
        key={region.name}
      >
        <Typography
          variant="h3"
          style={{ fontFamily: 'Signika' }}
          align="center"
        >
          {region.name}
        </Typography>
        <CardContent align="center">
          <CardMedia
            component="img"
            style={{ height: '30%', width: '30%' }}
            image={region.img}
            title="key"
          />
        </CardContent>
        <CardContent align="center">
          <Button
            variant="contained"
            style={{ backgroundColor: '#ef9a9a', fontFamily: 'Signika' }}
            onClick={() => this.handleSubmit()}
          >
            {region.name}
          </Button>
        </CardContent>
      </Card>
    ));
  }
  render() {
    const { classes } = this.props;
    return (
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
