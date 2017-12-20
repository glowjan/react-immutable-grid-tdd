import React from "react";
import {mount} from "enzyme";
import Grid from "./Grid";
import * as Enzyme from "enzyme/build/index";
import Adapter from "enzyme-adapter-react-16/build/index";
import Row from "./Row";

Enzyme.configure({adapter: new Adapter()});

describe('<Grid/>', () => {
    test('should render without crash', () => {
        const wrapper = mount(<Grid grid={[]}/>);
        expect(wrapper.exists()).toBeTruthy();
    });

    test('should render single row', () => {
        const wrapper = mount(<Grid grid={[{title: "First", cells: ['some']}]}/>);
        expect(wrapper.exists()).toBeTruthy();
        expect(wrapper.contains(
            <div className='grid'>
                <Row key={0} row={{title: "First", cells: ['some']}}/>
            </div>))
            .toBeTruthy();
    });

    test('should render two rows', () => {
        const wrapper = mount(<Grid grid={[{title: "First", cells: ['some']},{title: "Second", cells: ['some']}]}/>);
        expect(wrapper.exists()).toBeTruthy();
        expect(wrapper.find(Row)).toHaveLength(2);
    });
});