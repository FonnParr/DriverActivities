
const getTraceDuration = (trace)=>{
    return trace.activity.reduce(
        (total, activity)=>total + activity.duration, 0)
}

const getDriverDuration = (driver)=>{
    return driver.traces.reduce(
        (total, trace)=>total + getTraceDuration(trace), 0)
}

const areEquivelant = (date1, date2)=>{
    return new Date(date1).valueOf() === new Date(date2).valueOf() 
}

const isActive = (driver, date)=>{
    return driver.traces.some(trace=>areEquivelant(date, trace.date))
}

const addDays = (date, days)=>{
    return new Date(date).getTime()+(days*24*60*60*1000)
}

export default function DriverRow({driver}){
    const {
        surname,
        forename,
        vehicleRegistration
    } = driver

    const fullName = [forename,surname].join(" ")

    const totalActivityDuration = getDriverDuration(driver)

    const startDate = new Date("2021-2-1")
    const mon = isActive(driver, startDate)
    const tue = isActive(driver, addDays(startDate, 1))
    const wed = isActive(driver, addDays(startDate, 2))
    const thu = isActive(driver, addDays(startDate, 3))
    const fri = isActive(driver, addDays(startDate, 4))
    const sat = isActive(driver, addDays(startDate, 5))
    const sun = isActive(driver, addDays(startDate, 6))

    return (
    <tr className="DriverRow">
        <td className="info">{fullName}</td>
        <td className="info">{vehicleRegistration}</td>
        <td className="info" align="right">{totalActivityDuration}</td>
        <td><div className={mon ? "day_active" : "day_inactive"} /></td>
        <td><div className={tue ? "day_active" : "day_inactive"} /></td>
        <td><div className={wed ? "day_active" : "day_inactive"} /></td>
        <td><div className={thu ? "day_active" : "day_inactive"} /></td>
        <td><div className={fri ? "day_active" : "day_inactive"} /></td>
        <td><div className={sat ? "day_active" : "day_inactive"} /></td>
        <td><div className={sun ? "day_active" : "day_inactive"} /></td>
    </tr>)
}