export type menuShow = boolean | 'toggle'

export interface menuItem {
    title: string,
    type: string,
    variant: string | undefined,
    form_id: number,
    rel_form_id: number | undefined,
    active: boolean,
    groups?: any
}

export interface breadCrumb {
    title: string,
    type: string,
    variant: string | undefined,
    form_id: number,
    rel_form_id: number | undefined
}

export interface IPosition {
    top?: string,
    left?: string,
    bottom?: string,
    right?: string,
    width: string,
}