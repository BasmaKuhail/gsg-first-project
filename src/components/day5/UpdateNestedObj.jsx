import { useState } from "react";
import { useImmer } from "use-immer";

export default function NestedObj(){
    const [person, updatePerson] = useImmer({
        name: "Niki de Saint Phalle",
        artwork: {
          title: "Blue Nana",
          city: "Hamburg",
          image: "https://i.imgur.com/Sd1AgUOm.jpg",
        },
    });
    
    function handleNameChange(e){
        // setPerson({...person, name: e.target.value})
        updatePerson(draft => {draft.name = e.target.value});
    }

    function handleTitleChange(e){
        // setPerson({...person, artwork:{...person.artwork, title: e.target.value}})
        updatePerson(draft => {draft.artwork.title = e.target.value})
    }

    function handleCityChange(e){
        updatePerson(draft => {draft.artwork.city = e.target.value})
    }
    
    function handleImageChange(e){
        updatePerson(draft => {draft.artwork.image = e.target.value})
    }

    // function handleNestedObj(e){
    //     setPerson({...person, artwork:{...person.artwork, [e.target.name]: e.target.value}})

    // }
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
          onChange={handleTitleChange}
        />
      </label>
      <label>
        City:
        <input
          name="city"
          value={person.artwork.city}
          onChange={handleCityChange}
        />
      </label>
      <label>
        Image:
        <input
          name="image"
          value={person.artwork.image}
          onChange={handleImageChange}
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