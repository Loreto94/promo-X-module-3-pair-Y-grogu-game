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
    const [lastAction, setLastAction] = useState("");

    
    const rollDice = () => {
        const diceRoll = Math.floor(Math.random() * 4) + 1;
        setDiceValue(diceRoll);
        console.log(`Dado: ${diceRoll}`);
    
        if (diceRoll === 4) {
            setGroguPosition(prevPosition => prevPosition + 1);
            setLastAction("Grogu ha avanzado una casilla");
        } else {
            if (diceRoll === 1 && goodsCookies.length > 0) {
              setGoodsCookies(prev => prev.slice(1));
              setLastAction("Se ha descargado una galleta 🍪");
            } else if (diceRoll === 2 && goodsEggs.length > 0) {
              setGoodsEggs(prev => prev.slice(1));
              setLastAction("Se ha descargado un huevo 🥚");
            } else if (diceRoll === 3 && goodsFrog.length > 0) {
              setGoodsFrog(prev => prev.slice(1));
              setLastAction("Se ha descargado una rana 🐸");
            }
          }
        };

        const renderGoods = (goodsArray) => {
            const goodsElements = [];
            for (const item of goodsArray) {
              goodsElements.push(<div className="goods-item">{item}</div>);
            }
            return goodsElements;
          };

    return (
        <div>
            <Header/>
            <main className="page">
                <Board/>

                <section>
                    <button className="dice" onClick={rollDice}>Lanzar Dado</button>
                    <div className="game-status">{gameStatus}</div>
                </section>

                <section className="goods-container">{renderGoods(goodsCookies)}</section>
        <section className="goods-container">{renderGoods(goodsEggs)}</section>
        <section className="goods-container">{renderGoods(goodsFrog)}</section>
                <section>
                <button className="restart-button" onClick={() => window.location.reload()}>Reiniciar Juego</button>
                </section>
            </main>

            <p>Dado: {diceValue !== null ? diceValue : "-"}</p>
            <p>{lastAction}</p>
        </div>

    );
}

export default App


