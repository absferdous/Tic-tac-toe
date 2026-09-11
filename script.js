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
        // row.textContent = this.count;
        this.eventFunc(row);
        this.setboxId(row);
        console.log("id", row.id);
        col.append(row);
      }
      this.container.append(col);
    }

    console.log("gameboard created");
  },
  eventFunc(element) {
    element.addEventListener("click", () => {
      if (!element.textContent) {
        if (this.player1) {
          element.textContent = "X";
          this.player1 = false;
          this.player1Move.push(element.id);
        } else {
          element.textContent = "O";
          this.player1 = true;
          this.player2Move.push(element.id);
        }
        console.log({ player1: this.player1Move, player2: this.player2Move });
      }

      //   this.player1 = false;
      //   this.player2 = true;
      //   alert(element.textContent);
    });
  },
  player1: true,
  player2: false,
  setboxId(element) {
    element.id = this.count;
    return element.id;
  },
  player1Move: [],
  player2Move: [],
};

const gameLogic = {};

GameBoard.gameBoard();
