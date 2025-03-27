import "../scss/App.scss";
import Grogu from "./Grogu.jsx";
import "../scss/components/Board.scss";
import { useState } from "react";

function Board() {
    return (
        <section className="board">
            {
                Array(7).fill().map(() => {
                    return (
                        <div className="cell"></div>
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