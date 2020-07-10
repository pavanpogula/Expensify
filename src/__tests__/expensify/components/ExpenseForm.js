import React from 'react'
import {shallow,mount} from 'enzyme'
import ExpenseForm  from '../../../components/expensify/components/ExpenseForm'
import expensesArray from '../../../fakeExpensesArray/fakeData'
import moment from'moment';
import {SingleDatePicker} from 'react-dates'
test('should render expense-add-form  ', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
})

test('should render expense-add-form with data ', () => {
    const wrapper = shallow(<ExpenseForm expense ={expensesArray[0]}/>)
    expect(wrapper).toMatchSnapshot()
})


test('should render expense-add-form without data ', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit',{
        preventDefault : ()=>{}
    });
    expect(wrapper.state('error')).toEqual('Please provide description and amount.');
    // expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot();
})

test('should render expense-add-form set description on input change', () => {
    const value='hi description'
    const wrapper =shallow(<ExpenseForm/>)
    wrapper.find('input').at(0).simulate('change',{
        target:{value}
    })
    expect(wrapper.state('description')).toBe(value)
    // expect(wrapper).toMatchSnapshot();
})


test('should render expense-add-form set textarea on input change', () => {
    const value='hi textArea'
    const wrapper =shallow(<ExpenseForm/>)
    wrapper.find('textarea').at(0).simulate('change',{
        target:{value}
    })
    expect(wrapper.state('note')).toBe(value)
    // expect(wrapper).toMatchSnapshot();
})



test('should render expense-add-form set amount on valid input change', () => {
    const value='12345'
    const wrapper =shallow(<ExpenseForm/>)
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    })
    expect(wrapper.state('amount')).toBe(value)
    // expect(wrapper).toMatchSnapshot();
})


test('should render expense-add-form set amount on invalid input ', () => {
    const value='hi description'
    const wrapper =shallow(<ExpenseForm/>)
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    })
    expect(wrapper.state('amount')).toBe('')
    // expect(wrapper).toMatchSnapshot();
})

test('should call onSubmit prop fro valid form submission', () => {
    const onSubmitSpy = jest.fn();
   const wrapper = shallow(<ExpenseForm expense={expensesArray[0]} onSubmit = {onSubmitSpy}/>)
   wrapper.find('form').simulate('submit',{
       preventDefault:()=>{}})
   
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description:expensesArray[0].description,
        amount : expensesArray[0].amount,
        note:expensesArray[0].note,
        createdAt:expensesArray[0].createdAt
    })
})

test('should set new date on date change', () => {
    const now = moment()
    const wrapper = shallow(<ExpenseForm/>)
 wrapper.find(SingleDatePicker).prop('onDateChange')(now)
 expect(wrapper.state('createdAt')).toEqual(now)
    // expect(wrapper.contains(<SingleDatePicker/>)).toBe(false)

})

test('should set calender isFocused to true', () => {
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find(SingleDatePicker).prop('onFocusChange')({focused:true})
    expect(wrapper.state('calendarFocused')).toBe(true)
    // console.log(wrapper.state('calendarFocused'))
})
