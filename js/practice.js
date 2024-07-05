let boxes=document.querySelectorAll(".tap");
let rest=document.querySelector("#clr");
let newGame=document.querySelector(".but");
let container=document.querySelector(".cont");
let msg=document.querySelector("#msg"); 
let first=true;
let draCon=document.querySelector(".draw");
let para=document.querySelector("#dra");
let nextGam=document.querySelector(".butn");

const winPatterns=[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]];


const reset=()=>{
    first=true;
    enabl();
    container.classList.add("hide");
    
}

const reset1=()=>{
    first=true;
    enabl();
    draCon.classList.add("hide1");
}


boxes.forEach((tap)=>{
    tap.addEventListener("click",()=>{
        console.log("box Clicked");
        if(first){
            tap.innerText="X";
            first=false;
        }else{
            tap.innerText="O";
            first=true;
        }
        tap.disabled=true;
        checkWinner();
    });
});


const disabl=()=>{
    for(tap of boxes){
       tap.disabled=true;
    }
};


const enabl=()=>{
    for(tap of boxes){
        tap.disabled=false;
        tap.innerText="";
    }
};


const showWinner=(winner)=>{
    msg.innerText="Congratulations",winner;
    container.classList.remove("hide");
    disabl();
};


const showDraw=()=>{
    draCon.classList.remove("hide1");
    disabl();
};


const checkWinner=()=>{
    let count=0;
    for(let pattern of winPatterns){
        let val1=boxes[pattern[0]].innerText;
        let val2=boxes[pattern[1]].innerText;
        let val3=boxes[pattern[2]].innerText;
        
        if(val1!="" && val2!=""&& val3!=""){
            if(val1=== val2 && val2===val3){
                console.log("Winner",val1);
                showWinner(val1);
            }else if(count==8){
                console.log("Draw");
                showDraw();
            }
        }
        console.log(count);
    }
};

newGame.addEventListener("click",reset);
rest.addEventListener("click",reset);
nextGam.addEventListener("click",reset1);