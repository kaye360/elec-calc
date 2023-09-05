

export function isHTMLInputElement(target: any) : target is HTMLInputElement {
    return target instanceof HTMLInputElement
}

export function isHTMLSelectElement(target: any) : target is HTMLSelectElement {
    return target instanceof HTMLSelectElement
}