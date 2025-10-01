import Avatar from "./Avatar"
import { Children } from "react"
import Card from "./Card"
const persons =[
    {name: "Rami", age: 50, married:false},
    {name: "Rami2", age: 30},
    {name: "Rami3", age: 40},
]


const Profile = () =>{
    return( 
        <Card name="Profile Card">
            <div>these are childern of card</div>
        </Card>
    );
        
}

export default Profile;