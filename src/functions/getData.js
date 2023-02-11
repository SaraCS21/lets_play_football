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
                "name": "HEIGHT",
                "value": `${value.height} CM`
            },
            {
                "name": "FEET",
                "value": formatFeet(value.rightFeet)
            },
            {
                "name": "AGE",
                "value": `${formatAge(value.birthday)} YEARS`
            },
            {
                "name": "WEIGHT",
                "value": `${value.weight} KG`
            }
        ]
    }

    return Data
}

export { getData }