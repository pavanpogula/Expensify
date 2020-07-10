import React from 'react'
import {shallow} from 'enzyme'
import {ExpenseListItem } from '../../../components/expensify/components/ExpenseListItem'
import ExpenseArray from '../../../fakeExpensesArray/fakeData'

test('should render expense list item with expenseArray data ', () => {
    const wrapper = shallow(<ExpenseListItem {...ExpenseArray[0]} />)
    expect(wrapper).toMatchSnapshot()
})
