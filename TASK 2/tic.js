
    const boardElement = document.getElementById("board");
    const messageElement = document.getElementById("message");
    let board = Array(3).fill().map(() => Array(3).fill(""));
    const player = "X";
    const ai = "O";

    
    function init() {
      boardElement.innerHTML = "";
      board = Array(3).fill().map(() => Array(3).fill(""));
      messageElement.textContent = "Your turn! (You are X)";
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          const cell = document.createElement("div");
          cell.classList.add("cell");
          cell.dataset.row = i;
          cell.dataset.col = j;
          cell.addEventListener("click", onPlayerMove);
          boardElement.appendChild(cell);
        }
      }
    }

   
    function checkWinner() {
    
      for (let i = 0; i < 3; i++) {
        if (board[i][0] && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
          return board[i][0];
        }
        if (board[0][i] && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
          return board[0][i];
        }
      }
      if (board[0][0] && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        return board[0][0];
      }
      if (board[0][2] && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        return board[0][2];
      }
      return board.flat().includes("") ? null : "tie";
    }

   
    function minimax(board, isMaximizing) {
      const winner = checkWinner();
      if (winner === ai) return 1;
      if (winner === player) return -1;
      if (winner === "tie") return 0;

      if (isMaximizing) {
        let bestScore = -Infinity;
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            if (!board[i][j]) {
              board[i][j] = ai;
              let score = minimax(board, false);
              board[i][j] = "";
              bestScore = Math.max(score, bestScore);
            }
          }
        }
        return bestScore;
      } else {
        let bestScore = Infinity;
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            if (!board[i][j]) {
              board[i][j] = player;
              let score = minimax(board, true);
              board[i][j] = "";
              bestScore = Math.min(score, bestScore);
            }
          }
        }
        return bestScore;
      }
    }

    function aiMove() {
      let bestScore = -Infinity;
      let move;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (!board[i][j]) {
            board[i][j] = ai;
            let score = minimax(board, false);
            board[i][j] = "";
            if (score > bestScore) {
              bestScore = score;
              move = { i, j };
            }
          }
        }
      }
      board[move.i][move.j] = ai;
      updateBoard();
    }

 
    function onPlayerMove(e) {
      const row = e.target.dataset.row;
      const col = e.target.dataset.col;
      if (!board[row][col]) {
        board[row][col] = player;
        updateBoard();
        const winner = checkWinner();
        if (!winner) {
          aiMove();
        }
      }
    }

    
    function updateBoard() {
      const cells = document.querySelectorAll(".cell");
      cells.forEach(cell => {
        const row = cell.dataset.row;
        const col = cell.dataset.col;
        cell.textContent = board[row][col];
        if (board[row][col]) {
          cell.classList.add("taken");
        }
      });
      const winner = checkWinner();
      if (winner) {
        if (winner === "tie") {
          messageElement.textContent = "It's a tie!";
        } else if (winner === ai) {
          messageElement.textContent = "Computer wins! Better luck next time.";
        } else {
          messageElement.textContent = "Congratulations! You win!";
        }
        document.querySelectorAll(".cell").forEach(cell => cell.classList.add("taken"));
      }
    }

    init();
  