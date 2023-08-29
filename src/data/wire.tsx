
export interface Wire {
    size : WireSize
    suffix : 'awg' | '' | 'kcmil',
    60 : number, 
    75 : number,
    90 : number
}

export type WireSize = 14 | 12 | 10 | 8 | 6 | 4 | 3 | 2 | 1 | '1/0' | '2/0' | '3/0' | '4/0' | 250 |300 | 350 | 400 | 500 | 600 | 700

export type WireType = 'cu' | 'al' | 'initial'

export interface WireChart {
    table1 : Wire[],
    // table2 : Wire[],
    // table3 : Wire[],
    // table4 : Wire[],
}


export const wireChart : WireChart = {
    table1 : [
        { size : 14,    suffix : 'awg',   60: 2, 75 : 3, 90 : 4 },
        { size : 12,    suffix : 'awg',   60: 2, 75 : 3, 90 : 4 },
        { size : 10,    suffix : 'awg',   60: 2, 75 : 3, 90 : 4 },
        { size : 8,     suffix : 'awg',   60: 2, 75 : 3, 90 : 4 },
        { size : 6,     suffix : 'awg',   60: 2, 75 : 3, 90 : 4 },
        { size : 4,     suffix : 'awg',   60: 2, 75 : 3, 90 : 4 },
        { size : 3,     suffix : 'awg',   60: 2, 75 : 3, 90 : 4 },
        { size : 2,     suffix : 'awg',   60: 2, 75 : 3, 90 : 4 },
        { size : 1,     suffix : 'awg',   60: 2, 75 : 3, 90 : 4 },
        { size : '1/0', suffix : '',      60: 2, 75 : 3, 90 : 4 },
        { size : '2/0', suffix : '',      60: 2, 75 : 3, 90 : 4 },
        { size : '3/0', suffix : '',      60: 2, 75 : 3, 90 : 4 },
        { size : '4/0', suffix : '',      60: 2, 75 : 3, 90 : 4 },
        { size : 250,   suffix : 'kcmil', 60: 2, 75 : 3, 90 : 4 },
        { size : 300,   suffix : 'kcmil', 60: 2, 75 : 3, 90 : 4 },
        { size : 350,   suffix : 'kcmil', 60: 2, 75 : 3, 90 : 4 },
        { size : 400,   suffix : 'kcmil', 60: 2, 75 : 3, 90 : 4 },
        { size : 500,   suffix : 'kcmil', 60: 2, 75 : 3, 90 : 4 },
        { size : 600,   suffix : 'kcmil', 60: 2, 75 : 3, 90 : 4 },
        { size : 700,   suffix : 'kcmil', 60: 2, 75 : 3, 90 : 4 },
    ]
}