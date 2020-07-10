import React from 'react'
// import ReactShallowRenderer from 'react-test-renderer/shallow'; // ES6
import Header from '../../../components/expensify/components/Header'
import {shallow} from 'enzyme'
test('should RENDER HEADER CORRECTLY', () => {

    const wrapper  = shallow(<Header/>);
    expect(wrapper.find('h1').text()).toBe("Expensify");
    expect(wrapper).toMatchSnapshot();
})

