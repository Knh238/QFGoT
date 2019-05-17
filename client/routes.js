import React, { Component } from 'react';

import { withRouter, Route, Switch } from 'react-router-dom';

import PropTypes from 'prop-types';

import {
  Home,
  AllBooks,
  FindBooks,
  SingleBook,
  HousesRegion,
  HousesName
} from './components';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/AllBooks" component={AllBooks} />
        <Route exact path="/FindBooks" component={FindBooks} />
        <Route exact path="/SingleBook" component={SingleBook} />
        <Route exact path="/HousesByRegion" component={HousesRegion} />
        <Route exact path="/HousesByName" component={HousesName} />
      </Switch>
    );
  }
}
