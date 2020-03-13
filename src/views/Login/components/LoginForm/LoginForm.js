/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import validate from 'validate.js';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useDispatch, connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { Button, TextField } from '@material-ui/core';
import axios from "axios";
import { createStore } from 'redux';
import { Provider } from "react-redux";
import * as actionTypes from 'actions';
import { put } from 'redux-saga/effects';



import useRouter from 'utils/useRouter';
import { SESSION_LOGIN } from 'actions';
// import { login } from 'actions';
// const [fruit, setFruit] = useState('banana');
// const initialState = {
//   FirstName:"Lemon"  
// };
// function reducer(state= initialState,action)
// {
//   console.log(action);
//   return state
// }
// const store = createStore(reducer);


const schema = {
  email: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true
  },
  password: {
    presence: { allowEmpty: false, message: 'is required' }
  }
};


const useStyles = makeStyles(theme => ({
  root: {},
  fields: {
    margin: theme.spacing(-1),
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      flexGrow: 1,
      margin: theme.spacing(1)
    }
  },
  submitButton: {
    marginTop: theme.spacing(2),
    width: '100%'
  }
}));

const LoginForm = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const router = useRouter();
  const dispatch = useDispatch();

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));
  }, [formState.values]);

  const handleChange = event => {
    event.persist();

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true
      }
    }));
  };

  

  const handleSubmit = async event => {
    event.preventDefault();
    // console.log("$$$$$$$$$$$$$")
    // console.log(props.context)
    // props.store.dispatch(SESSION_LOGIN("hii"))
    // dispatch({type:"SESSION_LOGIN",payload:"this time"})
    // yield put(SESSION_LOGIN({type:'SESSION_LOGIN',payload:"hi"}))
    // console.log("Dispatched")
    var mine;
    var link =("https://fathomless-stream-13435.herokuapp.com/api/").concat(formState.values.email.toString(),",",formState.values.password);
    console.log(link)
    const response = await axios.get(link).then(
        data =>{
          console.log(data)
          mine=data
          localStorage.setItem('first_name', mine.data[0].FirstName);
          localStorage.setItem('last_name',mine.data[0].LastName);
          localStorage.setItem('email',mine.data[0].Email);
          // store.FirstName=data.data[0].FirstName
          // console.log(store.FirstName)
          // console.log("Updated in Store")
          
        }
      )
      if(mine.data.length>=1)
      {
        router.history.push('/overview')
      }
      else{
        console.log("Invalid Username or Password")
      }

    


  };

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <form
      {...rest}
      className={clsx(classes.root, className)}
      onSubmit={handleSubmit} 
       
    >
      <div className={classes.fields}>
        <TextField
          error={hasError('email')}
          fullWidth
          helperText={hasError('email') ? formState.errors.email[0] : null}
          label="Email address"
          name="email"
          onChange={handleChange}
          value={formState.values.email || ''}
          variant="outlined"
        />
        <TextField
          error={hasError('password')}
          fullWidth
          helperText={
            hasError('password') ? formState.errors.password[0] : null
          }
          label="Password"
          name="password"
          onChange={handleChange}
          type="password"
          value={formState.values.password || ''}
          variant="outlined"
        />
      </div>
      <Button
        className={classes.submitButton}
        color="secondary"
        disabled={!formState.isValid}
        size="large"
        type="submit"
        variant="contained"
        value="submit"
      >
        Sign in
      </Button>
    </form>
  );
};

LoginForm.propTypes = {
  className: PropTypes.string
};

const mapStateToProps = function(state) {
  return {
      first_name: state.first_name
  }
}

export default connect(mapStateToProps)(LoginForm);
