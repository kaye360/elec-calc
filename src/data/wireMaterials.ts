

interface WireMaterial {
    abbr : string,
    resistance : number
}

interface Copper extends WireMaterial {
    abbr : 'cu',
    resistance : 12.9
}

interface Aluminum extends WireMaterial {
    abbr : 'al',
    resistance : 21.2
}

interface WireMaterials {
    copper : Copper,
    aluminum : Aluminum
}

export const wireMaterials : WireMaterials = {
    copper : {
        abbr : 'cu',
        resistance : 12.9
    },
    aluminum : {
        abbr : 'al',
        resistance : 21.2
    }
}



