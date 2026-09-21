// @ts-nocheck
import React from 'react';
import { ReactComponent as IconArticle } from '../ui-icons/article.svg';
import { classinator, IconProps } from '../shared';

import '../index.scss';

const Article: React.FC<IconProps> = (props) => {
  return <IconArticle className={classinator('article', props)} />;
};

export default Article;
