export const CHANGE_AREA = "changeArea"
export const HOVER_AREA = "hoverArea"

export function changeArea(name) {
    return {
        type: CHANGE_AREA,
        name
    }
}

export function hoverArea(name) {
    return {
        type: HOVER_AREA,
        name
    }
}