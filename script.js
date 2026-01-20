const reset = document.getElementById("reset-btn");
let boxes = document.querySelectorAll(".box");
const msg = document.getElementById("msg");
const newGame = document.getElementById("new-game");
let msgContainer = document.querySelector(".msg-container");
const main = document.getElementById("main");

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let player = true;

const resetGame = () => {
    player = true;
    enableBoxes();
    msgContainer.classList.remove("show");
    msgContainer.classList.add("hide");
    main.classList.remove("blur");
};


boxes.forEach((box) =>{
    box.addEventListener('click', () => {
        if(player){
            box.innerHTML = "X";
            player = false;
        }
        else{
            box.innerHTML = "O";
            player = true;
        }
        box.disabled = true;

        checkWinner();

    })
})

const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    })
}

const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerHTML = "";
    })
}


const showWinner = (winner) => {
    msg.innerHTML = `🎉 ${winner} Wins!`;
    msgContainer.classList.remove("hide");
    msgContainer.classList.add("show");
    main.classList.add("blur");
    disableBoxes();
};



const checkWinner = () => {
    for(let pattern of winPatterns){
        let value1 = boxes[pattern[0]].innerHTML;
        let value2 = boxes[pattern[1]].innerHTML;
        let value3 = boxes[pattern[2]].innerHTML;
        
        if(value1 != "" && value2 != "" && value3 != ""){
            if(value1 === value2 && value2 === value3){
                console.log(value1 + " is Winner...")
                showWinner(value1);
                return;
            }
        }
    }
    
    let isDraw = true;
    boxes.forEach((box) => {
        if (box.innerHTML === "") {
            isDraw = false;
        }
    });
    
    if (isDraw) {
        msg.innerHTML = "It's a Draw!";
        msgContainer.classList.remove("hide");
        msgContainer.classList.add("show");
        main.classList.add("blur");
    }

}

reset.addEventListener('click', (resetGame));
newGame.addEventListener('click', (resetGame));