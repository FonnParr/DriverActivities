import { useState } from "react"
import drivers from "../../data/drivers.json"
import DriverRow from "./driverRow"

const emptycolumnHeaderCount = 3


export default function Activity(){

    const [filterText, setFilterText] = useState("")

    if (!drivers.data)
        return <div>No driver data</div>

    const visibleDrivers = drivers.data.filter(driver=>{
        if (!filterText)
            return true

        if (driver.vehicleRegistration.toLocaleLowerCase().includes(filterText.toLocaleLowerCase()))
            return true

        const lowerFullName = [driver.forename,driver.surname].join(" ").toLocaleLowerCase()
        return lowerFullName.includes(filterText.toLocaleLowerCase())
    })

    return (
        <div>
            <SearchBox 
                className="SearchBox" 
                placeholder="Search for Driver"
                value={filterText} 
                onChange={setFilterText}/>

{visibleDrivers.length ? 
            <table>
                <thead>
                    <tr className="small">
                        <th colSpan={emptycolumnHeaderCount} />
                        <th>Mon</th>
                        <th>Tue</th>
                        <th>Wed</th>
                        <th>Thu</th>
                        <th>Fri</th>
                        <th>Sat</th>
                        <th>Sun</th>
                    </tr>
                </thead>
                <tbody>
                    {visibleDrivers.map(driver=><DriverRow key={driver.driverID} driver={driver}/>)}
                </tbody>
            </table>
 : <div>No drivers match "{filterText}"</div>
}
        </div>
    )
}

const SearchBox = ({onChange, ...props})=>{

    const changed=(event)=>{
        onChange(event.target.value)
    }

    return (<input 
                onChange={changed}
                {...props}/>
    )
}



