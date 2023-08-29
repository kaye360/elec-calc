
export interface Wire {
    size : WireSize
    60 : number, 
    75 : number,
    90 : number
}

export type WireSize = '14awg' | '12awg' | '10awg' | '8awg' | '6awg' | '4awg' | '3awg' | '2awg' | '1awg' | '1/0' | '2/0' | '3/0' | '4/0' | '250kcmil' | '300kcmil' | '350kcmil' | '400kcmil' | '500kcmil' | '600kcmil' | '700kcmil' | 'initial'

export type WireType = 'cu' | 'al' | 'initial'

export interface WireChart {
    table1 : Wire[],
    // table2 : Wire[],
    // table3 : Wire[],
    // table4 : Wire[],
}


export const wireChart : WireChart = {
    table1 : [
        { size : '14awg', 60: 10, 75 : 20, 90 : 30 },
        { size : '12awg', 60: 20, 75 : 30, 90 : 40 },
        { size : '10awg', 60: 30, 75 : 40, 90 : 50 },
        { size : '8awg',  60: 40, 75 : 50, 90 : 30 },
        // { size : '6awg',  60: 2, 75 : 3, 90 : 4 },
        // { size : '4awg',  60: 2, 75 : 3, 90 : 4 },
        // { size : '3awg',  60: 2, 75 : 3, 90 : 4 },
        // { size : '2awg',  60: 2, 75 : 3, 90 : 4 },
        // { size : '1awg',  60: 2, 75 : 3, 90 : 4 },

        // { size : '1/0', 60: 2, 75 : 3, 90 : 4 },
        // { size : '2/0', 60: 2, 75 : 3, 90 : 4 },
        // { size : '3/0', 60: 2, 75 : 3, 90 : 4 },
        // { size : '4/0', 60: 2, 75 : 3, 90 : 4 },

        // { size : '250kcmil', 60: 2, 75 : 3, 90 : 4 },
        // { size : '300kcmil', 60: 2, 75 : 3, 90 : 4 },
        // { size : '350kcmil', 60: 2, 75 : 3, 90 : 4 },
        // { size : '400kcmil', 60: 2, 75 : 3, 90 : 4 },
        // { size : '500kcmil', 60: 2, 75 : 3, 90 : 4 },
        // { size : '600kcmil', 60: 2, 75 : 3, 90 : 4 },
        // { size : '700kcmil', 60: 2, 75 : 3, 90 : 4 },
    ]
}