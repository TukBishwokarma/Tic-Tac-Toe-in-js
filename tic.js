
let currentPlayer = "X";  
let gameBoard = ["", "", "", "", "", "", "", "", ""];  
let isGameActive = true;

const cells = document.querySelectorAll('.cell');

cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        if (cell.textContent === "" && isGameActive) {
            cell.textContent = currentPlayer;
            gameBoard[index] = currentPlayer;
            checkResult();
            currentPlayer = currentPlayer === "X" ? "O" : "X";    }
    });
});


function checkResult() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    
    for (let condition of winConditions) {
        const [a, b, c] = condition;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            isGameActive = false;
            alert(`${gameBoard[a]} wins!`);
            return;
        }
    }

    
    if (!gameBoard.includes("")) {
        isGameActive = false;
        alert("It's a draw!");
    }
}
