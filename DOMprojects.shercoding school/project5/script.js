var rect=document.querySelector("#center")

rect.addEventListener("mousemove",function(detail){
    // console,log("hey")
//    console.log(rect.getBoundingClientRect());
var rectangleLocation=rect.getBoundingClientRect();
console.log(detail)
})