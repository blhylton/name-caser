export const edge_cases = {
    'Macevicius': 'Macevicius',
    'Machado': 'Machado',
    'Machar': 'Machar',
    'Machin': 'Machin',
    'Machlin': 'Machlin',
    'Macias': 'Macias',
    'Maciulis': 'Maciulis',
    'Mackie': 'Mackie',
    'Mackle': 'Mackle',
    'Macklin': 'Macklin',
    'Macquarie': 'Macquarie',
    'Macomber': 'Macomber',
    'Macin': 'Macin',
    'Mackintosh': 'Mackintosh',
    'Macken': 'Macken',
    'Machen': 'Machen',
    'Macisaac': 'MacIsaac',
    'Machiel': 'Machiel',
    'Maciol': 'Maciol',
    'Mackell': 'Mackell',
    'Macklem': 'Macklem',
    'Mackrell': 'Mackrell',
    'Maclin': 'Maclin',
    'Mackey': 'Mackey',
    'Mackley': 'Mackley',
    'Machell': 'Machell',
    'Machon': 'Machon',
    'Macmurdo': 'MacMurdo'
}

const macAttack = (name) => {
    // If name starts with Mac or Mac
    // Exclude names with only 1-2 letters after prefix (Mack, Macky, Mace, etc.)
    // Exclude names ending in a, c, i, o, z, or j (typically Polish or Italian)
    if (name.match(/^((Mac[A-Za-z]{2,}[^aciozj]$)|(Mc))/) && !edge_cases.hasOwnProperty(name)) {
        return name.replace(/^(Ma?c)([a-z]{1})([A-Za-z]+)/, (match, p1, p2, p3) => p1 + p2.toUpperCase() + p3)
    }

    if(edge_cases.hasOwnProperty(name)){
        return edge_cases[name]
    }

    return name
}

export default macAttack
