import React from 'react'
import {shallow } from 'enzyme'
import PageNotFound from '../../../components/NotFoundPage'

test('should render Page not found ', () => {
    const wrapper = shallow(<PageNotFound/>)
    expect(wrapper).toMatchSnapshot();
})
