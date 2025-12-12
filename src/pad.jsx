
import React from "react"

export default function Paddy(props){

    return(
        
        <button
            // key= {props.id}
            style={{backgroundColor: props.color} }
            className = { props.on ? "on" : null}
            onClick ={() => props.handleClick(props.id)} 
            
        
        ></button>
        
    )

}