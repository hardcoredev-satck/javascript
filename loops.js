/*
// print 1 to 10 using for loop 

let i = 0;
for (i=0;  i<=10;  i++ ){
    console.log(i);
} 


//print even
let i = 1;
for (i=1;  i<=50;  i++ ){
    if(i%2==0){
        alert(i);
    }
}     


//print odd
let i = 1;
for (i=1;  i<=50;  i++ ){
    if(i%2!=0){
        alert(i);
    }
} 

//sum of 1-10
let j = 10;
for(i=1; i<=1; i++){
    let formlu = j * (j +1 )/ 2;
    alert(formlu);  
}


//sum of even num from 1 to n
let n = prompt("enter the limit");
let j = 0;
for(i=0;i<=n;i++){
    if(i%2==0){
        j = j+i;
    }
}
alert(j);



//multiple table
let n = prompt("enter the number");
for(i=1; i<=10; i++){
    console.log(`${n} X ${i} = ${n*i}`);
};


//factorial
let n = Number(prompt("enter the number"));
let r = 1;
for(i=n ; i>=1; i--){
    r = r*i;
}
alert(r);  

//count digits in number
let num = prompt("enter the number");
let count = 0;
for(;num>0; count++){
    num = Math.floor(num/10);   
}
alert(count);

//Reverse a number.
let a = Number(prompt("ENTER THE NUMBER :"));
let r = 0;
for(; a>0 ; a= Math.floor(a/10)){
    r = (r*10)+ (a%10);
}
alert(r);


//add sum of digits   
let a = Number(prompt("ENTER THE NUMBER :"));
let r = 0;

for(i = a; i>0 ; i= Math.floor(i/10)){
    let last = i%10;//last digit avse

    r = r + last;
}
alert(r);



// check if num palindrome
let a = Number(prompt("ENTER THE NUMBER :"));
let r = 0;
for(; a>0 ; a= Math.floor(a/10)){
    r = (r*10)+ (a%10);
}
alert(r);
if (r==a){
    console.log("the nummber are palindrome");
} else{
    console.log("number is not palindrome");
}

/*
//Check if number is Armstrong.
//math.pow(base,exponent)
let num = Number(prompt("enter the number"));
let a = num;
let power = 0;
let sum = 0;
for(;a>0; power++){
    a = Math.floor(a/10);   
};
alert(power);
for(let i = num; i>0 ; i = Math.floor(i/10)){
   let last= i%10;
   sum += Math.pow(last, power);   
};
alert(sum);
if (num==sum){
    alert("number is armstrong");
    
}else{
    alert("number is not armstrong");
};*/

/*
let num = Number(prompt("Enter the number"));
let num1 = num;
let total = 0;
let sum = 0;
for (let n = num; n > 0; n = Math.floor(n / 10)) {
    total++;
}
for (let n = num1; n > 0; n = Math.floor(n / 10)) {
    let last = n % 10;
    let power = 1;

    for (let i = 0; i < total; i++) {
        power = power * last;
    }

    sum = sum + power;
}
if (num1 === sum) {
    alert("Armstrong che");
} else {
    alert("Nathi");
}  */

    