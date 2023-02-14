import React, { useState } from 'react'

import Mole from './mole'
import EmptySlot from './emptyslot'

export default function MoleContainer(props) {
    let [displayMole, setDisplayMole] = useState(false)
    let handleClick = () => {
        props.score += 1
        setDisplayMole(false)
    }
    
    return (
        <div className='one'>
            {displayMole
                ? <Mole handleClick={handleClick} />
                : <EmptySlot />
            }
        </div>
    )
}