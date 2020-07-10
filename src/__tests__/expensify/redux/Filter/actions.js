import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from '../../../../components/expensify/reduxActionExports'
import moment from 'moment'

test('check start date-action filter',()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:'SET_START_DATE_FILTER',
        startDate:moment(0)
    })
})

test('check end date-action filter',()=>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE_FILTER',
        endDate:moment(0)
    })
})

test('check set text-filter',()=>{
    const action = setTextFilter('hello world');
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:'hello world'
    })
})
test('check set text-filter',()=>{
    const action = setTextFilter();
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:''
    })
})

test('check sort by-amount-filter',()=>{
    const action = sortByAmount();
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT_FILTER',
        
    })
})
test('check sort by date filter',()=>{
    const action = sortByDate();
    expect(action).toEqual({
        type:'SORT_BY_DATE_FILTER',
    })
})


