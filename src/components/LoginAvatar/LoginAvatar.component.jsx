import React from 'react';
//import { BrowserRouter, Switch, Route } from 'react-router-dom';
import defaultAvatar from '../../assets/defaultavatar.jpeg';
import { AvatarImg } from './LoginAvatar.styled';

const LoginAvatar = (props) => {
  return (
    <AvatarImg
      src={props.avatarUrl ? props.avatarUrl : defaultAvatar}
      alt="logged in user image"
    ></AvatarImg>
  );
};

export default LoginAvatar;
