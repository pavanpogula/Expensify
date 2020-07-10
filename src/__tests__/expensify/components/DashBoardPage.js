import React from 'react'
import {shallow} from 'enzyme'
import DashBoardPage from '../../../components/expensify/components/DashBoardPage'

test('should render dashboard page', () => {
    const wrapper = shallow(<DashBoardPage/>)
    expect(wrapper).toMatchSnapshot();
})
