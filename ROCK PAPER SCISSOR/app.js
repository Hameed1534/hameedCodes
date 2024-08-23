let userCount=0;
let compCount=0;

let choice=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let player=document.querySelector("#pla");
let computer=document.querySelector("#comp");

const cmpChoice=()=>{
    let arr=["rock","paper","scissors"];
    //using Math.random() for finding random numbers
    //floor helps to get before the point values
    let count=Math.floor(Math.random()*3);
    return arr[count];
    };

const draw=()=>{
    console.log("Draw");
    msg.innerText="Its draw";
    msg.style.backgroundColor="blue";
}

const gamply=(usrChoice)=>{
    console.log("user clicked",usrChoice);
    let cmpChs=cmpChoice();
    console.log("computer clicker",cmpChs);

const result=(usrWin)=>{
    if(usrWin){
        userCount++;
        player.innerText=userCount;
        msg.innerText="You Win!";
        msg.style.backgroundColor="green";
    }else{
        compCount++;
        computer.innerText=compCount;
        msg.innerText="Computer Wins!";
        msg.style.backgroundColor="red";
    }
};

//check the condition

    if(usrChoice===cmpChs){
        draw();
    }else{
        let usrWin=true;
        if(usrChoice==="rock"){
            usrWin=cmpChs==="paper"?false:true;
        }else if(usrChoice==="paper"){
            usrWin=cmpChs==="scissors"?false:true;
        }else{
            usrWin=cmpChs==="rock"?false: true;
        }
        result(usrWin);
    }
};
//first access the images using forEach loop assign evntlsnr for access
choice.forEach((choice)=>{
        let usrChoice=choice.getAttribute("id");
    choice.addEventListener("click",()=>{
        gamply(usrChoice);
    });
});
