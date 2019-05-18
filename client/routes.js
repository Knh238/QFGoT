import React, { Component } from 'react';

import { withRouter, Route, Switch } from 'react-router-dom';

import PropTypes from 'prop-types';

import {
  Home,
  HousesRegion,
  HousesName,
  HousesRegionDetail,
  SingleHouseInfo,
  MainTexts,
  MinorTexts,
  CharsByCulture,
  CultureDetail,
  CharsByGender,
  BookChars
} from './components';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/MainTexts" component={MainTexts} />
        <Route exact path="/MinorTexts" component={MinorTexts} />
        <Route exact path="/HousesByRegion" component={HousesRegion} />
        <Route exact path="/HousesInRegion" component={HousesRegionDetail} />
        <Route exact path="/HousesByName" component={HousesName} />
        <Route exact path="/IndividualHouse" component={SingleHouseInfo} />
        <Route exact path="/AllCultures" component={CharsByCulture} />
        <Route exact path="/CharsByGender" component={CharsByGender} />
        <Route exact path="/CharsByBook" component={BookChars} />
        <Route exact path="/CultureDetail" component={CultureDetail} />
      </Switch>
    );
  }
}
