import { getDriverDuration, getDriverDurationByType } from "./helper"
import { activityTypes } from "./activityTypes"

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

const ActivityByType = ({ driver, type }) => {
    const duration = getDriverDurationByType(driver, type.toLowerCase())
    return <td className="info" align="right">{duration}</td>
}
