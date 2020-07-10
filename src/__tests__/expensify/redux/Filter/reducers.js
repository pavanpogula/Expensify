import filterReducer, { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from '../../../../components/expensify/redux/Filter/reducer'
import moment from 'moment';

test('should test filter-reducer', () => {
    const action=filterReducer(undefined,{type:'@INIT'});
    expect(action).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month'),
    })
})

//text reducer

test('should test text filter-reducer', () => {

    const currentState = {
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month'),
    }
    const action = {type:'SET_TEXT_FILTER',text:'hello'}
    const state=filterReducer(currentState,action);
    expect(state.text).toBe('hello')
})

//sort by date filter
test('should test sort by date filter-reducer', () => {

    const currentState = {
        text:'',
        sortBy:'amount',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month'),
    }
    const action = {type:'SORT_BY_DATE_FILTER'}
    const state=filterReducer(currentState,action);
    expect(state.sortBy).toBe('date')
})

//sort by amount filter

test('should test sort by amount filter-reducer', () => {

    const currentState = {
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month'),
    }
    const action = {type:'SORT_BY_AMOUNT_FILTER'}
    const state=filterReducer(currentState,action);
    expect(state.sortBy).toBe('amount')
})


//end date filter


test('should test sort by end date filter-reducer', () => {

   
    const action = {
        type:'SET_END_DATE_FILTER',
        endDate:moment()
    }
    const state=filterReducer(undefined,action);
    expect(state.endDate).toEqual(action.endDate)
})


test('should test sort by start date filter-reducer', () => {

   
    const action = {
        type:'SET_START_DATE_FILTER',
        startDate:moment()
    }
    const state=filterReducer(undefined,action);
    expect(state.startDate).toEqual(action.startDate)
})