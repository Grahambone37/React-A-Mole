import Mole from './mole'

export default function MoleContainer(props) {
    let moleImage;
    if (props.displayMole === false) {
        moleImage = './React-A-Mole-Images/molehill.png'
    } else {
        moleImage = './React-A-Mole-Images/mole.png'
    }
    return (
        <div>
            <img src={moleImage} alt="moleimg"></img>
            <Mole />
        </div>
    )
}