import Mole from './mole'
import EmptySlot from './emptyslot'

export default function MoleContainer(props) {
    let isThereMole = () => {
        if (props.displayMole === true) {
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