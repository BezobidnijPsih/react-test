import React from 'react';
import Menu from './Menu';
import toJson from 'enzyme-to-json';

describe('Menu', () => {
  test('should render correctly', () => {
    const menu = shallow(<Menu />);
    expect(toJson(menu)).toMatchSnapshot();
  });
});
