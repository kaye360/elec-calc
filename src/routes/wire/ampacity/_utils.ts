import { WireAmpacity, wireAmpacityTable } from "../../../data/wireAmpacity"
import { AmpacityResults } from "./_components"


type Results = {
    [key in 'table1' | 'table2' | 'table3' | 'table4']: AmpacityResults
}

export function calcMinWireSizeFromAmps({amps} : {amps : number}) : Results {

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
     * Loop thru wireAmpacityTable and fill container with min values
     */

    // Loop thru tables 1-4
    Object.keys(wireAmpacityTable).forEach( table => {
        
        // Loop thru each wireAmpacityTable table
        wireAmpacityTable[table]?.forEach( (wire : WireAmpacity) => {
            
            // Loop thru wire temps in each table in wireAmpacityTable and check for results
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

    const results = <Results>{}

    Object.entries(minWireSizeResultsContainer).forEach( (table : any) => {
        const [key, value] = table
        results[key] = {
            60: value[60].size,
            75: value[75].size,
            90: value[90].size,
        }
    })

    return results 
}