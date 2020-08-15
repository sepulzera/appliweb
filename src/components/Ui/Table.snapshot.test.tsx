/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import renderer from 'react-test-renderer';

import Table from './Table';

const caption = 'This is a caption';

const columns = [
  {
    name: 'SomeProperty',
    title: 'Some Title',
  },
  {
    name: 'AnotherProperty',
    title: 'Another Title',
  },
];

const data = [
  {
    id: 'SomeProperty',
    SomeProperty:    'Some Simple value',
    AnotherProperty: <i>Some complex value</i>,
  },
  {
    id: 'SomeValue',
    SomeProperty:    <i>Another complex value</i>,
    AnotherProperty: 'Another simple value',
  },
];

test('render empty table with no columns', () => {
  const tree = renderer.create(<Table caption={caption} columns={[]} data={[]} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('render empty table', () => {
  const tree = renderer.create(<Table caption={caption} columns={columns} data={[]} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('render filled table', () => {
  const tree = renderer.create(<Table caption={caption} columns={columns} data={data} />).toJSON();
  expect(tree).toMatchSnapshot();
});
