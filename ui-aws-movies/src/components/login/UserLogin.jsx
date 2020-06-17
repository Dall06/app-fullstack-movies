import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import {
  AUTHENTICATION_STARTED,
  AUTHENTICATION_RESET,
} from '../../redux/constants/UsersActionTypes';
import LoginForm from './LoginForm';
import swal from 'sweetalert';

const UserLogin = (props) => {
  const { history } = props;

  const dispatch = useDispatch();

  const loading = useSelector((state) =>
    _.get(state, 'UserAuthentication.loading')
  );
  const error = useSelector((state) =>
    _.get(state, 'UserAuthentication.error')
  );

  useEffect(() => {
    if (loading === false && error === false) {
      dispatch({
        type: AUTHENTICATION_RESET,
      });
      swal({
        title: 'logged successfully!',
        icon: 'success',
      });
      history.push('/app/movies/list');
    }
    else if(loading === false && error === true) {
      swal ( "Oops" ,  "Incorrect user or password!" ,  "error" )
    }
  });

  const startLogin = (user) => {
    dispatch({
      type: AUTHENTICATION_STARTED,
      payload: user,
    });
  };

  const handleOnCreate = () => {
    history.push('/login/create-account');
  };

  return (
    <div>
      <LoginForm onCreate={handleOnCreate} onSubmit={startLogin} />
    </div>
  );
};

export default UserLogin;
