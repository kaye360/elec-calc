import { Wire, wireChart } from "../../../data/wire"


interface MinWire {
    size : string,
    hasMatched : boolean
}

export interface MinWireTable {
    60 : MinWire,
    75 : MinWire,
    90 : MinWire
}

export interface MinWireSizeResults {
    table1 : MinWireTable,
    table2 : MinWireTable,
    table3 : MinWireTable,
    table4 : MinWireTable
}

export function calcMinWireSizeFromAmps({amps} : {amps : number}) : MinWireSizeResults {

    /**
     * Create a container to store min wire sizes
     */
    const minWireSizeResultsContainer = {}

    Array.from( Array(4) ).forEach( (_, index) => {
        minWireSizeResultsContainer['table' + (index + 1)] = {
            60 : { size : '', hasMatched : false },
            75 : { size : '', hasMatched : false },
            90 : { size : '', hasMatched : false }
        }
    } )

    /**
     * Loop thru wireChart and fill container with min values
     */

    // Loop thru tables 1-4
    Object.keys(wireChart).forEach( table => {
        
        // Loop thru each wireChart table
        wireChart[table]?.forEach( (wire : Wire) => {
            
            // Loop thru wire temps in each table in wireChart and check for results
            const wireTemps = [60, 75, 90]
            wireTemps.forEach( wireTemp => {
                if( wire[wireTemp] >= amps && !minWireSizeResultsContainer[table][wireTemp].hasMatched ) {
                    minWireSizeResultsContainer[table][wireTemp].size = wire.size
                    minWireSizeResultsContainer[table][wireTemp].hasMatched = true
                }
            });
        })
    })

    /**
     * Extract results into new object
     */

    const minWireSizeResults = {}

    Object.entries(minWireSizeResultsContainer).forEach( (table : any) => {
        const [key, value] = table
        minWireSizeResults[key] = {
            60: value[60].size,
            75: value[75].size,
            90: value[90].size,
        }
    })

    return minWireSizeResults as MinWireSizeResults
}