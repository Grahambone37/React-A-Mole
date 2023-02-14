import React, { useState } from 'react'

import Mole from './mole'
import EmptySlot from './emptyslot'

export default function MoleContainer(props) {
    let [displayMole, setDisplayMole] = useState(false)
    //it couldn't read the state function so i made a second onclick function
    let handleClick2 = (e) => {
        console.log("bopped")
        setDisplayMole(false)
    }

    return (
        <div className='one'>
            {displayMole
                ? <Mole handleClick={props.handleClick} handleClick2={handleClick2} setDisplayMole={setDisplayMole} biffedIt={props.biffedIt} />
                : <EmptySlot setDisplayMole={setDisplayMole} />
            }
        </div>
    )
}