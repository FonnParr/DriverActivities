import { useState } from "react"
import drivers from "../../data/drivers.json"
import DriverRow from "./driverRow"
import { activityTypes } from "./activityTypes"
import SearchBox from "../../common/searchBox"

const emptycolumnHeaderCount = 2
const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]

/**
 * Determine if either the driver's name or vehicle registration contain the filter text
 * @param {any} driver
 * @param {string} filterText
 * @returns {Boolean}
 */
const driverFilter = (driver, filterText) => {
    if (!filterText)
        return true

    if (driver.vehicleRegistration.toLocaleLowerCase().includes(filterText.toLocaleLowerCase()))
        return true

    const lowerFullName = [driver.forename, driver.surname].join(" ").toLocaleLowerCase()
    return lowerFullName.includes(filterText.toLocaleLowerCase())
}

/**
 * Component for the Drivers' activity logs
 * @param {Date?} startDate - the first date to appear
 * @param {number?} days - the number of days to show on the logs
 */
export default function Activity({ startDate=new Date("2021-2-1"), days=7 }) {
    
    const [filterText, setFilterText] = useState("")

    if (!drivers.data)
        return <div>No driver data</div>

    const visibleDrivers = filterText ? drivers.data.filter(driver=>driverFilter(driver, filterText)) : drivers.data

    let activeDays = []
    for (let i = 0; i < days; i++) {
        activeDays.push(weekday[(startDate.getDay() + i) % 7])
    }

    return (
        <div>
            <SearchBox
                className="SearchBox"
                placeholder="Search for Driver"
                value={filterText}
                onChange={setFilterText} />

            <span className="description">{days} day driver activity log starting on {startDate.toDateString()}</span>

            {visibleDrivers.length ?
                <table>
                    <thead>
                        <tr className="small">
                            <th colSpan={emptycolumnHeaderCount} />
                            {activityTypes.map(type => <th>{type}</th>)}
                            <th>Total</th>
                            {activeDays.map(day=><th>{day}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {visibleDrivers.map(driver =>
                            <DriverRow
                                key={driver.driverID}
                                driver={driver}
                                startDate={startDate}
                                days={days} />)}
                    </tbody>
                </table>
                : <div>No drivers match "{filterText}"</div>
            }
        </div>
    )
}