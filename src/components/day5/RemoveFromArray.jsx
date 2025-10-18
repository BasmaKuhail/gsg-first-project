import { useState } from "react"

let id =0;
export default function RemoveFromArr(){

    const [name, setName] = useState("");
    const [artist, setArtist] = useState([]);

    function addArtist(){
        console.log(artist.length)
        // setArtist(...artist, name);
        const newArray = {id: id++, name: name}
        setArtist([...artist, newArray])
    }

    function deleteArray(){
        setArtist([])
        id = 0;
    }
    function deleteItem(arti){
        setArtist(artist.filter((i) => i.id !== arti.id))
    }

    return(<>
        <input onChange={(e)=> setName(e.target.value)}/>
        <button onClick={addArtist}>Add</button>
        <button onClick={deleteArray}>Delete Arrat</button>

        <ul>
            {artist.map((arti => 
                <li key ={arti.id}>
                    {arti.name}
                    <button onClick={() => deleteItem(arti)}>Delete item</button>

                </li>
            ))}
        </ul>
    </>)
}