// bad practice don't do that (this isn't pure compponenet!)
// let geust = 0;
// const Cup = () =>{
//     geust = geust +1;
//     return <h2>This is cup {geust}</h2>
// }

// const Tea = () =>{
//    return<>
//     <Cup/>
//     <Cup/>
//     <Cup/>
//     <Cup/>
//    </>
// }
const Cup = (prop) =>{
    return <h2>This is cup {prop.geust}</h2>
}

const Tea = () =>{
   return<>
    <Cup geust={1}/>
    <Cup geust={2}/>
    <Cup geust={3}/>
    <Cup geust={4}/>
   </>
}
export default Tea;