import Avatar from "./Avatar"

const persons =[
    {name: "Rami", age: 50, married:false},
    {name: "Rami2", age: 30},
    {name: "Rami3", age: 40},
]

const Profile = () =>{
    return(<div>
            This is Profile component
            {/* {[1,2,3,4].map((item)=><Avatar name="Rami"/>)} */}
            
            {/* {persons.map((person)=><Avatar name={person.name} age={person.age}/>)} */}

            {/* simpler way when dealing with a lot of data */}
            {persons.map((person)=><Avatar {...person}/>)}
        </div>)
        
}

export default Profile;