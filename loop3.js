/// Convert each digit to words
// TASK 2: Calculate "time power" = (hour digits product) + (minute digits product)
// TASK 3: If time power > 50, reverse the word order
// TASK 4: Add "AM" or "PM" based on hour

//[1,2,3]------ 1 ------ one ------ 2------ two ------3 -------- three
//10---- 1--- 0----ten nai lakhe one zero

/*

// desai 
let num = prompt("enter number:");
let words = ["zero","one","two","three","four","five","six","seven","eight","nine"];
let r = "";
// indexing sytem 
for(let i of num){
    let x = Number(i); // convert into number to use index
    r = r + words[x] + " "; //picks word based on index and add into result
};
alert(r);


// vedant

let num = Number(prompt("enter number"));
let num1 = ["zero","one","two","three","four","five","six","seven","eight","nine"];
let num2;
let r = "";

for (let i = num; i > 0; i = Math.floor(i / 10)) {
    num2 = i % 10;

    r = num1[num2] + " " + r;// jugad for reversing imp //123 ----- three ,two ,one
}

// darshit 
        let num = prompt("enter number:");
        let asn = {0:"zero",1:"one" ,2:"two",3:"three",4:"four",5:"five",6:"six",7:"sevevn",8:"eight",9:"nine"};
        let dev = "";

        for(let i of num){

            let x = Number (i);
            dev = asn[x] + " " + dev;
        }
        alert(dev);
        
        
//TASK 3: If time power > 50, reverse the word order [Darshit The developer]

// time power 2345------ 23:45 --- 2*3== 6  , 4*5 == 20 timeee --- 6+20== 51>50 
// user ip 1234---1234%100----12 34 12 =a 34=b a%10 1 2 , 
//b%10= 3 4 ,,c = 1*2 d =3*4 c+d>50 revrse function for print else print as it is 
// darshut the devloper ai chairman
let num = prompt("enter number of 4 digit ");              // user Input
let orignalFormat =  num.slice(0 , 2) + ':' + num.slice(2) 
let officalFormat = orignalFormat                         //using slice() method to spit the number 
                                                           // 1234---index--- 1-0,2-1,3-2,4-3
                                                            //now setting limite for user input 
if(officalFormat.length < 6) {
    alert("this is you number" + officalFormat);              // 12:34
} else {
    alert("enter only 4 digit ")
} 
                                     // have splliting kari su time power calculate karva mate 
//let Sankhyaa = orignalFormat.replace(":" , "").split("") // replace koi pn special char ne delet karidese
                                                // .split ["1","2","3","4"]

  let Sankhyaa = orignalFormat.split(":");
  let total =0;                                              
for (let i = 0; i < Sankhyaa.length; i++) {
                                                // aa loop char ne pacahc num ma conver kari dese 
  let n1 =Sankhyaa[i];                          // it will take "12" , "34"
  let result = Number(n1[0]) * Number(n1[1]);   // calclute the time power 
  total  += result;                               // 2+12 == 14
}
 
alert(total);

 let asn =  {0:"zero",1:"one" ,2:"two",3:"three",4:"four",5:"five",6:"six", 7:"sevevn",8:"eight",9:"nine"};
let vedant = "";

let rand = total;

  if (rand > 50 ){

     for(let i of String(rand)){  // just convert it to string from number we cannnot loop teo number in loop

            let x = Number (i);
            vedant = asn[x] + " " + vedant;
        }
        alert(vedant);
        

  }else{
    alert("this is yout power time " +total);
  }



   ///vedant the developer 
//TASK 3: If time power > 50, reverse the word order[ vedant the developr]

let num = prompt("enter number of 4 digit ");              // user Input
let orignalFormat =  num.slice(0 , 2) + ':' + num.slice(2) 
let officalFormat = orignalFormat                         //using slice() method to spit the number 
                                                           // 1234---index--- 1-0,2-1,3-2,4-3
                                                            //now setting limite for user input 
if(officalFormat.length < 6) {
    alert("this is you number" + officalFormat);              // 12:34
} else {
    alert("enter only 4 digit ")
} 
                                     // have splliting kari su time power calculate karva mate 
//let Sankhyaa = orignalFormat.replace(":" , "").split("") // replace koi pn special char ne delet karidese
                                                // .split ["1","2","3","4"]

  let Sankhyaa = orignalFormat.split(":");
  let total =0;                                              
for (let i = 0; i < Sankhyaa.length; i++) {
                                                // aa loop char ne pacahc num ma conver kari dese 
  let n1 =Sankhyaa[i];                          // it will take "12" , "34"
  let result = Number(n1[0]) * Number(n1[1]);   // calclute the time power 
  total  += result;                               // 2+12 == 14
}
 
alert(total);//without reversing

 let asn =  {0:"0",1:"1" ,2:"2",3:"3",4:"4",5:"5",6:"6", 7:"7",8:"8",9:"9"};
let vedant = "";

let rand = total;

  if (rand > 50 ){

     for(let i of String(rand)){  // just convet 

            let x = Number (i);
            vedant = asn[x] + "" + vedant;
        }
        alert(vedant);
        

  }else{
    alert(total);
  }

  ////TASK 4: Add "AM" or "PM" based on hour
  //agar 1st value ==0 toh ofc am if 0 thi motu 1 equal toh second value jose
  // if 2nd value 1 thi moti toh 2 kato 3 hse toh pm aai jse
  /*10:45 am---pm 1 che toh next value 0 toh am aai gayu
  22:45 pm amaa 1st value j 2 che toh direct pm aai jse
  13:45 pm
  01:45 am*/

