import React from 'react';
import { makeStyles } from '@material-ui/styles';
// import {connect} from 'react-redux';
import { useSelector } from 'react-redux'
import { useStore } from 'react-redux'



import { Page } from 'components';
import {
  Header,
  Statistics,
  Notifications,
  Projects,
  Todos
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3)
  },
  statistics: {
    marginTop: theme.spacing(3)
  },
  notifications: {
    marginTop: theme.spacing(6)
  },
  projects: {
    marginTop: theme.spacing(6)
  },
  todos: {
    marginTop: theme.spacing(6)
  }
}));

const Overview = () => {
  const classes = useStyles();
  // const counter = useSelector(state => state.first_name)
  const store = useStore()
  const name=store.getState().session.user.first_name
  console.log(store.getState())
  // console.log(name)

  return (
    <Page
      className={classes.root}
      title="Overview"
    >
      <Header firstname={localStorage.getItem('first_name')} />
      <Statistics className={classes.statistics} />
      <Notifications className={classes.notifications} />
      <Projects className={classes.projects} />
      <Todos className={classes.todos} />
    </Page>
  );
};

// const mapStateToProps=(state) =>({
//   FirstName:state.FirstName,  
// });



export default Overview;
