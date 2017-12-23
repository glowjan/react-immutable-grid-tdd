import React from "react";
import {mount} from "enzyme";
import GridContainer from "./GridContainer";
import Grid from "./Grid";
import Adapter from 'enzyme-adapter-react-16';
import * as Enzyme from "enzyme";
import History from "./History";

Enzyme.configure({ adapter: new Adapter() });

describe('<GridContainer/>', () => {
    test('should render without crash', () => {
        const wrapper = mount(<GridContainer rows={['Some','Some2']} columns={2}/>);
        expect(wrapper.exists()).toBeTruthy();
    });

    test('should render empty grid', () => {
        const wrapper = mount(<GridContainer rows={[]} columns={2}/>);
        expect(wrapper.exists()).toBeTruthy();
        expect(wrapper.contains(<Grid grid={[]} />)).toBeTruthy();
    });

    test('should render grid with not empty rows', () => {
        var grid = new GridContainer({rows:['Apples'], columns:0}).state.grid
        expect(grid[0].title === 'Apples').toBeTruthy();
        expect(grid[0].cells).toHaveLength(0);
    });

    test('should render grid with 2 columns and 1 row', () => {
        var grid = new GridContainer({rows:['Apples'], columns:2}).state.grid
        expect(grid[0].title === 'Apples').toBeTruthy();
        expect(grid[0].cells).toHaveLength(2);

    });

    test('should render grid with 2 columns and 2 rows', () => {
        var grid = new GridContainer({rows:['Apples', 'Oranges'], columns:2}).state.grid
        expect(grid[0].title === 'Apples').toBeTruthy();
        expect(grid[1].title === 'Oranges').toBeTruthy();
    });

    test('should render empty grid', () => {
        const wrapper = mount(<GridContainer rows={[]} columns={2}/>);
        expect(wrapper.exists()).toBeTruthy();
        expect(wrapper.contains(<History />)).toBeTruthy();
    });

});