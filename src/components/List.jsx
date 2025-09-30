import { people } from "./data";
const List = () =>{
    const filtteredData = people.filter((item)=> item.profession === "chemist")
    return <>
        {filtteredData.map(item =>
        <li>
            <h3>name: {item.name}</h3>
            <p>accomplishment: {item.accomplishment}</p>
        </li> 
            
            
            )}
    </>
    // <ul>
    //     {people.map((person)=>(
    //         <li>{person}</li>
    //     ))}
    // </ul>    
    
}
// const people = [
//     "21i;jvristjboibsrtn",
//     "bjoaihlkmdabk nnaoej p",
//     "kldab ieajoh eab",
//     "avgygg lhiV jhSOVu hUH oRE"
// ]
export default List;