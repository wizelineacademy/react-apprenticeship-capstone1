import React from 'react';
import HomeView from '../pages/HomeView/Homeview.page';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../components/Header/Header.component';
import VideoList from '../components/VideoList/VideoList.component';

configure({ adapter: new Adapter() });

describe('Testing the component elements', () => {
  it('Component is rendered', () => {
    const wrapper = shallow(<HomeView />);
    const component = wrapper.find(Header);
    const renderProp = shallow(component.prop('children')());
    const children = renderProp.find('div');
    expect(children.exists()).toBe(true);
    // expect(component.exists()).toEqual(true);  //return true
    // expect(wrapper.containsMatchingElement(<Header />)).toEqual(true);
  });

  it('Component is rendered', () => {
    const wrapper = shallow(<HomeView />);
    expect(wrapper.containsMatchingElement(<VideoList videos={[]} />)).toEqual(
      true
    );
  });
});
