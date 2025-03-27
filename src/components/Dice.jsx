

function Dice (props) {

const handleClickOnDice = (event) => {
    props.onClickDice(event.target.value);
}
    return (
<button className="dice" onClick={handleClickOnDice}>Lanzar Dado 🎲</button>
)
}

export default Dice