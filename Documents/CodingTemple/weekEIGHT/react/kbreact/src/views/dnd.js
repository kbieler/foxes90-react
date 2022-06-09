import { ReactFireError } from "reactfire";
import React, {useState} from 'react';

export default function GenerateCharacter() {
    const [character, setCharacter] = useState()

    let createChar = async () => {
        let response = fetch ('https://www.dnd5eapi.co/api/classes')
        let data = await (await response).json()
        console.log(data)
        return data
    }

    return  (
        <div className="container">
            <p>Create a Character</p>
            <button onClick={()=> createChar()}>It's Alive!</button>
        </div>
    )
}

