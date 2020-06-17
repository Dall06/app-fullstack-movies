/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import UserForm from './UserForm';
import {
  USER_CREATE_STARTED,
  USER_CREATE_RESET,
} from '../../redux/constants/UsersActionTypes';

const UserAdd = (props) => {
  const { history } = props;

  const dispatch = useDispatch();
  const loading = useSelector((state) => _.get(state, 'UserAdd.loading'));

  useEffect(() => {
    if (loading === true) {
      dispatch({
        type: USER_CREATE_RESET,
      });
      history.push('/login');
    }
  });

  const createUser = (user) => {
    dispatch({
      type: USER_CREATE_STARTED,
      payload: user,
    });
  };

  return (
    <div style={{ height: '100vh', width: '100%', backgroundColor: '#1E2834', }}>
      <UserForm
        title='Create user'
        buttonTitle='create'
        onCancel={() => history.push('/login')}
        onSubmit={createUser}
      />
    </div>
  );
};

export default UserAdd;
