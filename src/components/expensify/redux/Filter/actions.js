import {
        SET_TEXT_FILTER,
        SORT_BY_AMOUNT,
        SORT_BY_DATE,
        SET_END_DATE,
        SET_START_DATE
    } from './types'
// SET TEXT FILTER
const setTextFilter = (text='')=>({
    type:SET_TEXT_FILTER,
    text
})
const sortByDate =()=>({
    type : SORT_BY_DATE,
    
})
const sortByAmount =()=>({
    type : SORT_BY_AMOUNT,   
})
const setEndDate = (endDate)=>({
    type:SET_END_DATE,
    endDate
})
const setStartDate = (startDate)=>({
    type:SET_START_DATE,
    startDate
})

export {setTextFilter,setStartDate,setEndDate,sortByAmount,sortByDate}