import "../scss/App.scss";
import Grogu from "./Grogu.jsx";
import "../scss/components/Board.scss";

function Board({groguPosition}) {

    return (
        <section className="board">
            {
                Array(7).fill().map((_, index) => {
                    return (
                        <div key={index}
                        className="cell">
                            {
                            index === groguPosition ? <Grogu /> : null 
                            }
                        </div>
                    );
                })
            }

        </section>
    )
}
export default Board;


{/*<section className="board">
        <div className="cell"><Grogu/></div>
       <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
    </section>*/}