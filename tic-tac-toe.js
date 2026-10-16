document.addEventListener("DOMContentLoaded",function (){
    const squares = document.querySelectorAll("#board div");
    const statusDiv = document.getElementById("status");
    const NewGame = document.querySelector(".btn");


    const winning = [[0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
                     [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
                     [0, 4, 8], [2, 4, 6]             // Diagonals
                    ];

    function checkWinner(){
        for(let i = 0; i<winning.length;i++){
            const[a,b,c] = winning[i];
            if(gamestate[a]!="" && gamestate[a]===gamestate[b] && gamestate[a]===gamestate[c]){
                statusDiv.textContent = `Congartulations ${gamestate[a]} is the Winer!`;
                statusDiv.classList.add("you-won");
                break
            }

        }
    }

    let gamestate = ["","","","","","","","",""];

    let currentplayer = "X";
   
    squares.forEach((squares,index)=>{
        squares.classList.add("square");
        squares.addEventListener("mouseenter",function(){
            squares.classList.add("hover");
        })
        squares.addEventListener("mouseleave",function(){
            squares.classList.remove("hover");
        })
        squares.addEventListener("click",function(){
            gamestate[index] = currentplayer;
            squares.textContent = currentplayer;
            squares.classList.add(currentplayer);

            checkWinner();

            if (currentplayer == "X"){
                currentplayer = "O";
            }else{
                currentplayer = "X"
            }


        })

        
    });
    
    NewGame.addEventListener("click",function(){
        currentplayer = "X";
        gamestate = ["","","","","","","","",""];

        statusDiv.textContent = ("Move your mouse over a square and click to play an X or an O.");
        statusDiv.classList.remove("you-won");

        squares.forEach(square => {
            square.textContent = "";
            square.classList.remove("X","O");
        });
    });
    


    

});



