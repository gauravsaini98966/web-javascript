var istatus=document.querySelector("h3");

var btn=document.querySelector("#add");
// var remove=document.querySelector("#remove");

var flag=0;
btn.addEventListener("click",function(){
  if(flag==0){
    istatus.innerHTML='Friend';
    istatus.style.color='green';
    btn.innerHTML="Remove friend"
    flag=1;
  }else{
   
       istatus.innerHTML='Stranger';
        istatus.style.color="red";
        btn.innerHTML="Add friend"
        flag=0;
  } 


})

// remove.addEventListener("click",function(){
//     istatus.innerHTML='Stranger';
//     istatus.style.color="red";
// })