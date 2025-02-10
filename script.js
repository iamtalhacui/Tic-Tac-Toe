let btns = document.querySelectorAll(".btn");
let reset = document.querySelector(".Reset");
let winner = document.querySelector(".winner");
let Game = document.querySelector(".newGame");
let bg = document.querySelector(".newBack");
let turn0=true;
Game.classList.add("hide");
const winPattern=[
    [btns[0],btns[1],btns[2]],
    [btns[0],btns[3],btns[6]],
    [btns[0],btns[4],btns[8]],
    [btns[1],btns[4],btns[7]],
    [btns[2],btns[4],btns[6]],
    [btns[2],btns[5],btns[8]],
    [btns[3],btns[4],btns[5]],
    [btns[6],btns[7],btns[8]]
];

btns.forEach((btn)=> {
    btn.addEventListener("click",()=>{
        console.log("button was clicked");
    if(turn0)
    {
        btn.innerText = "X";
        turn0=false;
        
    }
    else{
        btn.innerText="O";
        turn0=true;
    }
    btn.disabled=true;
    checkWinner();
    });
});

function checkWinner(){
for(let pattern of winPattern){
    let val1 = pattern[0].innerText;
    let val2 = pattern[1].innerText;
    let val3 = pattern[2].innerText;


    if(val1!="" &&val2!="" && val3!="")
    {
        if(val1===val2 && val2===val3)
        {
            console.log(`Winner is ${val1}`);
            disableBtn();
            showWinner(val1);
        }

    }
}}
function disableBtn(){
    for(btn of btns){
    btn.disabled=true;
    }
}
function showWinner(val){
    winner.innerText=`WINNER IS ${val}`;
    winner.classList.add("showWinner");
    Game.classList.remove("hide");
}

function resetGame(){
    for(let btn of btns)
    {
        btn.disabled=false;
        btn.innerText="";
        turn0=true;
    }
    Game.classList.add("hide");
    winner.innerText="";
    winner.classList.remove("showWinner");
    
}
reset.addEventListener("click", ()=>{
    resetGame();
})

Game.addEventListener("click", ()=>{for(let btn of btns)
    {
        btn.disabled=false;
        btn.innerText="";
        winner.innerText="";
        turn0=true;
        Game.classList.add("hide");
    }})


