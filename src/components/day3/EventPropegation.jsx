export default function EventPropegation() {
    
    const alertPlaying = (e) =>{
        // this will stop the div onclick
        e.stopPropagation();
        alert ("playing")}

    const alertUploading = () =>{alert ("uploading")}
    return <div 
                className="tool-div"
                onClick={() => alert("you clicked the toolbar")}
            >
                <button onClick={alertPlaying}>playing</button>
                <button onClick={alertUploading}>uploading</button>
            </div>
}