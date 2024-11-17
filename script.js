function createBoard(){
    let board=[[2,2,2],
               [2,2,2],
               [2,2,2]];
    let turn="player1";
    let displayBoard=()=>{
            console.log(board);
    }
    let verticalwin=()=>{
        let i=0;
        let j;
        for(j=0;j<3;j++){
            
                if(board[i][j]==board[i+1][j]&&board[i][j]==board[i+2][j]){
                    if(board[i][j]==1){
                        console.log("Player 1 wins");
                    }
                    else if(board[i][j]==0){
                        console.log("Player 2 wins");
                    }
                }
            }
        
    }
    let horizontalWin=()=>{
        let i;
        let j=0;
        for(i=0;i<3;i++){
            
                if(board[i][j]==board[i][j+1]&&board[i][j]==board[i][j+2]){
                    if(board[i][j]==1){
                        console.log("Player 1 wins");
                    }
                    else if(board[i][j]==0){
                        console.log("Player 2 wins");
                    }
                }
            
        }
    }
    let diagonalWin=()=>{
        let i=0;
        let j=0;
                if(board[i][j]==board[i+1][j+1]&&board[i][j]==board[i+2][j+2]){
                    if(board[i][j]==1){
                        console.log("Player 1 wins");
                    }
                    else if(board[i][j]==0) {
                        console.log("Player 2 wins");
                    }
                }
                else if(board[i][2]==board[i+1][1]&&board[i][j]==board[i+2][0]){
                    if(board[i][2]==1){
                        console.log("Player 1 wins");
                    }
                    else if(board[i][2]==0){
                        console.log("Player 2 wins");
                    }
                }
            
    }
    return {board,displayBoard,verticalwin,horizontalWin,diagonalWin,turn}
}
board1=createBoard();
board1.displayBoard();
board1.verticalwin();
function createPlayer1(name){
    let PlayerName=name;
    let mark=(i,j)=>{
        if (board1.board[i][j]==2 && board1.turn=="player1"){
        board1.board[i][j]=1;
        board1.displayBoard();
        board1.diagonalWin();
        board1.horizontalWin();
        board1.verticalwin();
        board1.turn="player2";
    }
        else{
            console.log("Place already taken.")
        }

    }
    return {PlayerName,mark};
}
function createPlayer2(name){
    let PlayerName=name;
    let mark=(i,j)=>{
        if (board1.board[i][j]==2 && board1.turn=="player2"){
        board1.board[i][j]=0;
        board1.displayBoard();
        board1.diagonalWin();
        board1.horizontalWin();
        board1.verticalwin();
        board1.turn="player1"; 
    }
        else{
            console.log("Place already taken.")
        }
    }
    return {PlayerName,mark};
}
let player1=createPlayer1("Yash");
let player2=createPlayer2("Robot");
let cells=document.querySelectorAll(".cell");
cells.forEach((cell)=>{
    cell.addEventListener("click",()=>{
        let arr=Array.from(cell.textContent);
        let i= Number(arr[0]);
        let j=Number(arr[1]);
        if(board1.turn=="player1"){
            player1.mark(i,j);
            cell.textContent="X";
        }
        else if(board1.turn=="player2"){
            player2.mark(i,j);
            cell.textContent="O";
        }

    })
});


