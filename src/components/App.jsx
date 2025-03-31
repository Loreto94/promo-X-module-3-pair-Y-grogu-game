import "../scss/App.scss";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Board from "./Board";
import Header from "./Header";
import Dice from "./Dice";


function App() {
    const [goodsCookies, setGoodsCookies] = useState(["🍪", "🍪", "🍪"]);
    const [goodsEggs, setGoodsEggs] = useState(["🥚", "🥚", "🥚"]);
    const [goodsFrog, setGoodsFrog] = useState(["🐸", "🐸", "🐸"]);
    const [diceValue, setDiceValue] = useState(null);
    const [gameStatus, setGameStatus] = useState("En curso");
    const [lastAction, setLastAction] = useState("");
    const [groguPosition, setGroguPosition] = useState(0);

    
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

          useEffect(() => {
            if (groguPosition === 6)
          [setGoodsCookies, setGoodsEggs, setGroguPosition, setGoodsFrog]})
          
            useEffect(() => {
              if (groguPosition === 6) 
                return setGameStatus("¡¡Grogu se ha comido el cargamento!! Has perdido")
              fetch("http://www.omdbapi.com/?s=indiana&apikey=1e85fab")
                  .then(response => response.json())
                  .then(data => {
                      const moviesData = data.Search.map((movie) => {
                          return {
                              title: movie.Title,
                              year: movie.Year,
                              imageUrl: movie.Poster,
                              id: movie.imdbID
                          }
                      })
                      setMovies(moviesData);
                  })
          }, []) // se ejecute una sola vez, cuando se carga la página

    return (
        <div>
            <Header/>
            <main className="page">
                <Board groguPosition={groguPosition}/>

                <section>
                <Dice onClickDice={rollDice}/>
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


