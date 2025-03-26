import "../scss/App.scss";
import Grogu from "./Grogu.jsx";
import "../scss/components/Board.scss";

function Board (){
    return(
    <section className="board">
        <div className="cell"><Grogu/></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
    </section>
    )  
}
export default Board