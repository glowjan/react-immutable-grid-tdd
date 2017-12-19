import React from "react";
import {mount} from "enzyme";
import NormalCell from "./NormalCell";
import * as Enzyme from "enzyme/build/index";
import Adapter from "enzyme-adapter-react-16/build/index";

Enzyme.configure({adapter: new Adapter()});

describe('<NormalCell/>', () => {
    test('should render without crash', () => {
        const wrapper = mount(<NormalCell/>);
        expect(wrapper.exists()).toBeTruthy();
    });

    test('should render empty div', () => {
        const wrapper = mount(<NormalCell/>);
        expect(wrapper.contains(<div className='cell'></div>)).toBeTruthy();
    });

    test('should render active cell', () => {
        const wrapper = mount(<NormalCell active={true}/>);
        expect(wrapper.contains(<div className='cell active'></div>)).toBeTruthy();
    });

});