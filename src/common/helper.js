/// the number of milliseconds in a (normal) day
const millisecondsPerDay = 24 * 60 * 60 * 1000

/**
 * Generate a new date by adding the specified number of days to the provided date
 * @param {Dat | string} date - the start date
 * @param {number} days - the number of days to add
 * @returns {Date}
 */
export const addDays = (date, days) => {
    return new Date(new Date(date).getTime() + (days * millisecondsPerDay))
}

/**
 * Determine if two dates are equivelant
 * @param {Date | string} date1
 * @param {Date | string} date2
 * @returns {Boolean}
 */
export const areEquivelantDates = (date1, date2) => {
    return new Date(date1).valueOf() === new Date(date2).valueOf()
}