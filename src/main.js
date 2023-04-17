import macAttack from "./modules/macAttack";
import check from "./modules/check";
import postNominals from "./modules/postNominals";
import conjunctionFixer from "./modules/conjunctionFixer.js";

const main = (name) => {
    // We don't want to change anything if it's may already be valid
    if(!check(name)){
        return name
    }

    // Split the name into a lowercase, trimmed array
    const nameArray = name.trim().toLowerCase().split(' ')

    return nameArray.map((part, idx) => {
        if(idx === nameArray.length - 1 && postNominals(part) !== false){
            return postNominals(part)
        }

        //Capitalize first letter of word
        part = part.charAt(0).toUpperCase() + part.slice(1)

        //Handle Mc and Mac
        part = macAttack(part)

        // If it's not the first or last name, check for oddball conjunctions
        if(idx !== 0 && idx !== nameArray.length - 1){
            part = conjunctionFixer(part)
        }

        return part
    }).join(' ')
}

export default main
