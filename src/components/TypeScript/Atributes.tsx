import { ComponentProps, ReactNode } from "react"

type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
    variant?: "primary" | "secondary",
    children: ReactNode
}

export default function ButtonWithAtributes({children, type, autoFocus, ...rest}:ButtonProps){
    return(<>
        <button type={type} autoFocus={autoFocus} {...rest} >{children}</button>
    </>)
}


// type ButtonProps = {
//     children: ReactNode,
//     type: "submit" | "reset" | "button",
//     autoFocus: boolean
// }
// export default function ButtonWithAtributes({children, type, autoFocus}:ButtonProps){
//     return(<>
//         {/* {console.log(children)} */}
//         <button type={type} autoFocus={autoFocus}>{children}</button>
//     </>)
// }