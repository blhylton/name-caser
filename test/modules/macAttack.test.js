import {default as macAttack, edge_cases} from "../../src/modules/macAttack.js";

test('Mc prefix returns with follower capitalized', () => {
    expect(macAttack('Mcconnell')).toBe('McConnell')
})

test('Mac prefix returns with follower capitalized', () => {
    expect(macAttack('Macleary')).toBe('MacLeary')
})

test('Mc/Mac edge cases', () => {
    for(const e in edge_cases){
        expect(macAttack(e)).toBe(edge_cases[e])
    }
})
