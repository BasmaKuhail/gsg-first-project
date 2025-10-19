import { getImgUrl } from "../utils/script";


const Avatar = ({person, size}) =>{
    return(
    <img
        className="avatar"
        src={getImgUrl(person)}
        alt={person.name}
        width={size}
        height="auto"
    />)
};

export default Avatar;