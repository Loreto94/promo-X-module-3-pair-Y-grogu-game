import "../scss/App.scss";
import { useState } from "react";
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