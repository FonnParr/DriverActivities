import { getDriverDuration, getDriverDurationByType } from "./helper"
import { activityTypes } from "./activityTypes"

/**
 * A component for showing a driver's activity broken down by type and including the total
 * @param {driver} driver
 */
export default function ActivityBreakdown({ driver }) {
    const totalActivityDuration = getDriverDuration(driver)
    return (
        <>
            {activityTypes.map(type =>
                <ActivityByType driver={driver} type={type} />
            )}
            <td className="info" align="right">{totalActivityDuration}</td>
        </>
    )
}

/**
 * A sub-component for a table cell containing the total duration for a driver doing a specific type of activity for the period
 * @param {driver} driver
 * @param {string} type
 */
const ActivityByType = ({ driver, type }) => {
    const duration = getDriverDurationByType(driver, type.toLowerCase())
    return <td className="info" align="right">{duration}</td>
}
