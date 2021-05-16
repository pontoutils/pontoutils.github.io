

const sum = ({hour1 = 0, hour2 = 0, minute1 = 0, minute2 = 0}) => {
    const sumHours = hourToSeconds(hour1) + hourToSeconds(hour2);
    const sumMinutes = minutesToSeconds(minute1) + minutesToSeconds(minute2);
    return {
        hours: extractHoursFromSeconds(sumHours + sumMinutes),
        minutes: extractMinutesFromSeconds(sumHours + sumMinutes)
    };
}

const decrease = ({hour1 = 0, hour2 = 0, minute1 = 0, minute2 = 0}) => {
    const sumFirstLine = hourToSeconds(hour1) + minutesToSeconds(minute1);
    const sumSecondLine =  hourToSeconds(hour2) + minutesToSeconds(minute2);

    const result = sumFirstLine - sumSecondLine;
    return {
        hours: extractHoursFromSeconds(result),
        minutes: extractMinutesFromSeconds(result)
    };
}

const reset = (setTime) => {
    setTime({});
    return {};
}

const calcNightlyFactor = ({hours, minutes}) => {
    const minutesInSeconds = minutes ? minutesToSeconds(minutes) : 0;
    const totalSeconds = hours ? hourToSeconds(hours) + minutesInSeconds : minutesInSeconds;
    if(!minutesInSeconds && !totalSeconds ) return {};

    const resultsWithFactor = totalSeconds * getNightlyFactor();

    return {
        hours: extractHoursFromSeconds(resultsWithFactor),
        minutes: extractMinutesFromSeconds(resultsWithFactor)
    }
}

const removeNightlyFactor = ({hours, minutes}) => {
    const minutesInSeconds = minutes ? minutesToSeconds(minutes) : 0;
    const totalSeconds = hours ? hourToSeconds(hours) + minutesInSeconds : minutesInSeconds;

    if(!minutesInSeconds && !totalSeconds) return {};

    const resultWithoutFactor = Math.ceil(totalSeconds / getNightlyFactor());

    return {
        hours: extractHoursFromSeconds(resultWithoutFactor),
        minutes: extractMinutesFromSeconds(resultWithoutFactor)
    }
}

const hourToSeconds = hour => hour * 3600;

const minutesToSeconds = minutes => minutes * 60;

const extractHoursFromSeconds = seconds => Math.floor(seconds / 3600);

const extractMinutesFromSeconds = seconds => Math.floor(seconds % 3600 / 60);

const getNightlyFactor = () => 8/7; 

export { sum, decrease, reset, extractHoursFromSeconds, extractMinutesFromSeconds, calcNightlyFactor, removeNightlyFactor}