import { areEquivelantDates } from "../../common/helper"

/**
 * Sum up the total duration for all activities in the trace
 * @param {trace} trace - a trace object with activities
 * @returns {number}
 */
const getTraceDuration = (trace) => {
    return (trace.activity ?? []).reduce(
        (total, activity) => total + activity.duration, 0)
}

/**
 * Sum up the total duration for all activities in the trace that match the activity type
 * @param {trace} trace - a trace object with activities
 * @param {string} type - the activity type (drive, rest etc...)
 * @returns {number}
 */
const getTraceDurationByType = (trace, type) => {
    return (trace.activity ?? []).reduce(
        (total, activity) =>
            total + (activity.type === type ? activity.duration : 0), 0)
}

/**
 * Sum up the activity time for the driver
 * @param {any} driver - a driver object with traces
 * @returns {number}
 */
export const getDriverDuration = (driver) => {
    return (driver.traces ?? []).reduce(
        (total, trace) => total + getTraceDuration(trace), 0)
}

/**
 * Sum up the activity time for the driver, only on the specified activity type
 * @param {driver} driver - a driver object with traces
 * @param {string} type - the activity type (drive, rest etc...)
 * @returns {number}
 */
export const getDriverDurationByType = (driver, type) => {
    return (driver.traces ?? []).reduce(
        (total, trace) => total + getTraceDurationByType(trace, type), 0)
}

/**
 * Determine if the driver has a trace for the specified day with activities
 * @param {driver} driver - a representation of a driver with traces
 * @param {Date | string} date
 * @returns {Boolean}
 */
export const isActive = (driver, date) => {
    return driver.traces.some(trace => areEquivelantDates(date, trace.date) && trace.activity?.length)
}


