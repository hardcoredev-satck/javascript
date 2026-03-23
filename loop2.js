// Print squares of first 10 numbers.
let n=10;
for( let i = 0; i<=10; i++){
    alert(i*i);
};


// my code 

let n =10;
let num = i                               //[1,2,3,4,5]
for (let n of i ){
    alert(i*i)
}

//print cube 
let n=10;
for( i = 1; i<=10; i++){
    alert(i*i*i);
};


//find factors
let n = Number(prompt("enter num:"));
for(i = 1; i<=n; i++){
    if(n%i==0){
        alert(i);
    }
};


//number divisible by 3
let n = Number(prompt("enter num:"));
for(i = 1; i<=n; i++){
    if(i%3==0){
        alert(i);
    }
};


// GCD greatest common diviser
let x = Number(prompt("number 1:"));
let y = Number(prompt("number 2:"));
let gcd = 1;

for(i = 1; i<= x; i++){
    if(x%i==0 && y%i==0){        
        gcd = i;
    }
};
alert(gcd);
//done


// find power x^y using loop
let x = Number(prompt("number 1:"));// basee
let y = Number(prompt("power :"));// exponent
let z = 1;
let str ="";   // flow --- 2 - 3 -- 2^3 ok !! let dummy string 

for(; str.length<y; ) {// // dummy string mdndoc str.length--- use to find number of char in string
    str += "  ";///space apsee when evevtime loops run according to user input
                // user enter --- 5 ---- ", , , , ,"-- 5 spacee
    for(let n of str){
       z *= x; // counting spacee as stringgg follow the lopp     
    }
    alert(z);
}; //doneee 
                                      //outp--- number 1:4
                                       //p//ower :4
                                       // maliii g 
                                    //  maliii g
                                        // maliii g
                                        // maliii g4g
                                       /// maliii g  taking exponent  // new consecptt str.length 

                                       


//count vowels in string using loop


let vow = "aeiouAEIOU";
let a = prompt("enter a word:");
for(let j of a){
    for(let i of vow){
        if(j==i){
            alert(j);
        }        
    } 
};

//strong number.

let n = prompt("enter number");
let sum=0;
if(isNaN(n)){// for only input of numeric 
    alert("enter num");}
else{
for(i of n){ //individual numbers took
    let fact = 1;
    let dig=Number(i);
    for(i=1; i<=dig; i++){// loop to find factorial of each number
        fact *= i;// factorial of each number
    }
    sum += fact;// sum of factorial
  } 
  alert(sum);
  if (sum==n){
        alert("it is strong number");
    }
    else {
        alert("it is not strong number");
    }    
};









