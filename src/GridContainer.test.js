import React from "react";
import {mount} from "enzyme";
import GridContainer from "./GridContainer";
import Grid from "./Grid";
import Adapter from 'enzyme-adapter-react-16';
import * as Enzyme from "enzyme";

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
        const wrapper = mount(<GridContainer rows={['Apples']} columns={0}/>);
        expect(wrapper.exists()).toBeTruthy();
        expect(wrapper.contains(<Grid grid={[{title:'Apples', cells:[]}]} />)).toBeTruthy();
    });

    test('should render grid with 2 columns and 1 row', () => {
        const wrapper = mount(<GridContainer rows={['Apples']} columns={2}/>);
        expect(wrapper.exists()).toBeTruthy();
        expect(wrapper.contains(<Grid grid={[{title:'Apples', cells:[{id:0, active:false}, {id:1, active:false}]}]} />)).toBeTruthy();
    });

    test('should render grid with 2 columns and 2 rows', () => {
        const wrapper = mount(<GridContainer rows={['Apples','Oranges']} columns={2}/>);
        expect(wrapper.exists()).toBeTruthy();
        expect(wrapper.contains(<Grid grid={[{title:'Apples', cells:[{id:0, active:false}, {id:1, active:false}]},
            {title:'Oranges', cells:[{id:0, active:false}, {id:1, active:false}]}]} />)).toBeTruthy();
    });
});