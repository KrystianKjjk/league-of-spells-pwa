import React from 'react';
import { shallow } from 'enzyme'
import StartScreen from './StartScreen'
import { Container, Circle, Triangle } from './style'
import { Button } from '../../GlobalStyles';

it('renders without crashing', () => {
    shallow(<StartScreen />);
})
it('contains circle and button inside', () => {
    const screen = shallow(<StartScreen />);
    // console.log(expect(screen.find(Circle).children()).toHaveLength(2));
    expect(screen.find(Container).children()).toHaveLength(2);
})
it('circle contains 4 triangles', () => {
    const screen = shallow(<StartScreen />);
    expect(screen.find(Circle).children()).toHaveLength(4);
})
it('Contains 1 button', () => {
    const screen = shallow(<StartScreen />);
    expect(screen.containsMatchingElement(<Button />))
})
