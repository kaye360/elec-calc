

export type ConduitSize = 
    0.5 |
    0.75 |
    1 |
    1.25 |
    1.5 |
    2 |
    2.5 |
    3 


export const conduitSizeStrings : {[key in ConduitSize] : string} = {
    0.5  : '1/2',
    0.75 : '3/4',
    1    : '1',
    1.25 : '1 1/4',
    1.5  : '1 1/2',
    2    : '2',
    2.5  : '2 1/2',
    3    : '3'
}

