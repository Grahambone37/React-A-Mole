import { useEffect } from "react"

export default function EmptySlot(props) {
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.setDisplayMole(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{ 'width': '100%' }} src={require("./React-A-Mole-Images/molehill.png")} alt="molehill" ></img>
        </div>
    )
}