import React, { useState, useEffect } from 'react';
import '../components/2048.css';

const Board = () => {
    var board;
    var initBoard
    var score = 0;
    var rows = 4;
    var columns = 4;
    var gameOver = false;

    window.onload = function() {
        setGame(); 
    }


    function setGame(){
        board = [
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ]

        for (let r = 0; r < rows; r++){
            for (let c = 0; c < columns; c++){

                //Give each a tile of format row#-column# (0-0)
                let tile = document.createElement("div");
                tile.id = r.toString() + "-" + c.toString();
                let num = board[r][c];
                updateTile(tile, num);
                document.getElementById("board").append(tile);
            }
        }
        initTile()
        initTile()

    }

    function hasEmptyTile(){
        for (let r = 0; r < rows; r++){
            for (let c = 0; c < columns; c++){
                if(board[r][c] == 0){
                    return true
                }
            }
        }
        return false
    }

    function isGameOver(){
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < columns; c++) {
                // Check horizontally
                if (c < 3 && board[r][c] === board[r][c + 1]) {
                    return false;
                }
                // Check vertically
                if (r < 3 && board[r][c] === board[r + 1][c]) {
                    return false;
                }
            }
        }

        // Game over
        gameOver = true;  // New gameOver flag
        return true;
    }

    function initTile(){
        if(!hasEmptyTile()){
            if(!isGameOver()){
                return;
            }else{
                document.getElementById("gameOverOverlay").style.display = "flex";
                setTimeout(() => {
                    if (confirm("Game Over! Would you like to reload the page?")) {
                        window.location.reload(); // Reload the page
                    }
                }, 1000);

                console.log("Game Over")
                return;
            }
        }

        let emptyTile = false;

        while(!emptyTile){
            let r = Math.floor(Math.random() * rows);
            let c = Math.floor(Math.random() * columns);

            if(board[r][c] == 0){
                board[r][c] = 2;
                let tile = document.getElementById(r.toString() + "-" + c.toString())
                tile.innerText = "2";
                tile.classList.add("x2");
                emptyTile = true;
            }
        }
    }

    function updateTile(tile, num){
        tile.innerText = "";
        tile.classList.value = "";
        tile.classList.add("tile");

        if (num > 0){
            tile.innerText = num;
            if (num <= 4096){
                tile.classList.add("x"+num.toString());
            }else{
                tile.classList.add("x8192");
            }
        }
    }

    document.addEventListener("keyup", (e) => {
        if(gameOver) return;

        let boardCopy = copyBoard(board);

        if(e.code == "ArrowLeft"){
            slideLeft();
        }
        if(e.code == "ArrowRight"){
            slideRight();
        }
        if(e.code == "ArrowUp"){
            slideUp();
        }
        if(e.code == "ArrowDown"){
            slideDown();
        }

        if (!boardsAreEqual(board, boardCopy)) {
            initTile();
        }

        document.getElementById("score").innerText = score;
    })

    function filterZeroes(row){
        return row.filter(num => num != 0); //return array with numbers not equal to zero
    }

    function slide(row){
        row = filterZeroes(row);

        //slide
        for(let i = 0; i < row.length-1; i++){
            if (row[i] == row[i+1]){
                row[i] = row[i] * 2;
                row[i+1] = 0;
                score += row[i];
            }
        }
        row = filterZeroes(row);

        while(row.length < columns){
            row.push(0)
        }
        return row;
    }

    function slideLeft(){
        for (let r = 0; r < rows; r++){
            let row = board[r];

            row = slide(row);
            
            board[r] = row;
            
            for (let c = 0; c < columns; c++){
                let tile = document.getElementById(r.toString() + "-" + c.toString());
                let num = board[r][c];
                updateTile(tile, num);
            }
        }

        if(initBoard != board){
            initTile();
        }
    }

    function slideRight(){
        for (let r = 0; r < rows; r++){
            let row = board[r];

            row.reverse();
            row = slide(row);
            row.reverse();

            board[r] = row;

            for (let c = 0; c < columns; c++){
                let tile = document.getElementById(r.toString() + "-" + c.toString());
                let num = board[r][c];
                updateTile(tile, num);
            }
        }
    }

    function slideUp(){
        for (let c = 0; c < columns; c++){
            let row = [
                board[0][c],
                board[1][c],
                board[2][c],
                board[3][c]
            ]

            row = slide(row);

            for (let r = 0; r < rows; r++){
                board[r][c] = row[r];
                let tile = document.getElementById(r.toString() + "-" + c.toString());
                let num = board[r][c];
                updateTile(tile, num);
            }
        }
    }

    function slideDown(){
        for (let c = 0; c < columns; c++){
            let row = [
                board[0][c],
                board[1][c],
                board[2][c],
                board[3][c]
            ]

            row.reverse();
            row = slide(row);
            row.reverse();

            for (let r = 0; r < rows; r++){
                board[r][c] = row[r];
                let tile = document.getElementById(r.toString() + "-" + c.toString());
                let num = board[r][c];
                updateTile(tile, num);
            }
        }
    }

    //Check if any moves occurred

    function copyBoard(board) {
        return board.map(row => row.slice());
    }

    function boardsAreEqual(board1, board2) {
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < columns; c++) {
                if (board1[r][c] !== board2[r][c]) {
                    return false;
                }
            }
        }
        return true;
    }

    return (
    <div>
      <h1>2048</h1>
      <hr />
      <h2>
        Score: <span id="score">0</span>
      </h2>
      <div id="board">
        <div id="gameOverOverlay">
          <p>
            Game Over!<br />
            Press <strong>Reload</strong> to play again.
          </p>
        </div>
      </div>
      <p>Arrow Keys to Play!</p>
    </div>
  );
};

export default Board;