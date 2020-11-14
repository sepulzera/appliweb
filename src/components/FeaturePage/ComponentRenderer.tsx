// code from https://www.storyblok.com/tp/react-dynamic-component-from-json

import React from 'react';
import { FeaturePageData } from '../../context/FeatureContext/FeatureRecord';

import H from '../Ui/H';
import List from '../Ui/List';
import ListItem from '../Ui/ListItem';
import P from '../Ui/P';

const toComponent = {
  h: H,
  p: P,
  ul: List,
  li: ListItem,
};

const Components = (block: FeaturePageData) => {
  const cmp = block.component;
  // @ts-ignore
  const Cmpcmp = toComponent[cmp];
  if (typeof Cmpcmp !== 'undefined') {
    const children = block.children;
    let childrenJsx: any;
    if (children != null && Array.isArray(children)) {
      childrenJsx = [];
      for (let index = 0; index < children.length; ++index) {
        const child = Components(children[index]);
        childrenJsx.push(child);
      }
    } else {
      childrenJsx = block.text ?? '';
    }

    return React.createElement(Cmpcmp, {
      key: block.uid,
      ...block.props,
    }, childrenJsx);
  }
  return React.createElement(
    // eslint-disable-next-line react/jsx-one-expression-per-line
    () => <div>The component {block.component} has not been created yet.</div>,
    { key: block.uid }
  );
};

export default Components;
