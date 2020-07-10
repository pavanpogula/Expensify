import React from 'react';
import {shallow} from 'enzyme'
import expenseArray from '../../../fakeExpensesArray/fakeData'
import {ExpenseList} from '../../../components/expensify/components/ExpenseList'


test('should RENDER EXPENSELIST WITH EXPENSE', () => {
    const wrapper = shallow(<ExpenseList expenses={expenseArray}/>)
    expect(wrapper).toMatchSnapshot();
})

test('should render expenselist with empty expense message', () => {
    const wrapper = shallow(<ExpenseList expenses={[]}/>)
    expect(wrapper).toMatchSnapshot();
})


