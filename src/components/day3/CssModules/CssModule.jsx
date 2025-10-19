// best practice

import styles from "./CssModule.module.css"

const alertMessage = (message = "You clicked me!", event) =>{
    console.log(event)
    alert(message)
}
export default function CssModule () {
    // this will alert the message imeadiatly afer opening the site, without clicking the button
    // called: immediatly invoked excution function
    // return <button onClick={alertMessage()} className={styles.button}>Click Css Module</button>;
    return <>
        {/* <button onClick={alertMessage("you clicker!")} className={styles.button}>Click Css Module</button> */}
        <button onClick={(event) => alertMessage("right method", event)} className={styles.button}>right method</button>

    </>
}

