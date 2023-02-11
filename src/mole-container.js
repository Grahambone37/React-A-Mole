import React, { useState } from 'react'

import Mole from './mole'
import EmptySlot from './emptyslot'

export default function MoleContainer(props) {
    let [displayMole, setDisplayMole] = useState(false)
    let handleBopped = () => {
        props.score += 1
        setDisplayMole(false)
    }

    let isThereMole = () => {
        if (displayMole === true) {
            return <Mole />
        } else {
            return <EmptySlot />
        }
    }
    return (
        <div className='one'>
            {isThereMole()}
        </div>
    )
}