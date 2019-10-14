export const dateDict = {
    0 : [0, 16],
    1 : [1, 15],
    2 : [2, 16],
    3 : [3, 15],
    4 : [4, 16],
    5 : [5, 16],
    6 : [6, 16],
    7 : [7, 16],
    8 : [8, 16],
    9 : [9, 16],
    10 : [10, 16],
    11 : [11, 16]
}

export const getGraphDate = (date, dataType) => {
    const year = date.getFullYear();
    if (dataType === 'Annual Average') {
        return new Date(year, 1, 1);
    } else if (dataType === 'Monthly Mean') {
        const monthDate = dateDict[date.getMonth()];
        return new Date(year, monthDate[0], monthDate[1]);
    } else {
        return date;
    }
}

// returns an array of unique attributes in a dataset
// data = an array of objects, attribute = string
export const getUnique = (data, attribute) => {
    const uniqueSet = new Set();
    data.forEach(res => {
        uniqueSet.add(res[attribute]);
    });
    const newList = [...uniqueSet];
    return newList;
}

export const loadImages = () => {
    preloadImage('./images/630EWK001.jpg');
    preloadImage('./images/631WWK001.jpg');
    preloadImage('./images/632ECR005.jpg');
    preloadImage('./images/633WCR002.jpg');
    preloadImage('./images/635TRK002.jpg');
    preloadImage('./images/637SUS001.jpg');
}

export const preloadImage = (url) => {
    const img = new Image();
    img.src = url;
  }