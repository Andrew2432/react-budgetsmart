import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Header from '../Header';
import { cleanup } from '@testing-library/react';

afterEach(cleanup);

test('Matches snapshot', () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});
