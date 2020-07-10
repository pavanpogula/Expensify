import moment from 'moment'
const expensesArray =[
    {
        id:'0',
        description:'gas bill',
        note:'nothing',
        amount:1234,
        createdAt:0,
    },
    {
        id:'1',
        description:'water bill',
        note:'nothing water',
        amount:500,
        createdAt:moment(0).subtract(40,"days").valueOf(),
    },
    {
        id:'2',
        description:'rent bill',
        note:'nothing rent',
        amount:2500,
        createdAt:moment(0).add(40,"days").valueOf(),
    }

]

export default expensesArray