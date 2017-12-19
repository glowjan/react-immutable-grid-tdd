import React from "react";
import {mount} from "enzyme";
import TitleCell from "./TitleCell";
import * as Enzyme from "enzyme/build/index";
import Adapter from "enzyme-adapter-react-16/build/index";

Enzyme.configure({adapter: new Adapter()});

describe('<TitleCell/>', () => {
    test('should render without crash', () => {
        const wrapper = mount(<TitleCell/>);
        expect(wrapper.exists()).toBeTruthy();
    });

    test('should render title', () => {
        const wrapper = mount(<TitleCell title={"Some Title"}/>);
        expect(wrapper.contains(<div className="cell-title">Some Title</div>)).toBeTruthy();
    });
});