/*
  //darshit X Vedant  
  
//12:40------ 12<= 12,1,2,3,4,5,6,7,8,9,10,11
           let hrs = prompt("enter hrs");
           let mins = prompt("enter mins");
           
           if(hrs.length > 2 || mins.length>2){
            alert ("enter only 2 digt value")
           }   else{
            rand1 = Number(hrs);
            rand2 = Number(mins);
          
           if(hrs<12){
               alert(hrs+":" +mins+"am")
           }else {
               
              alert(hrs+":" +mins+"pm")
           }
          }

// pattern question 
//1
// 


// Get input from user - prompt shows a popup box asking for a number
// Number() converts the text from prompt into an actual number
let num1 = Number(prompt("enter you number"));

// OUTER LOOP: Controls the rows (vertical)
// Starts from 1 and goes up to the user's number
// Example: if user enters 5, this runs 5 times (i = 1,2,3,4,5)
for(let i = 1 ; i <= num1 ; i++){
    
    // z is an empty string that will store what we print in this row
    // It gets reset to empty for each new row
    let z = "r";
    
    // INNER LOOP: Controls the columns (horizontal)
    // Runs from 1 to i (current row number)
    // Example Flow:
    // Row 1 (i=1): runs 1 time (col=1)
    // Row 2 (i=2): runs 2 times (col=1,2)
    // Row 3 (i=3): runs 3 times (col=1,2,3)
    // and so on...
    for(let col = 1; col <= i; col++){ 
        
        // Add one star (*) to string z for each loop iteration
        // This builds the row character by character
        z += "*";
    }
    
    // After inner loop finishes, show the complete row using alert
    // alert pops up a box showing the stars for this row
    // User must click OK to see next row
    alert(z);
}



 //ai code
 let rows = 5;
for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }
    console.log(pattern);
}
*/
/* *******
   *****
   ***
   **
   * 
   

let row = 5
for(let i =1; i >= row; i--){ \\
    let pattern ="";
    for (let j=1; j<= i; j++){
        pattern += "*"
    }
    alert(pattern);
}
    */


   // Print triangle star pattern.
 
/*  *
   ***        
  *****   
 *******            
********* */

let n = 5; // number of rows
   
for (let i = 1; i <= n; i++) {
  let s1 = "";
  let s2 = "";

  
  for (let j = 1; j <= n - i; j++) {
    s1 += " ";
    }

  // stars
  for (let k = 1; k <= (2 * i - 1); k++) {
    s2 += "*";
  }

  console.log(s1 + s2);
}   
  
