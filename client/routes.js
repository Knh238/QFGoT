import React, { Component } from 'react';

import { withRouter, Route, Switch } from 'react-router-dom';

import PropTypes from 'prop-types';

import {
  Home,
  AllBooks,
  FindBooks,
  SingleBook,
  HousesRegion,
  HousesName,
  HousesRegionDetail,
  SingleHouseInfo,
  MainTexts,
  MinorTexts
} from './components';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/MainTexts" component={MainTexts} />
        <Route exact path="/MinorTexts" component={MinorTexts} />
        <Route exact path="/SingleBook" component={SingleBook} />
        <Route exact path="/HousesByRegion" component={HousesRegion} />
        <Route exact path="/HousesInRegion" component={HousesRegionDetail} />
        <Route exact path="/HousesByName" component={HousesName} />
        <Route exact path="/IndividualHouse" component={SingleHouseInfo} />
      </Switch>
    );
  }
}
