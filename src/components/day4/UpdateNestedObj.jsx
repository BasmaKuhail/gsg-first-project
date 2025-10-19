import { useState } from "react";

export default function NestedObj(){
    const [person, setPerson] = useState({
        name: "Niki de Saint Phalle",
        artwork: {
          title: "Blue Nana",
          city: "Hamburg",
          image: "https://i.imgur.com/Sd1AgUOm.jpg",
        },
    });
    
    function handleNameChange(e){
        setPerson({...person, name: e.target.value})
    }

    // function handleTitleChange(e){
    //     setPerson({...person, artwork:{...person.artwork, title: e.target.value}})
    // }

    // function handleCityChange(e){
    //     setPerson({...person, artwork:{...person.artwork, city: e.target.value}})
    // }
    
    // function handleImageChange(e){
    //     setPerson({...person, artwork:{...person.artwork, image: e.target.value}})
    // }

    function handleNestedObj(e){
        setPerson({...person, artwork:{...person.artwork, [e.target.name]: e.target.value}})

    }
      return(
       <>
      <label>
        Name:
        <input name="name" value={person.name} onChange={handleNameChange} />
      </label>
      <label>
        Title:
        <input
          name="title"
          value={person.artwork.title}
          onChange={handleNestedObj}
        />
      </label>
      <label>
        City:
        <input
          name="city"
          value={person.artwork.city}
          onChange={handleNestedObj}
        />
      </label>
      <label>
        Image:
        <input
          name="image"
          value={person.artwork.image}
          onChange={handleNestedObj}
        />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {" by "}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img src={person.artwork.image} alt={person.artwork.title} />
    </>
      )
}