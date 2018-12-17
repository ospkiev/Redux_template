export const plus = (number) => {
    return {
        type: 'type',
        data: number,
    }
}

export const minus = (number) => ({
    type: 'minus',
    data: number,
})

export const reset = {
    type: 'reload'
} 