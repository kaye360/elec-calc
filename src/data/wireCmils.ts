import { WireSize } from "./wireSize";


export interface WireCmils {
    size : WireSize,
    resitance : number
}


export const wireCmils = {
    '14awg' : 4110,
    '12awg' : 6530,
    '10awg' : 10380,
    '8awg' : 16510,
    '6awg' : 26240,
    '4awg' : 41740,
    '3awg' : 52620,
    '2awg' : 66360,
    '1awg' : 83690,
    '1/0' : 105600,
    '2/0' : 133100,
    '3/0' : 167800,
    '4/0' : 211600,
    '250kcmil' : 250000,
    '300kcmil' : 300000,
    '350kcmil' : 350000,
    '400kcmil' : 400000,
    '500kcmil' : 500000,
}