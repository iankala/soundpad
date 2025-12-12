import React from "react"
import pads from "./pads"
import Paddy from "./pad"

export default function App() {
    const [padds, setPadds] = React.useState(pads)
    
    function handleClick(id){
        setPadds( prev=> prev.map(item => {
            return item.id === id ? {...item, on: !item.on} : item
        }) )
    }


   

    const soundPad = padds.map(sound => (
        <Paddy 
            id={sound.id}
            key={sound.id}
            color={sound.color}
            on={sound.on}
            handleClick = {handleClick}
        />
    ))  
    
    return (
        <main>
            <div className="pad-container">
                {soundPad}
            </div>
        </main>
    ) 
}