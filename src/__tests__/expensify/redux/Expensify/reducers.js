import expenseReducer from '../../../../components/expensify/redux/Expensify/reducer'
import {ADD_EXPENSE, REMOVE_EXPENSE, EDIT_EXPENSE} from '../../../../components/expensify/redux/Expensify/types'
import expenseArray from '../../../../fakeExpensesArray/fakeData'


test('should TEST EXPENSE REDUCER WITH DEFAULT VALUE', () => {
    const action=expenseReducer(undefined,{type:'@INIT'});
    expect(action).toEqual([])
})

test('SHOULD TEST ADD_EXPENSE REDUCER',()=>{
    const action ={
        type:ADD_EXPENSE,
        expenses:{
                id:'8',
                description:'qwerty bill',
                note:'nothing qerty',
                amount:14,
                createdAt:0,
        }
                 }
        const state = expenseReducer(expenseArray,action)
            expect(state).toEqual([...expenseArray,action.expenses])
})

test('should  TEST REMOVE EXPENSE REDUCER', () => {
    const action ={
        type:REMOVE_EXPENSE,
        id:'2'
    }
    const state = expenseReducer(expenseArray,action)
    expect(state).toEqual([expenseArray[0],expenseArray[1]])
})


test('should  TEST REMOVE EXPENSE REDUCER WITH WRONG ID', () => {
    const action ={
        type:REMOVE_EXPENSE,
        id:'-2'
    }
    const state = expenseReducer(expenseArray,action)
    expect(state).toEqual(expenseArray)
})

test('SHOULD TEST EDIT_EXPENSE REDUCER',()=>{
    const action ={
        type:EDIT_EXPENSE,
        id:'2',
        updates:{
                description:'qwerty bill',
                }
    }

     const state = expenseReducer(expenseArray,action)
            expect(state[2].description).toBe(action.updates.description)
})


test('SHOULD TEST EDIT_EXPENSE REDUCER WITH WRONG ID',()=>{
    const action ={
        type:EDIT_EXPENSE,
        id:'-2',
        updates:{
                description:'qwerty bill',
                }
    }

     const state = expenseReducer(expenseArray,action)
            expect(state[2]).toEqual(expenseArray[2])
})
