import React from 'react';
import Routes from './Routes';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Navbar, NavDrawer } from './components';
import { getHouseList, getCharList } from './store/booksReducer';
import { connect } from 'react-redux';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  // componentDidMount() {
  //   if (!this.props.charsLoaded) {
  //     this.props.getCharList();
  //   }
  //   if (!this.props.housesLoaded) {
  //     this.props.getHouseList();
  //   }
  // }

  render() {
    return (
      <div>
        <div>
          <NavDrawer />
        </div>
        <div
          style={{
            left: '10%',
            marginTop: '8%',
            padding: 10
          }}
        >
          <Routes />
        </div>
      </div>
    );
  }
}
// const mapStateToProps = state => {
//   return {
//     ...state,
//     allHouses: state.allHouses,
//     allChars: state.allChars,
//     charsLoaded: state.charsLoaded,
//     housesLoaded: state.housesLoaded
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     getHouseList: () => dispatch(getHouseList()),
//     getCharList: () => dispatch(getCharList())
//   };
// };

// App.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
