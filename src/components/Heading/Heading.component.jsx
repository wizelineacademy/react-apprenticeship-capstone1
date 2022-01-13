import React from 'react';
//import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Title } from './Heading.styled';

const Heading = (props) => {
  return <Title role="heading">{props.title}</Title>;
};

export default Heading;
