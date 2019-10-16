export const analyteDict = {
    'Phosphorus as P, Total' : 'PhosphorusAsP',
    'Phosphorus, Total' : 'Phosphorus',
    'Total Dissolved Solids' : 'TDS',
    'Boron, Dissolved' : 'BoronD',
    'Boron, Total' : 'BoronT',
    'Chloride, Dissolved' : 'Chloride',
    'Sulfate, Dissolved' : 'Sulfate',
    'Nitrogen, Total (Calculated)' : 'NitrogenCalc',
    'Turbidity, Total' : 'Turbidity',
    'Temperature' : 'Temperature',
    'Oxygen, Dissolved, Total' : 'OxygenDissolved',
    'Alkalinity as CaCO3, Total' : 'Alkalinity',
    'Oxygen, Saturation, Total': 'OxygenSaturation',
    'Coliform, Fecal (Single Sample)' : 'ColiformFecalSingle',
    'E. coli (Single Sample)' : 'EcoliSingle',
    'E. coli (Geometric Mean)' : 'EcoliGM',
    'Fluoride, Dissolved' : 'Fluoride',
    'pH' : 'pH',
    'Total Suspended Solids' : 'TSS',
    'Specific Conductivity' : 'SConductivity',
    'Electrical Conductivity' : 'EConductivity',
    'Sodium, Dissolved' : 'Sodium',
    'Potassium, Dissolved' : 'Potassium',
    'Nitrogen, Total' : 'Nitrogen',
    'Magnesium, Dissolved' : 'Magnesium',
    'Electrical Conductivity' : 'Conductivity',
    'Calcium, Dissolved' : 'Calcium',
    'Salinity' : 'Salinity',
    'OrthoPhosphate as P, Dissolved' : 'Orthophosphate',
    'Kjeldahl Nitrogen, Total' : 'KjeldahlN',
    'Nitrate as Nitrogen' : 'NitrateAsNitrogen',
    'Nitrate + Nitrite as N, Dissolved' : 'NitrateNitrite',
    'Nitrogen, Total, Total' : 'Nitrogen'
};

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

export const getMidDate = (date, dataType) => {
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

// rounds to two decimal places
export const roundToTwo = (num) => {    
    return +(Math.round(num + "e+2")  + "e-2");
}

// sorts an array alphabetical ignoring capitalization
export const sortIgnoreCap = (arr) => {
    const sortedArr = arr.sort((a,b) => {
        a = a.toLowerCase();
        b = b.toLowerCase();
        if (a === b) return 0;
        return a < b ? -1 : 1;
    });
    return sortedArr;
}