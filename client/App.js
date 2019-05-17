import React from 'react';
import Routes from './Routes';
import { Navbar, NavDrawer } from './components';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

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

export default App;
