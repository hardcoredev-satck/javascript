

//fibonacci series 
 let n = Number(prompt("enter number"));
let x=0;
let y=1;
let z;
for (let i = 1; i<= n ; i++){
    alert(x);
    z = x + y;
    x = y;
    y = z;
}; 



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



 //Count even and odd digits.
// 345 3 5 odd che ane 4 even toh 2 odd 1 even
 
let Num1 = (prompt("enter you number"));
// ----- num%10  == Math.floor()== 6 ---- stoerrrrr ------ 5 ---//
// suppose x=6 code  x%2==0    akhu 6 even toh ene even kidhu
// y=x 
let s1=Num1%10; //555 
let final=s1;//fianl=5
for(i=0;i<=Num1;i++){ 

} 















/*if(final%2==0){//5%2 
    alert("yes its even");
} else{
    alert("odd")
}



