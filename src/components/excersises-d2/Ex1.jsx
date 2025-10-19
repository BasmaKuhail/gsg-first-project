//Extract a Card component from the markup below, and use the children prop to pass different JSX to it:
import { Children } from "react";
const Card = (props) =>(
  <div className="card-content">
    {props.children}
  </div>
);

export default function Profile() {
  console.log("in")
  return (<>
  <Card>
      <h1>Photo</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/OKS67lhm.jpg"
        alt="Aklilu Lemma"
        width={70}
        height={70}
      />
    </Card>
    <Card>
      <h1>About</h1>
      <p>
        Aklilu Lemma was a distinguished Ethiopian scientist who discovered
        a natural treatment to schistosomiasis.
      </p>
    </Card>
    
  </>
    
    
  );
}
