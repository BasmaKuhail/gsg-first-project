import { useState } from "react";
import { useImmer } from "use-immer";

let nextId = 3;
const myListArray = [
  { id: 0, title: "Big Bellies", seen: false },
  { id: 1, title: "Lunar Landscape", seen: false },
  { id: 2, title: "Terracotta Army", seen: true },
];

const yourListArray = [
  { id: 0, title: "Big Bellies", seen: false },
  { id: 1, title: "Lunar Landscape", seen: false },
  { id: 2, title: "Terracotta Army", seen: true },
];

export default function BucketList() {
  // const [myList, setMyList] = useState(myListArray);
  // const [yourList, setYourList] = useState(yourListArray);

  const [myList, updateMyList] = useImmer(myListArray);
  const [yourList, updateYourList] = useImmer(yourListArray);


  function handleToggleMyList(artworkId, nextSeen) {
    // const myNextList = [...myList];
    // const artwork = myNextList.find((a) => a.id === artworkId);
    // artwork.seen = nextSeen;
    // setMyList(myNextList);
    updateMyList((draft) => {
      const artWork = draft.find((item)=>(item.id === artworkId));
      console.log(artWork)
      artWork.seen === nextSeen;
    })
  }

  function handleToggleYourList(artworkId, nextSeen) {
    // const yourNextList = [...yourList];
    // const artwork = yourNextList.find((a) => a.id === artworkId);
    // artwork.seen = nextSeen;
    // setYourList(yourNextList);
    updateYourList((draft)=>{
      const yourWork = draft.find((item)=> item.id === artworkId)
      yourWork.seen === nextSeen;
    })
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList artworks={myList} onToggle={handleToggleMyList} />
      <h2>Your list of art to see:</h2>
      <ItemList artworks={yourList} onToggle={handleToggleYourList} />
    </>
  );
}

function ItemList({ artworks, onToggle }) {
  return (
    <ul>
      {artworks.map((artwork) => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={(e) => {
                onToggle(artwork.id, e.target.checked);
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}
