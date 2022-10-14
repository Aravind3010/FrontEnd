// function submit(){
// var n=document.getElementById("number").value
// if(n%2==0){
//         alert("Even number")
//         var statement = "Even number" ;
//         document.getElementById("get").innerHTML = statement;
//     }else{
//         alert("Odd number")
//         var statement = "Odd number";
//         document.getElementById("get").innerHTML = statement;
//     }}
// //     function mul(n1,n2){
// //         return n1*n2;
// //     }
// //    console.log(mul(2,4));
// //}
// let x=add(2,7);
// function add(a,b){
//     return a+b;
// }
// console.log(x);

// const car={type:"suv",model:"xuv7oo",color:"red"};
// document.getElementById("car").innerHTML="The car type is :"+car.model;

// document.getElementById("sting").innerHTML="Hi this is Aravind";
// let a = 3;
// let b = 4;
// if (a > b)
//     console.log("a is greater");
// else
//     console.log("b is greater");

// let num1 = 23;
// let num2 = 19;
// let num3 = 39;
// if (num1 > num2 && num1 < num3) {
//     console.log("num1 is greater")
// }

// if (num2 < num3 || num3 < num1) {
//     console.log("-------")
// }

// else {
//     console.log("\\\\\\\\")
// }
// console.log("wow its great")

// if(num1%2==0){
//  console.log("The number is even");
// }
// else{
//  console.log("The number is odd");   
// }
// let n1=7;
// if(n1%2==0){
// result="Even";
// }else{
//     result="Odd";
// }
// console.log(result);
// let a=10;
// let result;
// result=(a%2===0) ? "Even":"Odd";
// console.log(result);

// let h=20;
// let u=10;
// result=h+u;
// console.log("The addition of"+h+"+" "+and"+u+"is"+result);
// console.log(`The addition ${h} and ${u} is ${result}`);
// let i=1;
// while(i<=5){
//  console.log(i);
//  i++;
// }
// for(let j=1;j<=30;j++){
//     if(j%3===0){
//         console.log(j);
//     }
//     }
// for(let i=1;i<=10;i++){
//     console.log(i+"*"+"4"+"="+i*4);
// }
// let a={name:"Aravind",
//        pgm:"Java",
//     Car:{
//         brand:"audi",
//         model:"r8",
//         color:"Red"
//     }
// }
// for(let key in a){
// console.log(key,a[key]);
// };
// function b(){
//     console.log("Hi this is Aravind");
// }
// b()
// function add(x,y){
//  return x+y;
// }
//  let c=add(3,5);
//  console.log("The addition of x and y is:"+" "+c);

// let greet=(x,y)=>{
//     let a=10;
//     let b=20;
//     let c=a+b;
//     console.log("The addition of a and b is:"+c);
//     return x*y;
//  }
// let z=greet(4,5);
// console.log("The multiplication of x and y is:"+z);

// let mul=(x,y)=>x*y;
// let result=mul(2,3);
// console.log("The result is :"+result);
//  let car1={
//     brand:"Audi",
//     model:"r8",
//     color:"red",
//    mul:function(){
//     console.log("Hi hello");
//    }
// }
// let arr=[1,2,3,4,5];
// arr[5]=6;
// arr.push(7);
// console.log(arr);
// let name=["Aro","narrow","laro"]
// name[3]="garo";
// console.log(name);

// let number=[6,1,4,2,7,5,3]
// console.log(number.sort());
// console.log(number.push(8));
// console.log(number);
// console.log(number.pop());
// console.log(number);
// console.log(number.pop());
//console.log(number);
// console.log(number.shift());
// console.log(number);
// console.log(number.unshift(1));
// console.log(number);
// console.log(number.splice(6));
// console.log(number);
// console.log(number.splice(4,2));
// console.log(number);


// }
// let words="My name is Aravind N".split(' ');
// let[a,b,c,d,e]=words;
// console.log(b);
// let y=[1,2,3,4,5,6,7,8,9,10]
// y.forEach((n) =>{
// console.log(n+"*"+"2"+"="+n*2);
// });
// let num=[24,21,34,56]
// num.filter(n=>n%2===0)
// .map(n=>n*2)
// .forEach((n)=>{
// console.log(n);
// });
// let val=new Set();
// val.add(1);
// val.add("Aravind");
// val.add(2);
// val.add("bike");
// val.add(1);
// val.forEach((n)=>{
// console.log(n);
// });
// function click(){
//   alert("hi");
// }
// const a=10%2==0 ? "Even":"Odd";
// console.log(a);
// const a=1;
// a=3;
// console.log(a)
// function submit(){
//     alert()
//     const date = new date();
//     document.getElementById('zero').innerHTML=date;
// }
function click(){
    document.getElementById("click").innerHTML=Date();
}
