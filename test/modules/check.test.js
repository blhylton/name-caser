import check from "../../src/modules/check.js";

test('check returns true for UPPERCASED names', () => {
    expect(check('DALE JENKINSON')).toBe(true)
})

test('check returns true for lowercased names', () => {
    expect(check('renee middleton')).toBe(true)
})

test('check returns false for Mixed Case names', () => {
    expect(check('Timothy Hancock')).toBe(false)
})
