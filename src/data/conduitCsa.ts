import { ConduitSize } from "./conduitSize"
import { ConduitType } from "./conduitType"


export type ConduitCrossSectionalArea = {
    [key in ConduitType]: { [key in ConduitSize] : number }
}

export const conduitCrossSectionalArea : ConduitCrossSectionalArea = {
    emt :        { 0.5: 75, 0.75: 132, 1: 216, 1.25: 376, 1.5: 515, 2: 853, 2.5: 1513, 3: 2280, },
    pvc :        { 0.5: 0, 0.75: 0, 1: 30, 1.25: 0, 1.5: 0, 2: 0, 2.5: 0, 3: 0, },
    flex :       { 0.5: 0, 0.75: 0, 1: 30, 1.25: 0, 1.5: 0, 2: 0, 2.5: 0, 3: 0, },
    liquidtite : { 0.5: 0, 0.75: 0, 1: 30, 1.25: 0, 1.5: 0, 2: 0, 2.5: 0, 3: 0, },
    coreline :   { 0.5: 0, 0.75: 0, 1: 30, 1.25: 0, 1.5: 0, 2: 0, 2.5: 0, 3: 0, },
}