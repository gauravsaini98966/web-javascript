// let a=30;
// let b=23;

// if(a>b){
//     console.alert("a is greater than b")
// }
// else{
// console.alert("none")
// }

// let name="Gaurav";
// console.log(name[0]);
// console.log(`${name} is a friend of ${name}` )
// let fruit='bana\'na';
// console.log(fruit)

// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name.slice(2,4))
// console.log(name.slice(2))
// console.log(name.replace("Gaurav","gauravsaini"))

// let a="javascript is high level language"
// let b=match(/is/g);
// console.log(b)
// document.write(b)


// var a=[10,20,30]
// console.log(a[0])
// console.log(a[1])

// var ary=[10,20,30,40]
// document.write("<ul>")
// for(var a=0; a<=4; a++){
//     document.write("<li>"+ary[a]+"</li>");

// }
// document.write("</ul>")

// var arr=new Array(3);
// for(let b=0; b<3;b++){
//     arr[b]=prompt("enter you name")

// }
// document.write(arr[b])
// var ary=new Array();
// ary[0]=1;
// ary[3]=4;
// ary[5]=6;
// for(a=0;a<6;a++){
//     // document.write(arr[a]);
//      console.log(ary[a]);
// }


// var arr=[
//     ["gaurav",22,"male","bca"],
//     ["gaurav",21,"male","bca"],
//     ["gaurav",20,"male","bca"],
//     ["gaurav",123,"male","bca"],
// ];
// for(var a=0; a<4; a++){
// // document.write(arr);
// console.log(arr)
// }


// let myfunction=()=>console.log("hello")

// myfunction();


// let hello=function(name,age){
// return  `${name}${age}`;
// }

// let new2=()=>{
//     console.log('hello')
//     console.log("hejenfdm")
//     console.log("fnnnjdsf")
// }
// new2();
// hello()
// console.log(hello("hello sir",12));
// console.log(typeof hello)


// class index{
//     constructor(){
//         console.log("constructer")
//     }
//     messagae(){
//         console.log("hello");

//     }
//     hello(){
//         console.log("helo hhiii")
//     }
//     static gau(){
//         console.log("jjjjjjjjjjjj")
//     }

// }
// let a=new index();
// a.messagae();
// a.heloo();

// class student{
//     constructor(){
//         let name;
//         console.log("constructer fuction");

//     }

//     hello(){
//         console.log("hello"+this.name)
//     }

// }
// let a=new student();
// a.name="gaurav";
//  a.hello();

// var person={
//     firstname:"gaurav",
//     sirname:"saini",

//     fullyname:function(){
//         return this.firstname+this.sirname;
//     }
    
// }
// document.write(person.firstname()+person.sirname());
// // console.log(person.firstname()+person.sirname())

// fullyname();

// class student{
//     constructor(name,age){
//         let name;
//         console.log("constructer function")
//     }
//     hello(){
//         console.log("hello"+this.name)
//     }

// }
// let a=new student("gaurav",23);
// a.name="gaurav";

// class student2 extends student 


class employe{
    constructor(name){
        console.log("constructer:Employe"+name)
    }
}

class manager extends employe{

    constructor(name){
        console.log("constructor:manager"+name);
    }
}
let a=new manager("gaurav");