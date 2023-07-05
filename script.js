let items = document.querySelectorAll(".item");
let span = document.getElementById('span');
let btn = document.getElementById('btn');
let gamer = 'X';
let index = 0;
let gameActive = true;
let clickedItems = ['','','','','','','','',''];

let winconditions = [
        [0,1,2],
        [0,4,8],
        [0,3,6],
        [1,4,7],
        [2,4,6],
        [2,5,8],
        [3,4,5],
        [6,7,8]
];

items.forEach(item => item.addEventListener('click', fun));
btn.addEventListener('click', newGame);

function newGame(){
    gameActive = true;
    items.forEach(item => item.innerText = '');
    clickedItems = ['','','','','','','','',''];
    span.innerText = `It's X's turn`;
    gamer = 'X';
}

function fun(){

index = parseInt(this.getAttribute('data-item-index'));

if(clickedItems[index] != '' || !gameActive )
    return;

if(gamer == 'X')
{
    this.innerText = "X";
    span.innerText = "It's O's turn";
    clickedItems[index] = 'X';
    gamer = 'O';

}
else{
    this.innerText = "O";
    span.innerText = "It's X's turn";
    clickedItems[index] = 'O';
    gamer = `X`;
}

let check = checkTheStat(index);
if(check)
    {
        gameActive = false;
        switch(gamer){
            case 'X': span.innerText = "Player O has won!"; break;
            case 'O': span.innerText = "Player X has won!"; break; 
        } 

    }

if(!clickedItems.includes(''))
    span.innerText = "Game ended in a draw!";
}

function checkTheStat(index){
    let c = 0;
    
    for(let i =0; i < winconditions.length; i++){
        if(winconditions[i].includes(index)){
            for(let j = 0; j < winconditions[i].length; j++ ){
                if(clickedItems[winconditions[i][j]] == clickedItems[winconditions[i][0]] )
                    c = c+1;
            }
            if( c == 3) return true;
            c = 0;
        }
    }
    
    return false;
}
