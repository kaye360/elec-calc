

export type WireSize = 
    '14awg' | 
    '12awg' | 
    '10awg' | 
    '8awg' | 
    '6awg' | 
    '4awg' |
    '3awg' |
    '2awg' |
    '1awg' |
    '1/0' |
    '2/0' |
    '3/0' |
    '4/0' |
    '250kcmil' |
    '300kcmil' |
    '350kcmil' |
    '400kcmil' |
    '500kcmil'



export const wireSizes : WireSize[] = [
    '14awg',
    '12awg',
    '10awg',
    '8awg',
    '6awg',
    '4awg',
    '3awg',
    '2awg',
    '1awg',
    '1/0',
    '2/0',
    '3/0',
    '4/0',
    '250kcmil',
    '300kcmil',
    '350kcmil',
    '400kcmil',
    '500kcmil'
]



/**
 * 
 * @param input User <Select> Value
 * @param additionalValidValues Any additional values that can be added as a valid result. Can be a string or array of strings
 * @returns boolean
 */
export function isValidWireSize(input : any, additionalValidValues : string | string[] | null = null) : boolean {

    if( Array.isArray(additionalValidValues) ) {
        return [...wireSizes, ...additionalValidValues].includes(input)
    }
    
    if( typeof additionalValidValues === 'string' ) {
        return [...wireSizes, additionalValidValues].includes(input)
    }

    return wireSizes.includes(input)
}