const btnOptions = [
    "click me!",
    "click me! again",
    "click me! one more time",
] as const;

type USer = {
    sessionId: string,
    name: string
}

//the gust will have the user props except the omitted one which in this case is name
type guest = Omit<USer, "name">;

export default function Arrays() {
    return(<>
        <button>
            {btnOptions.map((ot) => {
                return ot
            })}
        </button>
    
    </>)
}