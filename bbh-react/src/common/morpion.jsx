import { useState } from "react";

export function WinCalculator(squares) {
const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
for (let l = 0; l < lines.length; l++) {
    const [a, b, c] = lines[l];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
    return { winner: squares[a], lines: [a, b, c] };
    }
}
return { winner: null, lines: null };
}

export function Square({ value, OnSquareClick, isWinning }) {
const className = `square border-2 w-12 h-12 text-2xl font-bold flex items-center justify-center cursor-pointer ${
    isWinning ? "bg-yellow-400 text-black" : "bg-white text-gray-800"
}`;
    return (
    <button className={className} onClick={OnSquareClick}>
        {value}
    </button>
);
}


export function Tableau({ xIsNext, squares, OnPlay, winningLines }) {
const { winner } = WinCalculator(squares);
let status;

if (winner) {
    status = winner + " a gagné !";
} else if (!squares.includes(null)) {
    status = "Match Nul !";
} else {
    status = `Prochain tour est à : ${xIsNext ? "X" : "O"} `;
}

function handleClick(i) {
    const { winner: calculatedWinner } = WinCalculator(squares);
    if (squares[i] || calculatedWinner) {
    return;
    }

    const nextSquare = squares.slice();
    if (xIsNext) {
    nextSquare[i] = "X";
    } else {
    nextSquare[i] = "O";
    }

    OnPlay(nextSquare);
}

function renderSquare(i) {
    const isWinning = winningLines && winningLines.includes(i);

    return (
    <Square
        key={i}
        value={squares[i]}
        OnSquareClick={() => handleClick(i)}
        isWinning={isWinning}
    />
    );
}

return (
    <>
    <div className="flex flex-col items-center mb-12">
        <h1 className="font-bold mb-6 text-2xl text-white">UN MORPION REACT</h1>
        <div className="status text-2xl text-white font-bold mb-4">
            {status}
        </div>
        {/* Rendu dynamique des lignes et des carrés */}
        {[0, 1, 2].map((row) => (
        <div className="board-row flex" key={row}>
            {[0, 1, 2].map((col) => renderSquare(row * 3 + col))}
        </div>
        ))}
    </div>
    </>
);
}


export function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];


    const { winner, lines } = WinCalculator(currentSquares);

    let status;
    if (winner) {
    status = `Le gagnant est ${winner}`;
} else if (!currentSquares.includes(null)) {
    status = `Match Nul`;
} else {
    status = `Prochain joueur : ${xIsNext ? "X" : "O"}`;
}

function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
}

    function jumpTo(nextMove) {
    setCurrentMove(nextMove);
}

const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
        description = `Aller sur le coup # ${move}`;
    } else {
        description = `Aller au début`;
    }
    return (
    <li key={move}>
        <button
            className="bg-amber-900 border-2 mt-2 text-center hover:bg-amber-700 border-black cursor-pointer transition px-3 pb-2 text-white"
            onClick={() => jumpTo(move)}
        >
            {description}
        </button>
    </li>
    );
});

return (
    <div className="game flex justify-center p-8 bg-gray-900 ">
    <div className="game-board">
        <Tableau
            xIsNext={xIsNext}
            squares={currentSquares}
            OnPlay={handlePlay}
            winningLines={lines}
        />
    </div>
    <div className="game-info text-center ml-8 p-4 bg-gray-800 rounded-lg">
        <div className="status mb-4 text-white font-bold">{status}</div>
        <ol className="text-white font-bold text-center list-none p-0">
            {moves}
        </ol>
    </div>
</div>
);
}
