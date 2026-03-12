
//Q1 .Check if a point lies inside a rectangle (x,y check//
let corrx = prompt("Enter x coor");
//apdu rectangle aatla ccordinate na andar che //
let Xaxis = [1,2,3,4,5]
let yaxis = [3,4,5,6]

if (corrx==Xaxis[0] ||
    corrx==Xaxis[1]||
    corrx==Xaxis[2]||
    corrx==Xaxis[3]||
    corrx==Xaxis[4]
){
    alert("value exist lets procced fruther");

    let corry =prompt("enter y value");

    if(corry==yaxis[0] ||
        corry==yaxis[1] ||
        corry==yaxis[2] ||
        corry==yaxis[3] 
    ) {
        alert(" the point is in rectangle")
    }
 else {
    alert("pont dont exisit in rectangle ");
}}


//optimsed code che niche vado resaon x ni value 
// ane y ni value ek sathe cjeck kari lidhi 
// new concept :- apde dircet range api sakie chie if ma

let x = Number(prompt("Enter x coordinate"));
let y = Number(prompt("Enter y coordinate"));

if (x >= 1 && x <= 5 && y >= 3 && y <= 6) {
    alert("Point lies inside rectangle");
} else {
    alert("Point is outside rectangle");
}

// Que-2 . Compare last digit of two numbers //

let num1 = (Number(prompt("enter number"))
let num2= (Number(prompt("enter seco number"))
 
number1 = num1%10;
number2 = num2%10;
if(number1===number2){
    alert("valuer are equal")
}else(
    alert("value not equal")
)

//QUE-3  Check if two angles form a right angle triangle. //

let num1 = Number(prompt("enter you angle 1"));
let num2= Number(prompt("enter you angle 2 "));

if (
    num1<90 && num2<90 && num1+num2 ===90
)
{
    alert(
        " this is right angle triangle"
    );
}else{
    alert("this is not a right angle tringle");
}


