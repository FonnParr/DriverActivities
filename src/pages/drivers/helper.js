import { areEquivelantDates } from "../../common/helper"

export const getTraceDuration = (trace)=>{
    return trace.activity.reduce(
        (total, activity)=>total + activity.duration, 0)
}

export const getTraceDurationByType = (trace, type)=>{
    return trace.activity.reduce(
        (total, activity)=>
        total + (activity.type === type ? activity.duration : 0), 0)
}

export const getDriverDuration = (driver)=>{
    return driver.traces.reduce(
        (total, trace)=>total + getTraceDuration(trace), 0)
}

export const getDriverDurationByType = (driver, type)=>{
    return driver.traces.reduce(
        (total, trace)=>total + getTraceDurationByType(trace, type), 0)
}

export const isActive = (driver, date)=>{
    return driver.traces.some(trace=>areEquivelantDates(date, trace.date))
}


