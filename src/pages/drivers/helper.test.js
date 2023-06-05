import { getDriverDuration, getDriverDurationByType } from "./helper"

const sampleDriverMultipleTraces = {
    "traces":[
        {
            "date":"2021-02-01",
            "activity":[
                {
                    "startTime":"09:00",
                    "type":"drive",
                    "duration":1
                },
                {
                    "startTime":"09:00",
                    "type":"drive",
                    "duration":2
                },
                {
                    "startTime":"09:00",
                    "type":"rest",
                    "duration":4
                },
            ]
        },
        {
            "date":"2021-02-01",
            "activity":[
                {
                    "startTime":"09:00",
                    "type":"drive",
                    "duration":8
                }
            ]
        }
    ]
}
const sampleDriverOneTrace = {
    "traces":[
        {
            "date":"2021-02-01",
            "activity":[
                {
                    "startTime":"09:00",
                    "type":"drive",
                    "duration":1
                },
                {
                    "startTime":"09:00",
                    "type":"drive",
                    "duration":2
                },
                {
                    "startTime":"09:00",
                    "type":"rest",
                    "duration":4
                },
            ]
        }
    ]
}
const sampleDriverNoTraces = {    
}
const sampleDriverNoActivities = {
    "traces":[
        {
            "date":"2021-02-01"            
        }
    ]
}




//Test getDriverDuration
test('getDriverDuration multiple traces', () => {
    const duration = getDriverDuration(sampleDriverMultipleTraces)
    expect(duration).toEqual(1+2+4+8);
});

test('getDriverDuration one trace', () => {
    const duration = getDriverDuration(sampleDriverOneTrace)
    expect(duration).toEqual(1+2+4);
});

test('getDriverDuration no traces', () => {
    const duration = getDriverDuration(sampleDriverNoTraces)
    expect(duration).toEqual(0);
});

test('getDriverDuration no activities', () => {
    const duration = getDriverDuration(sampleDriverNoActivities)
    expect(duration).toEqual(0);
});





//Test getDriverDurationByType
test('getDriverDurationByType multiple traces', () => {
    const duration = getDriverDurationByType(sampleDriverMultipleTraces, "drive")
    expect(duration).toEqual(1 + 2 + 8);
});

test('getDriverDurationByType one trace', () => {
    const duration = getDriverDurationByType(sampleDriverOneTrace, "drive")
    expect(duration).toEqual(1 + 2);
});

test('getDriverDurationByType no traces', () => {
    const duration = getDriverDurationByType(sampleDriverNoTraces, "drive")
    expect(duration).toEqual(0);
});

test('getDriverDurationByType no activities', () => {
    const duration = getDriverDurationByType(sampleDriverNoActivities, "drive")
    expect(duration).toEqual(0);
});

