import * as actionTypes from 'actions';

var my_role="";
var bio="";
if (localStorage.getItem('first_name')==='Dana')
{
   my_role='ADMIN';
   bio='ADMIN'
}
else{
  my_role='USER';
  bio='USER';
}
const initialState = {
  loggedIn: true,
  user: {
    first_name: localStorage.getItem('first_name'),
    last_name:  localStorage.getItem('last_name'),
    email: localStorage.getItem('email'),
    avatar: '/images/avatars/avatar_11.png',
    bio: bio,
    role: my_role // ['GUEST', 'USER', 'ADMIN']
  }
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SESSION_LOGIN: {
      console.log("action triggered")
      return {
        // ...initialState
        first_name: action.payload,
        last_name: 'vishnu',
        email: 'demo@devias.io',
        avatar: '/images/avatars/avatar_11.png',
        bio: 'Brain Director',
        role: 'ADMIN' // ['GUEST', 'USER', 'ADMIN']
      };
    }

    case actionTypes.SESSION_LOGOUT: {
      return {
        ...state, 
        loggedIn: false,
        user: {
          role: 'GUEST'
        }
      };
    }

    default: {
      
      return state;
    }
  }
};


export default sessionReducer;
