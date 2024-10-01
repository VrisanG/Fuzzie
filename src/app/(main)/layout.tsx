import MenuOptions from "@/components/Sidebar"
import React from "react"
type Props={children:React.ReactNode}
function Layout(props:Props){
    return (
        <div className="flex overflow-hidden h-screen">
            <MenuOptions/>
            <div className="w-full">{props.children}</div>
        </div>
    )
}
export default Layout