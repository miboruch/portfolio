import React from 'react';
import { Link } from 'react-router-dom';

import { Item } from './menu-item.styles';

interface Props {
  name: string;
  link: string;
}

const MenuItem: React.FC<Props> = ({ name, link }) => (
  <Link to={link}>
    <Item>{name}</Item>
  </Link>
);

export default MenuItem;
