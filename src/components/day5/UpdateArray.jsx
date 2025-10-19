import { useState } from "react"

let id =0;
export default function Array(){

    const [name, setName] = useState("");
    const [artist, setArtist] = useState([]);

    function addArtist(){
        console.log(artist.length)
        // setArtist(...artist, name);
        const newArray = {id: id++, name: name}
        setArtist([...artist, newArray])
    }

    return(<>
        <input onChange={(e)=> setName(e.target.value)}/>
        <button onClick={addArtist}>Add</button>

        <ul>
            {artist.map((arti => 
                <li key ={arti.id}>{arti.name}</li>
            ))}
        </ul>
    </>)
}