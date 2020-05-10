/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import renderer from 'react-test-renderer';

import Emoji from './Emoji';

test('render emoji with no label', () => {
  const tree = renderer.create(<Emoji>👋</Emoji>).toJSON();
  expect(tree).toMatchSnapshot();
});

test('render emoji with label', () => {
  const tree = renderer.create(<Emoji label='Waving hand'>👋</Emoji>).toJSON();
  expect(tree).toMatchSnapshot();
});
