// code from https://www.storyblok.com/tp/react-dynamic-component-from-json

import React from 'react';
import { AnyFeaturePageData, isHeadline, isImage, isList, isListItem, isParagraph } from '../../context/FeatureContext/FeatureRecord';

import H from '../Ui/H';
import Image from '../Ui/Image';
import List from '../Ui/List';
import ListItem from '../Ui/ListItem';
import P from '../Ui/P';

const toComponent = {
  h:   H,
  img: Image,
  li:  ListItem,
  ul:  List,
  p:   P,
};

const Components = (block: AnyFeaturePageData) => {
  const cmp = block.component;
  // @ts-ignore
  const Cmpcmp: any = toComponent[cmp];
  if (typeof Cmpcmp !== 'undefined') {
    if (isHeadline(block)) {
      return React.createElement(Cmpcmp, {
        key:     block.uid,
        variant: block.variant,
      }, block.text);
    } else if (isParagraph(block)) {
      return React.createElement(Cmpcmp, {
        key:     block.uid,
      }, block.text);
    } else if (isImage(block)) {
      return (
        <div style={{
          marginBottom: '1.5rem',
        }}>
          {React.createElement(Cmpcmp, {
            key: block.uid,
            src: block.image,
            alt: block.alt,
          })}
        </div>
      );
    } else if (isList(block)) {
      const children = block.children;
      let childrenJsx: any;
      if (children != null && Array.isArray(children)) {
        childrenJsx = [];
        for (let index = 0; index < children.length; ++index) {
          const child = Components(children[index]);
          childrenJsx.push(child);
        }
      }

      return React.createElement(Cmpcmp, {
        key: block.uid,
      }, childrenJsx);
    } else if (isListItem(block)) {
      return React.createElement(Cmpcmp, {
        key:     block.uid,
      }, block.text);
    }
  }
  return React.createElement(
    // eslint-disable-next-line react/jsx-one-expression-per-line
    () => <div>The component {block.component} has not been created yet.</div>,
    { key: block.uid }
  );
};

export default Components;
