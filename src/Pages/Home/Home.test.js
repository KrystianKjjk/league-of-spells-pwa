// import React from 'react';
// import { shallow } from 'enzyme'
// import Home from './Home'
// import { Container, Circle, Triangle } from './style'
// import { Button } from '../../GlobalStyles';

// it('renders without crashing', () => {
//     shallow(<Home />);
// })
// it('contains circle and button inside', () => {
//     const screen = shallow(<Home />);
//     // console.log(expect(screen.find(Circle).children()).toHaveLength(2));
//     expect(screen.find(Container).children()).toHaveLength(2);
// })
// it('circle contains 4 triangles', () => {
//     const screen = shallow(<Home />);
//     expect(screen.find(Circle).children()).toHaveLength(4);
// })
// it('Contains 1 button', () => {
//     const screen = shallow(<Home />);
//     expect(screen.containsMatchingElement(<Button />))
// })
// it('is started pressed', () => {
//     const screen = shallow(<StartScreen />);
//     console.log(expect(screen.state()))
// })