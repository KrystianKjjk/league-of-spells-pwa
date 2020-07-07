import React from 'react';
import { mount } from 'enzyme'
import { useHeight } from '../useHeight';


const Height = ({ children, ...props }) => children(useHeight())

const setup = props => {
    const returnVal = { xD: 55 };
    mount(
        <Height {...props}>
            {
                val => {
                    Object.assign(returnVal, { val })
                    return null;
                }
            }
        </Height>
    )

    return returnVal.val;
}

it('returns global innerHeight', () => {
    const givenHeight = 500;
    global.innerHeight = givenHeight;
    const height = setup();

    expect(height).toEqual(givenHeight);


})