import React, { useState, useEffect } from 'react'
import { API_URL } from '../constants/API_URL'


function TeamContent(){
    const [team, setTeam] = useState([]);

    useEffect(() => {
        async function fetchTeam() {
            const response = await fetch(API_URL, {
                'mode': 'cors'
            });
            const data = await response.json();
            console.log(data)
            // const { team: teamData } = data

            // setTeam(teamData)
        }
        // console.log(team)
        fetchTeam()
    })


    return (
        <div></div>
    )
}

export default TeamContent