let board = [
    ['00', '01', '02'],
    ['10', '11', '12'],
    ['20', '21', '22']
]


let turn= "O";


function press(cellNO) {
    
    if (turn == "O") {
        turn = "X";
    }else{
        turn = "O";
    }


    board[cellNO] = turn;
    let board = document.getElementById(cellNO);
    board.innerText= turn;
   

    if (board[0][0] == turn && board[0][1] == turn && board[0][2] == turn) {
        document.getElementById("status").innerText=`BRAVOOOO! ${turn}`;
    }
    if (board[0][0] == turn && board[1][1] == turn && board[2][2] == turn) {
        document.getElementById("status").innerText=`BRAVOOOO! ${turn}`;
    }
}



    // Do stuff
    console.log(cellNO)
    
