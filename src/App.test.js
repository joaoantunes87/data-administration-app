import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

jest.mock('d2-ui/lib/app-header/HeaderBar');

it('renders without crashing', () => {
  shallow(<App />);
});
