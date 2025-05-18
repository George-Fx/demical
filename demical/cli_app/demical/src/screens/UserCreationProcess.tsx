import axios from 'axios';
import {Alert} from 'react-native';
import React, {useEffect} from 'react';

import {components} from '../components';
import {CREATE_USER} from '../config';
import {useAppNavigation} from '../hooks/navigation';
import {UserCreationProcessScreenProps} from '../types/ScreenProps';

const UserCreationProcess: React.FC<UserCreationProcessScreenProps> = ({
  route,
}) => {
  const {user} = route.params;
  const navigation = useAppNavigation();

  console.log(user);

  const handleCreateUser = async () => {
    try {
      const response = await axios.post(CREATE_USER, user);
      const ifUserCreated =
        response.status === 200 &&
        response.data.data &&
        response.data.message === 'User created';

      if (ifUserCreated) {
        navigation.reset({
          index: 0,
          routes: [{name: 'SignUpAccountCreated'}],
        });
      }

      if (!ifUserCreated) {
        navigation.reset({index: 0, routes: [{name: 'SignIn'}]});
        Alert.alert('Something went wrong, please try again');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleCreateUser();
  }, []);

  return <components.Loader />;
};

export default UserCreationProcess;
