const Item = ({isPacked, name}) =>{
    if (isPacked){
        return <li> Item {name} ✅</li>
    }
    
    return <li> Item {name} </li>
    
}
//or do it this way:
// const Item = ({isPacked, name}) =>(
//     isPacked && <li> Item {name} ✅</li>
// )

//or do it this way:
// const Item = ({isPacked, name}) =>(
//     isPacked ? <li> Item {name} ✅</li> ? <li> Item {name} </li>
// )
const PackingList = () =>{
    return(
    <section>
        <Item isPacked={true} name="batata"/>
        <Item isPacked={false} name="bandora"/>
        <Item isPacked={true} name="kosa"/>
    </section>
);
    
}

export default PackingList;