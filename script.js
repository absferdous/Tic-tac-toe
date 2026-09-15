console.log("scripts loaded");

const GameBoard = {
  count: 0,
  moveCount: 0,
  container: document.querySelector(".container"),
  showmoves: document.querySelector(".move-counts"),
  addContent(element) {
    element.textContent = this.moveCount;
  },
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
        // console.log("id", row.id);
        col.append(row);
      }
      this.container.append(col);
    }

    console.log("gameboard created");
  },
  eventFunc(element) {
    element.addEventListener("click", () => {
      if (!element.textContent) {
        this.moveCount++;
        if (this.moveCount === 9) {
          gameLogic.draw = true;
          console.log("match draw", this.moveCount);
          alert("match draw");
        }
        gameLogic.moveCount++;
        this.addContent(this.showmoves);
        if (this.player1) {
          element.textContent = "X";
          this.player1 = false;

          let p1Move = Number(element.id);

          this.p1Arr.push(p1Move);
          if (this.p1Arr.length === 3) {
            gameLogic.getWinner(this.p1Arr);
            // this.p1Arr.length = 0;
          }
        } else {
          let p2Move = Number(element.id);
          element.textContent = "O";
          this.player1 = true;
          this.p2Arr.push(p2Move);
          gameLogic.getWinner(this.p2Arr);
        }
        // gameLogic.moveCount++;
        console.log({ player1: this.p1Arr, player2: this.p2Arr });
        // console.log("move", gameLogic.moveCount);
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
  p1Arr: [],
  p2Arr: [],
};

const gameLogic = {
  moves: {
    A: [1, 2, 3],
    B: [1, 4, 7],
    C: [1, 5, 9],
    D: [2, 5, 8],
    E: [3, 6, 9],
    F: [3, 5, 7],
    G: [1, 6, 9],
  },
  getWinner(arr) {
    const targetSet = new Set(arr);
    this.moveCount++;
    for (const key in this.moves) {
      const hasMoves = this.moves[key].every((item) => targetSet.has(item));

      if (hasMoves) {
        this.hasMoves = true;
        // alert("this player wins");
      }

      // this.roundOver = true;
      console.log(hasMoves);
    }

    console.log(arr);
    if (this.hasMoves) {
      alert("this is over");
      location.reload();
    }

    console.log("this moves", GameBoard.moveCount);
    // const hasValues = allValues.every((element) => targetSet.has(element));

    // if (hasValues) {
    //   alert("game over");
    // }
  },
  roundOver: false,
  hasMoves: false,
  moveCount: 0,
  draw: false,
};

GameBoard.gameBoard();
console.log(gameLogic.getWinner());
