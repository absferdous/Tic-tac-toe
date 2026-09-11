console.log("scripts loaded");

const GameBoard = {
  count: 0,
  container: document.querySelector(".container"),
  gameBoard: function createGameBoard() {
    for (let i = 1; i <= 3; i++) {
      const col = document.createElement("div");
      col.classList.add("col");
      for (let j = 1; j <= 3; j++) {
        this.count++;
        console.log(this.count);
        const row = document.createElement("div");
        row.classList.add("row");
        row.textContent = this.count;
        this.eventFunc(row);
        col.append(row);
      }
      this.container.append(col);
    }

    console.log("gameboard created");
  },
  eventFunc: function addEvent(element) {
    element.addEventListener("click", () => {
      if (this.player1) {
        element.textContent = "X";
        this.player1 = false;
      } else {
        element.textContent = "O";
        this.player1 = true;
      }
      //   this.player1 = false;
      //   this.player2 = true;
      //   alert(element.textContent);
    });
  },
  player1: true,
  player2: false,
};

GameBoard.gameBoard();
