export default function Signup() {
    const onFormSubmit = (e) =>{
        //stop refreshing the page when submitting a form
        e.preventDefault();
        return alert("submitting")
    }
    return(
        <form onSubmit={onFormSubmit}>
            <input />
            <button>submit</button>
        </form>
    )
}
