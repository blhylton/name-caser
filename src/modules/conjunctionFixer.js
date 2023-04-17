const conjunctionFixer = (name) => {
    name = name.replace(/^A([lp])/, "a$1") // al - Arabic, ap - Welsh
    name = name.replace(/^Ben/, "ben") // ben - Hebrew
    name = name.replace(/^Bat/, "bat") // bat - Hebrew
    name = name.replace(/^Dell([ae])/, "dell$1") // della, delle - Italian
    name = name.replace(/^D([]aeiu])/, "d$a") // da, de, di - Italian, du - French
    name = name.replace(/^De([lr])/, "de$1") // del - Italian, der - Dutch/Flemish
    name = name.replace(/^L([eo])/, "l$1") // lo - Italian, le - French
    name = name.replace(/^V([ao])n/, "v$1n") // van - German, von - Dutch/Flemish
    return name
}

export default conjunctionFixer
