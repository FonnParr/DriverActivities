import { addDays } from "../../common/helper"
import { isActive } from "./helper"
import ActivityBreakdown from "./breakdown"

/**
 * A component for the table row detailing a driver's activity over the period
 * @param {driver} driver
 * @param {Date} startDate - the first day of the calendar section
 * @param {number} days - how many days to show on the calendar section
 */
export default function DriverRow({ driver, startDate, days }) {
    const {
        surname,
        forename,
        vehicleRegistration
    } = driver

    const fullName = [forename, surname].join(" ")

    let activeDays = []
    for (let i = 0; i < days; i++) {
        const date = addDays(startDate, i)
        activeDays.push({ date, isActive: isActive(driver, date) })
    }

    return (
        <tr className="DriverRow">
            <td className="info">{fullName}</td>
            <td className="info">{vehicleRegistration}</td>
            <ActivityBreakdown driver={driver} />
            {activeDays.map(day => <ActiveDay day={day} fullName={fullName} />)}
        </tr>)
}

/**
 * A sub-component for a table cell that shows if the driver was active
 * @param {day} day - an object containing a date and a flag to show if the driver was active that day
 * @param {string} fullName - the name of the driver
 */
const ActiveDay = ({ day, fullName }) => {
    return <td title={`${fullName} ${day.date.toDateString()}`}><div className={day.isActive ? "day_active" : "day_inactive"} /></td>
}
