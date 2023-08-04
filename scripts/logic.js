window.addEventListener('load', bindEvents);
let buttons ;
function bindEvents(){
    // read all buttons
     buttons = document.querySelectorAll('button');
    buttons.forEach(button=>button.addEventListener('click', printXorZero));
}
let isGameDone = false;

var isXorZero = true;
var clickCount = 0;
function printXorZero(){
    // what is this?
    // this is a keyword and it hold the current calling object reference.
    if(this.innerText.length ==0 && !isGameDone){
    console.log('Button Clicked....' , this);
    this.innerText = isXorZero?"X":"0"; 
    
    clickCount++;
    if(clickCount>=5){
        const playerName = isXorZero?"X ":"0";
        const gameStatus = gameOver();
        document.querySelector('#game-over').innerText = gameStatus?"Game Over "+playerName+" Wins ":"";
        if(!gameStatus && clickCount>=9){
            document.querySelector('#game-over').innerText = "Game Draw ";
        }
    }
    isXorZero = !isXorZero;
    }
}
function gameOver(){
   return isSameRow(buttons[0], buttons[1], buttons[2]) || isSameRow(buttons[3], buttons[4], buttons[5])
   || isSameRow(buttons[6], buttons[7], buttons[8]) || isSameRow(buttons[0], buttons[3], buttons[6])
   || isSameRow(buttons[1], buttons[4], buttons[7]) || isSameRow(buttons[2], buttons[5], buttons[8])
   || isSameRow(buttons[0], buttons[4], buttons[8]) || isSameRow(buttons[2], buttons[4], buttons[6])
}

function isSameRow(one, two, three){
    if(isButtonNotBlank(one) && isButtonNotBlank(two) && isButtonNotBlank(three)){
        if(one.innerText === two.innerText && one.innerText === three.innerText){
            isGameDone = true;
            return true;
        }
    }
    return false;
}

function isButtonNotBlank(button){
    return button.innerText.length>0;
}