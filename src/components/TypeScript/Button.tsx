
// type Colors = "red" | "blue" | "green";

// type ButtonProps = {
//     backgroundColoris:Colors,
//     fontSize?: number,
//     padding:[number,number,number,number]
// }

// export default function Button({
//     backgroundColoris, 
//     fontSize,
//     padding}:ButtonProps){

//     let text: string = "Any Text"

//     function convert (amount: number, currency:string): string{
//         return "";
//     }
//     return(<>
//         <button style={{
//             backgroundColor:backgroundColoris,
//             fontSize:fontSize,
//             padding:`${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`
//         }}>{text}</button>
//     </>)
// }


type ButtonProps = {
    // style:{
    //     backgroundColor:string,
    //     fontSize: number,
    //     // padding: [number, number, number, number]
    // }
    // style: React.CSSProperties
    onClick: ()=> void,
    children: React.ReactNode
}

export default function Button ({children, onClick}:ButtonProps){
    return(<>
        <button onClick={onClick}>{children}</button>
    </>)
}


