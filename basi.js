////////q1 identfy input if it is alphabet number or a special charachter we used ternary operations and if else 

let charr = prompt("enter something single digit:");
let result = !charr ?//condition

"kai nathi type kryu" : ((charr >= 'a' && charr <= 'z') || (charr >= 'A' && charr <= 'Z')) ?//expression

   "alphbet" : (charr >= '0' && charr <= '9') ?
   
       "number" : "special charr";

alert(result);

/*Check if a year is a leap year.
normal year 365 days feb 28 days leap year 366 days 1 extra day of feb 29 comes 1 time between 4 yrs */

let leap = prompt("enter year:");

if (!leap){
    alert("dont press enter ples input soe value")
}
else if (((leap>= 'a' && leap <= 'z') || (leap >= 'A' && leap <= 'Z'))){
    alert("not a year")
}
else if ((leap%400===0 )||leap%4===0  && leap%100 != 0)
{
  alert("leap year");
}else {
  alert("not leap year");
}


/* Convert number (0–99) to words.*/

let num = prompt("enter any num b/w 0 to99:");
let storageNum = ["zero", "one", "two", "three ", "four", "five", "Six", "seven", "eight", "nine ", "ten", "eleven",
    "twelve", "thirteen", "fourteen", "fifteen ", "Sixteen", "seventeen", "eighteen ", "ninteen"]
let t= [ "","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety" ];

if (num < 20 && num >= 0) {
    console.log(storageNum[num]);
}
let tens = Math.floor(num / 10) //ahiyy 34 34/10 == 3.4 main anss ===  3 is tens place 
let ones = (num % 10) // ahiyy 34 34/10 == 3.4 main ans === 4 is ones place now we have 
// combine [tens + ones] 34 === Thirtyfour

if (ones == 0 ){
    console.log(t[tens])
}
else{
    alert(t[tens]+storageNum[ones]);
} 

