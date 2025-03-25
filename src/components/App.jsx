import "../scss/App.scss";
import { useState } from "react";
import PropTypes from "prop-types";
import Board from "./Board.jsx";
import Header from "./Header.jsx";



function App() {
    const [goodsCookies, setGoodsCookies] = useState(["🍪", "🍪", "🍪"]);
    const [goodsEggs, setGoodsEggs] = useState(["🥚", "🥚", "🥚"]);
    const [goodsFrog, setGoodsFrog] = useState(["🐸", "🐸", "🐸"]);
    const [diceValue, setDiceValue] = useState(null);
    const [gameStatus, setGameStatus] = useState("En curso");
    const [groguPosition, setGroguPosition] = useState(0);


    return (
        <div>
            <header>
                <h1>Cuidado</h1>
            </header>
            <main className="page">
                <Board/>
                {/*<section className="board">
                    <div className="cell"><div className="grogu">👣</div></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                </section>*/}

                <section>
                    <button className="dice">Lanzar Dado</button>
                    <div className="game-status">En curso</div>
                </section>

                <section className="goods-container">
                    <div className="goods-item">🍪</div>
                    <div className="goods-item">🍪</div>
                    <div className="goods-item">🍪</div>
                </section>
                <section className="goods-container">
                    <div className="goods-item">🥚</div>
                    <div className="goods-item">🥚</div>
                    <div className="goods-item">🥚</div>
                </section>
                <section className="goods-container">
                    <div className="goods-item">🐸</div>
                    <div className="goods-item">🐸</div>
                    <div className="goods-item">🐸</div>
                </section>
                <section>
                    <button className="restart-button">Reiniciar Juego</button>
                </section>
            </main>
        </div>




    );
}

export default App


