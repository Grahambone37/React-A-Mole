import React, { useEffect } from "react"

export default function Mole(props) {
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.setDisplayMole(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div >
            <img style={{ width: '100%' }}
                src={require("./React-A-Mole-Images/mole.png")}
                alt="mole"
                onClick={() => {
                    props.handleClick()
                    props.handleClick2()
                    }
                } ></img>
        </div>
    )
}