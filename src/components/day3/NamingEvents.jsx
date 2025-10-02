function Button({onSmash, children}){
    return <button onClick={onSmash}>{children}</button>
}

function alertPlaying(){
    return(alert("playing"))
}

function alertUploading(){
    return(alert("uploading"))
}

export default function NameingEvents() {
    return <div>
         <Button onSmash={()=> alertPlaying()}> Playing</Button>
         <Button onSmash={()=> alertUploading()}> uploading</Button>
    </div>
}