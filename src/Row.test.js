import React from "react";
import {mount, shallow} from "enzyme";
import Row from "./Row";
import * as Enzyme from "enzyme/build/index";
import Adapter from "enzyme-adapter-react-16/build/index";
import TitleCell from "./TitleCell";
import NormalCell from "./NormalCell";

Enzyme.configure({adapter: new Adapter()});

describe('<Row/>', () => {
    test('should render without crash', () => {
        const wrapper = mount(<Row row={{cells: []}}/>);
        expect(wrapper.exists()).toBeTruthy();
    });

    test('should render title', () => {
        const wrapper = mount(<Row row={{title: "Some title", cells: []}}/>);
        expect(wrapper.contains(
            <TitleCell title={"Some title"}/>
        ))
            .toBeTruthy();
    });

    test('should render normal cell', () => {
        const wrapper = mount(<Row row={{title: "Some title", cells: [{id: 0}]}}/>);
        expect(wrapper.find(NormalCell).exist()).toBeTruthy();
    });

    test('should render whole row', () => {
        const wrapper = mount(<Row row={{title: "Some title", cells: [{id: 0}]}}/>);
        expect(wrapper.find(TitleCell)).toHaveLength(1);
        expect(wrapper.find(NormalCell)).toHaveLength(1);
    });

    test('should render whole row', () => {
        const wrapper = mount(<Row row={{title: "Some title", cells: [{id: 0}, {id: 2}]}}/>);
        expect(wrapper.find(TitleCell)).toHaveLength(1);
        expect(wrapper.find(NormalCell)).toHaveLength(2);
    });
});