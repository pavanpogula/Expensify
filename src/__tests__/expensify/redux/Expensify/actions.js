import {removeExpense,addExpense,editExpense} from '../../../../components/expensify/reduxActionExports'

test('remove expense-action test', () => {
    
    expect(removeExpense({id:'123qwe'})).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123qwe'
    })
})

test('edit expense-action test',()=>{
    expect(editExpense('123qwe',{notes:'hello there test'})).toEqual({
                type:'EDIT_EXPENSE',
                id:'123qwe',
                updates:{
                    notes:'hello there test'
                }
    })
})

test('add expense-action test',()=>{
    let data={description:'gas bill',amount:800,note:'fak off',createdAt:8056}
    expect(addExpense(data)).toEqual({
        expenses :{ ...data,
        id:expect.any(String)},
        type:'ADD_EXPENSE'
    })
})
test('add expense-action test default values',()=>{
    let data={description:'',amount:0,note:'',createdAt:0}
    expect(addExpense()).toEqual({
        expenses :{ ...data,
        id:expect.any(String)},
        type:'ADD_EXPENSE'
    })
})