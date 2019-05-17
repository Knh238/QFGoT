import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import SecurityIcon from '@material-ui/icons/Security';
import BookIcon from '@material-ui/icons/Book';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import HomeIcon from '@material-ui/icons/Home';
import { getHouseList } from '../store/booksReducer';
import { connect } from 'react-redux';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#2d3258'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  toolbar: theme.mixins.toolbar
});

class NavDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { houseList: {} };
  }

  componentDidMount() {
    this.props.getHouseList();
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography
              variant="h3"
              color="inherit"
              noWrap
              style={{ marginLeft: '42%', fontFamily: 'Pirata One, cursive' }}
            >
              Kristin's Game of Thrones Build
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.toolbar} />
          <List>
            <ListItem
              button
              key="Home"
              component={Link}
              to={{
                pathname: '/'
              }}
            >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText
                inset
                primary="Home"
                style={{ fontFamily: 'Pirata One, cursive' }}
              />
            </ListItem>
            <Divider light />
            <ListItem key="books" divider={true}>
              <ListItemIcon>
                <BookIcon />
              </ListItemIcon>
              <ListItemText primary="Books" />
            </ListItem>
            <ListItem inset button key="major works">
              <ListItemText inset primary="Novels" />
            </ListItem>
            <ListItem button key="minor texts">
              <ListItemText inset primary="Other works" />
            </ListItem>
          </List>
          <Divider light />
          <List>
            <Divider light />
            <ListItem key="houses" divider={true}>
              <ListItemIcon>
                <SecurityIcon />
              </ListItemIcon>
              <ListItemText primary="Houses" />
            </ListItem>
            <ListItem
              inset
              button
              key="by region"
              component={Link}
              to={{
                pathname: '/HousesByRegion'
              }}
            >
              <ListItemText inset primary="By Region" />
            </ListItem>
            <ListItem
              button
              key="by name"
              component={Link}
              to={{
                pathname: '/HousesByName'
              }}
            >
              <ListItemText inset primary="By Name" />
            </ListItem>
          </List>
          <Divider light />
          <List>
            <Divider light />
            <ListItem key="characters" divider={true}>
              <ListItemIcon>
                <PeopleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Characters" />
            </ListItem>

            <ListItem inset button key="by culture">
              <ListItemText inset primary="By Culture" />
            </ListItem>
            <ListItem button key="by gender">
              <ListItemText inset primary="By Gender" />
            </ListItem>
            <ListItem button key="by book">
              <ListItemText inset primary="By Book" />
            </ListItem>
          </List>
        </Drawer>
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

NavDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles, { withTheme: true })(NavDrawer)
);
