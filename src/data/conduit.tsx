import { WireSize } from "./wire"


type ConduitSize = 0.5 | 0.75 | 1 | 1.25 | 1.5 | 2 | 2.5 | 3 

type ConduitType = 'emt' | 'pvc' | 'flex' | 'coreline' | 'liquidtite'

export interface Conduit {
    size : ConduitSize,
    type : ConduitType,

}

type ConduitFillTable = {
    [key in WireSize]: {
        [key in ConduitSize]: number
    }
}

interface ConduitFillTables {
    [key: string] : ConduitFillTable
}

interface ConduitFillTableTitles {
    [key:string] : string
}

export const conduitFillTableTitles: ConduitFillTableTitles = {
    table6a : 'RW90 (600V)',
    table6b : 'RW90 (1000V)',
    table6d : 'RWU90 (1000V), TWU, TWU75 (600V)',
    table6k : 'T90, TWN75 (600V)'
}

export const conduitFillTables: ConduitFillTables = {
    table6a : {
        '14awg':    { 0.5: 5, 0.75: 11, 1: 21, 1.25: 33, 1.5: 49, 2: 89, 2.5: 132, 3: 200 },
        '12awg':    { 0.5: 3, 0.75: 9,  1: 16, 1.25: 26, 1.5: 37, 2: 68, 2.5: 101, 3: 155 },
        '10awg':    { 0.5: 2, 0.75: 6,  1: 12, 1.25: 19, 1.5: 27, 2: 50, 2.5: 75,  3: 114 },
        '8awg':     { 0.5: 1, 0.75: 3,  1: 6,  1.25: 10, 1.5: 15, 2: 28, 2.5: 41,  3: 63 },
        '6awg':     { 0.5: 1, 0.75: 2,  1: 5,  1.25: 7,  1.5: 11, 2: 20, 2.5: 31,  3: 47 },
        '4awg':     { 0.5: 1, 0.75: 1,  1: 3,  1.25: 5,  1.5: 8,  2: 15, 2.5: 22,  3: 34 },
        '3awg':     { 0.5: 0, 0.75: 1,  1: 3,  1.25: 4,  1.5: 7,  2: 12, 2.5: 19,  3: 29 },
        '2awg':     { 0.5: 0, 0.75: 1,  1: 2,  1.25: 4,  1.5: 5,  2: 10, 2.5: 15,  3: 24 },
        '1awg':     { 0.5: 0, 0.75: 1,  1: 1,  1.25: 3,  1.5: 4,  2: 8,  2.5: 11,  3: 18 },
        '1/0':      { 0.5: 0, 0.75: 1,  1: 1,  1.25: 1,  1.5: 3,  2: 6,  2.5: 9,   3: 15 },
        '2/0':      { 0.5: 0, 0.75: 0,  1: 1,  1.25: 1,  1.5: 3,  2: 5,  2.5: 8,   3: 12 },
        '3/0':      { 0.5: 0, 0.75: 0,  1: 1,  1.25: 1,  1.5: 1,  2: 4,  2.5: 6,   3: 10 },
        '4/0':      { 0.5: 0, 0.75: 0,  1: 1,  1.25: 1,  1.5: 1,  2: 3,  2.5: 5,   3: 8 },
        '250kcmil': { 0.5: 0, 0.75: 0, 1: 1, 1.25: 1, 1.5: 1, 2: 3, 2.5: 4, 3: 7 },
        '300kcmil': { 0.5: 0, 0.75: 0, 1: 0, 1.25: 1, 1.5: 1, 2: 2, 2.5: 4, 3: 6 },
        '350kcmil': { 0.5: 0, 0.75: 0, 1: 0, 1.25: 1, 1.5: 1, 2: 1, 2.5: 3, 3: 5 },
        '400kcmil': { 0.5: 0, 0.75: 0, 1: 0, 1.25: 1, 1.5: 1, 2: 1, 2.5: 3, 3: 4 },
        '500kcmil': { 0.5: 0, 0.75: 0, 1: 0, 1.25: 0, 1.5: 1, 2: 1, 2.5: 2, 3: 3 },
    },
    table6b : {
        '14awg': { 0.5: 5, 0.75: 11, 1: 21, 1.25: 33, 1.5: 49, 2: 89, 2.5: 132, 3: 200 },
        '12awg': { 0.5: 5, 0.75: 11, 1: 21, 1.25: 33, 1.5: 49, 2: 89, 2.5: 132, 3: 200, },
        '10awg': { 0.5: 5, 0.75: 11, 1: 21, 1.25: 33, 1.5: 49, 2: 89, 2.5: 132, 3: 200, },
        '8awg': { 0.5: 5, 0.75: 11, 1: 21, 1.25: 33, 1.5: 49, 2: 89, 2.5: 132, 3: 200, },
        '6awg': { 0.5: 5, 0.75: 11, 1: 21, 1.25: 33, 1.5: 49, 2: 89, 2.5: 132, 3: 200, },
        '4awg': { 0.5: 5, 0.75: 11, 1: 21, 1.25: 33, 1.5: 49, 2: 89, 2.5: 132, 3: 200, },
        '3awg': { 0.5: 5, 0.75: 11, 1: 21, 1.25: 33, 1.5: 49, 2: 89, 2.5: 132, 3: 200, },
        '2awg': { 0.5: 5, 0.75: 11, 1: 21, 1.25: 33, 1.5: 49, 2: 89, 2.5: 132, 3: 200, },
        '1awg': { 0.5: 5, 0.75: 11, 1: 21, 1.25: 33, 1.5: 49, 2: 89, 2.5: 132, 3: 200, },
        '1/0': { 0.5: 5, 0.75: 11, 1: 21, 1.25: 33, 1.5: 49, 2: 89, 2.5: 132, 3: 200, },
        '2/0': { 0.5: 5, 0.75: 11, 1: 21, 1.25: 33, 1.5: 49, 2: 89, 2.5: 132, 3: 200, },
        '3/0': { 0.5: 5, 0.75: 11, 1: 21, 1.25: 33, 1.5: 49, 2: 89, 2.5: 132, 3: 200, },
        '4/0': { 0.5: 5, 0.75: 11, 1: 21, 1.25: 33, 1.5: 49, 2: 89, 2.5: 132, 3: 200, },
        '250kcmil': { 0.5: 5, 0.75: 11, 1: 21, 1.25: 33, 1.5: 49, 2: 89, 2.5: 132, 3: 200, },
        '300kcmil': { 0.5: 5, 0.75: 11, 1: 21, 1.25: 33, 1.5: 49, 2: 89, 2.5: 132, 3: 200, },
        '350kcmil': { 0.5: 5, 0.75: 11, 1: 21, 1.25: 33, 1.5: 49, 2: 89, 2.5: 132, 3: 200, },
        '400kcmil': { 0.5: 5, 0.75: 11, 1: 21, 1.25: 33, 1.5: 49, 2: 89, 2.5: 132, 3: 200, },
        '500kcmil': { 0.5: 5, 0.75: 11, 1: 21, 1.25: 33, 1.5: 49, 2: 89, 2.5: 132, 3: 200, },
    },
    table6d : {
        '14awg': { 0.5: 5, 0.75: 11, 1: 21, 1.25: 33, 1.5: 49, 2: 89, 2.5: 132, 3: 200, },
        '12awg': { 0.5: 5, 0.75: 11, 1: 21, 1.25: 33, 1.5: 49, 2: 89, 2.5: 132, 3: 200, },
        '10awg': { 0.5: 5, 0.75: 11, 1: 21, 1.25: 33, 1.5: 49, 2: 89, 2.5: 132, 3: 200, },
        '8awg': { 0.5: 5, 0.75: 11, 1: 21, 1.25: 33, 1.5: 49, 2: 89, 2.5: 132, 3: 200, },
        '6awg': { 0.5: 5, 0.75: 11, 1: 21, 1.25: 33, 1.5: 49, 2: 89, 2.5: 132, 3: 200, },
        '4awg': { 0.5: 5, 0.75: 11, 1: 21, 1.25: 33, 1.5: 49, 2: 89, 2.5: 132, 3: 200, },
        '3awg': { 0.5: 5, 0.75: 11, 1: 21, 1.25: 33, 1.5: 49, 2: 89, 2.5: 132, 3: 200, },
        '2awg': { 0.5: 5, 0.75: 11, 1: 21, 1.25: 33, 1.5: 49, 2: 89, 2.5: 132, 3: 200, },
        '1awg': { 0.5: 5, 0.75: 11, 1: 21, 1.25: 33, 1.5: 49, 2: 89, 2.5: 132, 3: 200, },
        '1/0': { 0.5: 5, 0.75: 11, 1: 21, 1.25: 33, 1.5: 49, 2: 89, 2.5: 132, 3: 200, },
        '2/0': { 0.5: 5, 0.75: 11, 1: 21, 1.25: 33, 1.5: 49, 2: 89, 2.5: 132, 3: 200, },
        '3/0': { 0.5: 5, 0.75: 11, 1: 21, 1.25: 33, 1.5: 49, 2: 89, 2.5: 132, 3: 200, },
        '4/0': { 0.5: 5, 0.75: 11, 1: 21, 1.25: 33, 1.5: 49, 2: 89, 2.5: 132, 3: 200, },
        '250kcmil': { 0.5: 5, 0.75: 11, 1: 21, 1.25: 33, 1.5: 49, 2: 89, 2.5: 132, 3: 200, },
        '300kcmil': { 0.5: 5, 0.75: 11, 1: 21, 1.25: 33, 1.5: 49, 2: 89, 2.5: 132, 3: 200, },
        '350kcmil': { 0.5: 5, 0.75: 11, 1: 21, 1.25: 33, 1.5: 49, 2: 89, 2.5: 132, 3: 200, },
        '400kcmil': { 0.5: 5, 0.75: 11, 1: 21, 1.25: 33, 1.5: 49, 2: 89, 2.5: 132, 3: 200, },
        '500kcmil': { 0.5: 5, 0.75: 11, 1: 21, 1.25: 33, 1.5: 49, 2: 89, 2.5: 132, 3: 200, },
    },
    table6k : {
        '14awg': { 0.5: 5, 0.75: 11, 1: 21, 1.25: 33, 1.5: 49, 2: 89, 2.5: 132, 3: 200, },
        '12awg': { 0.5: 5, 0.75: 11, 1: 21, 1.25: 33, 1.5: 49, 2: 89, 2.5: 132, 3: 200, },
        '10awg': { 0.5: 5, 0.75: 11, 1: 21, 1.25: 33, 1.5: 49, 2: 89, 2.5: 132, 3: 200, },
        '8awg': { 0.5: 5, 0.75: 11, 1: 21, 1.25: 33, 1.5: 49, 2: 89, 2.5: 132, 3: 200, },
        '6awg': { 0.5: 5, 0.75: 11, 1: 21, 1.25: 33, 1.5: 49, 2: 89, 2.5: 132, 3: 200, },
        '4awg': { 0.5: 5, 0.75: 11, 1: 21, 1.25: 33, 1.5: 49, 2: 89, 2.5: 132, 3: 200, },
        '3awg': { 0.5: 5, 0.75: 11, 1: 21, 1.25: 33, 1.5: 49, 2: 89, 2.5: 132, 3: 200, },
        '2awg': { 0.5: 5, 0.75: 11, 1: 21, 1.25: 33, 1.5: 49, 2: 89, 2.5: 132, 3: 200, },
        '1awg': { 0.5: 5, 0.75: 11, 1: 21, 1.25: 33, 1.5: 49, 2: 89, 2.5: 132, 3: 200, },
        '1/0': { 0.5: 5, 0.75: 11, 1: 21, 1.25: 33, 1.5: 49, 2: 89, 2.5: 132, 3: 200, },
        '2/0': { 0.5: 5, 0.75: 11, 1: 21, 1.25: 33, 1.5: 49, 2: 89, 2.5: 132, 3: 200, },
        '3/0': { 0.5: 5, 0.75: 11, 1: 21, 1.25: 33, 1.5: 49, 2: 89, 2.5: 132, 3: 200, },
        '4/0': { 0.5: 5, 0.75: 11, 1: 21, 1.25: 33, 1.5: 49, 2: 89, 2.5: 132, 3: 200, },
        '250kcmil': { 0.5: 5, 0.75: 11, 1: 21, 1.25: 33, 1.5: 49, 2: 89, 2.5: 132, 3: 200, },
        '300kcmil': { 0.5: 5, 0.75: 11, 1: 21, 1.25: 33, 1.5: 49, 2: 89, 2.5: 132, 3: 200, },
        '350kcmil': { 0.5: 5, 0.75: 11, 1: 21, 1.25: 33, 1.5: 49, 2: 89, 2.5: 132, 3: 200, },
        '400kcmil': { 0.5: 5, 0.75: 11, 1: 21, 1.25: 33, 1.5: 49, 2: 89, 2.5: 132, 3: 200, },
        '500kcmil': { 0.5: 5, 0.75: 11, 1: 21, 1.25: 33, 1.5: 49, 2: 89, 2.5: 132, 3: 200, },
    },
}