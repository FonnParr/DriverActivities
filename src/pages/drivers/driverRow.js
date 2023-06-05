import { addDays } from "../../common/helper"
import { isActive } from "./helper"
import ActivityBreakdown from "./breakdown"

export default function DriverRow({driver}){
    const {
        surname,
        forename,
        vehicleRegistration
    } = driver

    const fullName = [forename,surname].join(" ")


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
        <ActivityBreakdown driver={driver}/>
        <td><div className={mon ? "day_active" : "day_inactive"} /></td>
        <td><div className={tue ? "day_active" : "day_inactive"} /></td>
        <td><div className={wed ? "day_active" : "day_inactive"} /></td>
        <td><div className={thu ? "day_active" : "day_inactive"} /></td>
        <td><div className={fri ? "day_active" : "day_inactive"} /></td>
        <td><div className={sat ? "day_active" : "day_inactive"} /></td>
        <td><div className={sun ? "day_active" : "day_inactive"} /></td>
    </tr>)
}
