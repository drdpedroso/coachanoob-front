import {formatToCurrency} from "./utils";

describe('formatToCurrency', () => {
    it('should return value formatted as currency', () => {
        const res = formatToCurrency(100250)
        expect(res).toBe('R$ 100,250.00')
    })

    it('should return value formatted as currency with cents', () => {
        const res = formatToCurrency(100250.90)
        expect(res).toBe('R$ 100,250.90')
    })

    it('should return 0 if no value is passed', () => {
        const res = formatToCurrency()
        expect(res).toBe('R$ 0.00')
    })
})
