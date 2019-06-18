// @flow
export const formatToCurrency = (val = 0): string => {
    return val.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}
