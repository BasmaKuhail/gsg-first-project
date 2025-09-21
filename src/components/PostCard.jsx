const PostCard = ()=>{
    const data =[1,2,3,4,5,6,7,8]

    function postCard(item){
        return <p>This is postCard {item}</p>
    }
    return<>
        {data.map(postCard)}
    </>
}

export default PostCard;