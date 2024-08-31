
let images=document.querySelectorAll(".images >div");
let winnerMessge= document.querySelector(".winner-messge");
let count1=document.querySelector(".score11");
let count2=document.querySelector(".score22");
let userCount=0;
let computCount=0;



let showWinner=(userWin)=>{
    if(userWin){
        winnerMessge.innerText="You winn!";
        winnerMessge.style.backgroundColor="green";
        userCount++;
       count1.innerText=userCount;
    }else{
        winnerMessge.innerText="You loss";
        winnerMessge.style.backgroundColor="red";
        computCount++;
        count2.innerText=computCount;
    }

}

let randomChioce=()=>{
let arr=["rock","paper","scissor"];
let com=Math.floor(Math.random()*3);
return arr[com];
}


let myChoice=(userChoice)=>{
console.log(userChoice);

let computerChioce=randomChioce();
console.log(computerChioce);

if(userChoice===computerChioce){
    console.log("Match is drw");
    winnerMessge.innerText="Match is drw";
}
else{
    let  userWin=true;
    if(userWin==="rock"){
       userWin= computerChioce==="paper" ? false: true;
        
    }else if(userWin==="paper"){
        userWin=computerChioce==="scissor" ? false:true;
    }else{
        userWin=computerChioce==="rock" ? false :true;
    }
    showWinner(userWin);
}


}


images.forEach((chios)=>{

   chios.addEventListener('click',()=>{
    console.log("chios was cliked");
    let userChoice=chios.getAttribute("id");
    myChoice(userChoice);
    
   })
   

})