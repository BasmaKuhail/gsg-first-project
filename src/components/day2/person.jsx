const person ={
    theme: {
        backgroundColor: "black",
        color: "pink"
    },
    name: "Ramo Rami"
}

//es6: 
const {name:Rename, theme} = person
export default function ToDoLsit(){
    return <div style={theme}>
        <h1>Hello, {Rename}</h1>
    </div>
}