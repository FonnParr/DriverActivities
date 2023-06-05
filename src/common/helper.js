export const addDays = (date, days)=>{
    return new Date(date).getTime()+(days*24*60*60*1000)
}

export const areEquivelantDates = (date1, date2)=>{
    return new Date(date1).valueOf() === new Date(date2).valueOf() 
}