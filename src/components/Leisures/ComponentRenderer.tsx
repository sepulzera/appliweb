// code from https://www.storyblok.com/tp/react-dynamic-component-from-json

import React from 'react';

import { FeaturePageData } from '../../context/LeisureContext/LeisureRecord';

import H from '../Ui/H';
import P from '../Ui/P';

const Components = {
  h: H,
  p: P,
};

export default (block: FeaturePageData) => {
  const cmp = block.component;
  // @ts-ignore
  const Cmpcmp = Components[cmp];
  if (typeof Cmpcmp !== 'undefined') {
    return React.createElement(Cmpcmp, {
      key: block.uid,
      ...block.props,
    });
  }
  return React.createElement(
    // eslint-disable-next-line react/jsx-one-expression-per-line
    () => <div>The component {block.component} has not been created yet.</div>,
    { key: block.uid }
  );
};
