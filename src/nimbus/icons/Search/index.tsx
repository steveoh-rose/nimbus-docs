// @ts-nocheck
import React from 'react';
import { ReactComponent as IconSearch } from '../ui-icons/search.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const Search: React.FC<IconProps> = (props) => {
  return <IconSearch className={classinator('search', props)} />;
};

export default Search;
