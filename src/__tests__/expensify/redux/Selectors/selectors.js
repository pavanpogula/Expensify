import selectExpenses from '../../../../components/expensify/redux/selectors/expenses';
import moment from 'moment';
const expenses =[
    { 
        id:'0',description: 
        'Water bill',
        amount:12503,
        createdAt:0
    },
    { 
        id:'1',
        description: 'Electric bill',
        amount:5647,
        createdAt:moment(0).subtract(10,"days").valueOf()
    },
    { 
        id:'2',
        description: 'Gas bill' ,
        amount:745,
        createdAt:moment(0).add(10,'days').valueOf()
    },
    { 
        id:'3',
        description: 'Grocery bill',
        amount:6719,
        createdAt:moment(0).subtract(40,'days').valueOf()
    }
]

test('should filter by text value ',()=>{
    const filters={
        text:'G',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }
        const action = selectExpenses(expenses,filters)
        expect(action).toEqual([expenses[2],expenses[3]]);
})

test('should filter by start date value',()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:moment(0),
        endDate:undefined
    }
        const action = selectExpenses(expenses,filters)
        expect(action).toEqual([expenses[2],expenses[0]]);

})

test('should filter by end date value',()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:moment(0)
    }
        const action = selectExpenses(expenses,filters)
        expect(action).toEqual([expenses[0],expenses[1],expenses[3]]);

})


test('should filter by amount value',()=>{
    const filters={
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
        const action = selectExpenses(expenses,filters)
        expect(action).toEqual([expenses[0],expenses[3],expenses[1],expenses[2]]);

})


test('should filter by amount value',()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }
        const action = selectExpenses(expenses,filters)
        expect(action).toEqual([expenses[2],expenses[0],expenses[1],expenses[3]]);

})