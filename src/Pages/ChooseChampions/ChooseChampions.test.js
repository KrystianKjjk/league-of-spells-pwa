import React from 'react';
import { shallow } from 'enzyme'
import ChooseChampions from './ChooseChampions'

it('renders without crashing', () => {
    shallow(<ChooseChampions />);
})