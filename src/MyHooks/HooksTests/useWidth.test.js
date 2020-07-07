import React from 'react';
import { shallow, mount } from 'enzyme'
import { useWidth } from '../useWidth';

const Width = ({ children, ...rest }) => children(useWidth(rest.threshold, rest.result))

const setup = props => {
    const returnVal = {}
    mount(
        <Width {...props}>
            {
                val => {
                    Object.assign(returnVal, val)
                    return null;
                }
            }
        </Width>
    )
    return returnVal;
}

it('test useWidth, innerWidth greater than threshold', () => {
    global.innerWidth = 600;

    const threshold = [500];
    const results = ["A", "B"];
    const widthData = setup({ threshold: threshold, result: results });

    expect(widthData.resultValue).toEqual(results[results.length - 1])

})
it('test useWidth, innerWidth smaller than threshold', () => {
    global.innerWidth = 300;

    const threshold = [500];
    const results = ["A", "B"];
    const widthData = setup({ threshold: threshold, result: results });

    expect(widthData.resultValue).toEqual(results[0])

})
it('test useWidth, width param tested', () => {
    const globalWidth = 300;
    global.innerWidth = globalWidth;

    const threshold = [500];
    const results = ["A", "B"];
    const widthData = setup({ threshold: threshold, result: results });

    expect(widthData.width).toEqual(globalWidth)

})
it('test useWidth, two threshold levels, with three results levels, greatest result expected', () => {
    const globalWidth = 900;
    global.innerWidth = globalWidth;

    const threshold = [500, 800];
    const results = ["A", "B", "C"];
    const widthData = setup({ threshold: threshold, result: results });

    expect(widthData.resultValue).toEqual("C")

})
it('test useWidth, two threshold levels, with three results levels, smallest result expected', () => {
    const globalWidth = 400;
    global.innerWidth = globalWidth;

    const threshold = [500, 800];
    const results = ["A", "B", "C"];
    const widthData = setup({ threshold: threshold, result: results });

    expect(widthData.resultValue).toEqual("A")

})
it('test useWidth, two threshold levels, with three results levels, medium result expected', () => {
    const globalWidth = 600;
    global.innerWidth = globalWidth;

    const threshold = [500, 800];
    const results = ["A", "B", "C"];
    const widthData = setup({ threshold: threshold, result: results });

    expect(widthData.resultValue).toEqual("B")

})
it('test useWidth, four threshold levels, with five results levels, fourth result expected', () => {
    const globalWidth = 550;
    global.innerWidth = globalWidth;

    const threshold = [300, 400, 500, 600];
    const results = ["A", "B", "C", "D", "E"];
    const widthData = setup({ threshold: threshold, result: results });

    expect(widthData.resultValue).toEqual("D")

})
it('test useWidth, four threshold levels, with five results levels, limit value tested, gives result with greater result level', () => {
    const globalWidth = 500;
    global.innerWidth = globalWidth;

    const threshold = [300, 400, 500, 600];
    const results = ["A", "B", "C", "D", "E"];
    const widthData = setup({ threshold: threshold, result: results });

    expect(widthData.resultValue).toEqual("D")

})
it('test useWidth, four threshold levels, with five results levels, limit value tested, gives result with greater result level, second test', () => {
    const globalWidth = 300;
    global.innerWidth = globalWidth;

    const threshold = [300, 400, 500, 600];
    const results = ["A", "B", "C", "D", "E"];
    const widthData = setup({ threshold: threshold, result: results });

    expect(widthData.resultValue).toEqual("A")

})
// it('tests useWidth, width property', () => {
//     const threshold = 500;
//     const smallValue = "A";
//     const hugeValue = "B"

//     // const widthProperty = useWidth(500, "A", "B")
//     const widthComponent = shallow(<useWidthTest threshold={threshold} smallValue={smallValue} hugeValue={hugeValue} />)

//     console.log(" TEST", widthComponent);
//     expect(widthComponent).toHaveProperty('widthProperty', "A")
// })