const Avatar = ({name="rami tab3n", age=22, img="person img", ...rest}) =>{
    // rest(which isn't a keyword) means all other props
    console.log(rest)
    return(
    <div>
            <div>Person name: {name}</div>
            <div>Person name: {age}</div>
            <div>Person img: {img}</div>
        </div>)
};

export default Avatar;