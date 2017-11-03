import React from 'react';
import toJson from 'enzyme-to-json';
import Header from './Header';

describe('Header', () => {
  test('should render correctly', () => {
    const header = shallow(<Header />);
    expect(toJson(header)).toMatchSnapshot();
  });
});
