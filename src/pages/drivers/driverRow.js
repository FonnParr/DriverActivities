import { addDays } from "../../common/helper"
import { isActive } from "./helper"
import ActivityBreakdown from "./breakdown"

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

const ActiveDay = ({ day, fullName }) => {
    return <td title={`${fullName} ${day.date.toDateString()}`}><div className={day.isActive ? "day_active" : "day_inactive"} /></td>
}
