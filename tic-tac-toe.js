document.addEventListener("DOMContentLoaded",function (){
    const squares = document.querySelectorAll("#board div");

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

            if (currentplayer == "X"){
                currentplayer = "O";
            }else{
                currentplayer = "X"
            }


        })

        
    });
    
    


    

});



