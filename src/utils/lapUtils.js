export const findExtremes = (list) =>{
    const valueList = list.map(({lapTime}) => lapTime);

    const best = valueList.indexOf(Math.min(...valueList));
    const worst = valueList.indexOf(Math.max(...valueList));

    return {best, worst};
}

export const addLapTimeToList = (list, value) =>{
    const lap = {
        lapTime: value - list.reduce((sum, elem) => sum + elem.lapTime, 0)
    };
    return [lap, ...list];
}