import { formatBirthday, formatAge, formatFeet } from "./functions"

function getData(value){
    const Data = {
        "team": [
            {
                "name": "PLAYERS",
                "value": value.players?.length
            },
            {
                "name": "AGE",
                "value": "35 YEARS"
            }
        ],
    
        "player": [
            {
                "name": "BIRTHDAY",
                "value": formatBirthday(value.birthday)
            },
            {
                "name": "AGE",
                "value": `${formatAge(value.birthday)} YEARS`
            },
            {
                "name": "HEIGHT",
                "value": `${value.height} CM`
            },
            {
                "name": "WEIGHT",
                "value": `${value.weight} KG`
            },
            {
                "name": "FEET",
                "value": formatFeet(value.rightFeet)
            }
        ]
    }

    return Data
}

export { getData }