import { useEffect, useState } from "react"
import { Card } from "./card"


const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

const cards = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K']

const Scoreboard = () => {
    const [score, setScore] = useState(0)
    const [bestScore, setBestScore] = useState(0)
    const [clicked, setClicked] = useState({})

    shuffleArray(cards)

    const clickCb = (name) => {
        shuffleArray(cards)
        setScore(score + 1)
        if (clicked[name]) {
            setScore(0)
            setClicked({})
            return
        }
        if (bestScore < score + 1) {
            setBestScore(score + 1)
        }
        clicked[name] = true
    }

    return (
        <div>
            <h2>Scoreboard</h2>
            <div className="scores">
                <div>Current score: {score}</div>
                <div>Best score: {bestScore}</div>
            </div>
            <div className="board-container">
                {cards.map(card => <Card key={card} name={card} clickCb={clickCb} />)}
            </div>
        </div>
    )
}

export { Scoreboard }
