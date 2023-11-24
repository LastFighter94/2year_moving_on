import {header} from "../../layouts/rootLayout/header/store/Header";

export const calculateHeight = (): string => {
    return `calc(100vh - ${header.height} - ${header.marginBottom})`
}

// add global modificators
export const addGlobModificator = (className: string, modificator: string) => {
    return [className, modificator].join(' ')
}