import { areEquivelantDates, addDays } from "./helper"

//Test areEquivelantDates
test('areEquivelantDates - dates are the same object', () => {
    const date1 = new Date("2023/6/5")
    const same = areEquivelantDates(date1, date1)
    expect(same).toBeTruthy();
});

test('areEquivelantDates - dates are the same date', () => {
    const date1 = new Date("2023/6/5")
    const date2 = new Date("2023/6/5")
    const same = areEquivelantDates(date1, date2)
    expect(same).toBeTruthy();
});

test('areEquivelantDates - dates are the same date, one is a string', () => {
    const date1 = new Date("2023/6/5")
    const date2 = "2023/6/5"
    const same = areEquivelantDates(date1, date2)
    expect(same).toBeTruthy();
});

test('areEquivelantDates - dates are the same date, both are strings', () => {
    const date1 = new Date("2023/6/5")
    const date2 = "2023/6/5"
    const same = areEquivelantDates(date1, date2)
    expect(same).toBeTruthy();
});

test('areEquivelantDates - dates are a different day', () => {
    const date1 = new Date("2023/6/5")
    const date2 = new Date("2023/6/6")
    const same = areEquivelantDates(date1, date2)
    expect(same).toBeFalsy();
});

test('areEquivelantDates - dates are a different month', () => {
    const date1 = new Date("2023/6/5")
    const date2 = new Date("2023/7/5")
    const same = areEquivelantDates(date1, date2)
    expect(same).toBeFalsy();
});

test('areEquivelantDates - dates are a different year', () => {
    const date1 = new Date("2023/6/5")
    const date2 = new Date("2024/6/5")
    const same = areEquivelantDates(date1, date2)
    expect(same).toBeFalsy();
});



// Test addDays
test('addDays - adding nothing', () => {
    const date1 = new Date("2023/6/5")
    const date2 = addDays(date1, 0)
    const same = areEquivelantDates(date1, date2)
    expect(same).toBeTruthy();
});

test('addDays - adding one day', () => {
    const date1 = new Date("2023/6/5")
    const date2 = addDays(date1, 1)
    const same = areEquivelantDates(date1, date2)
    expect(same).toBeFalsy();

    expect(date2.getDate()).toEqual(new Date("2023/6/6").getDate())
});
