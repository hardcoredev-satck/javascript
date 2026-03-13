//Q .1 Nested salary + tax + bonus conditions
/*let s= Number(prompt("entr you salry:"));
let bonusHigh= 0.015 ;
let bounsMid = 0.10;
let bonuslow = 0.05;
let taxHigh= 0.0075;
let taxmid= 0.005;
let taxlow=0.0025;

if (s<=50000){
    bons = s+s*bonuslow;
    tax1 = bons-bons*taxlow;
    alert("this is your salray" + tax1);}
    

     else if(s>=50000 && s<=100000){
        bons1 = s+s*bounsMid;
        tax2 =  bons1-bons1*taxmid;
        alert("this is ur your salary"+tax2); 
    }
    
    else{
       bons2= s+s*bonusHigh;
       tax3 =  bons2-bons2*taxHigh;
       alert("this is ur final salry  "+tax3);
}
//Q.2 temperature converter// 1 f = -17.22 C


let TempNumber = Number(prompt("Enter specific temp:"));
let Tempunit = prompt("enter your Temper unit F or C:");
if(Tempunit === "C" || Tempunit=== "c"){
 TempNumber = (TempNumber*1.8)+32;
 alert("this is you temper",TempNumber);
}else if (Tempunit === "F" || Tempunit === "f"){
    TempNumber = (TempNumber - 32) * 1.8;
    alert("this is your ans inn ", TempNumber);
}*/
    
//Q.3 time difference
//logic   
/*
1️⃣ Take two times as input
Example: Start Time and End Time (HH:MM).

2️⃣ Separate hours and minutes
Split the time into hours part and minutes part.

3️⃣ Convert both times into total minutes
Multiply hours by 60 and add minutes.

4️⃣ Find the difference
Subtract start time minutes from end time minutes.

5️⃣ Convert the result back to hours and minutes
Divide by 60 for hours and use remainder for minutes. */


/*let time1 = prompt("enter your time1 enter time in this format HH:MM");
let time2 = prompt("enter tyou time2 enter time in this format HH:MM ");
if (time1.length === 5 &&  time1.includes(":") && time2.length === 5 &&  time2.includes(":")){

    console.log("the format is correct");

    let timeH = Number(time1[0] + time1[1]);
    let timeM = Number(time1[3] + time1[4]);
    
    let timeHh = Number(time2[0] + time2[1]);
    let timeMm = Number(time2[3] + time2[4]);

    alert("time1" ,timeH , "time", timeM);
    alert("time1" ,timeHh , "time", timeMm);
    
    let inp1 = timeH*60 + timeM;
    let inp2 = timeHh*60 + timeMm;

    let diff;

    if(inp2 >inp1 ){
        diff = inp2 - inp1;
    }else{
        diff = inp1 - inp2;
    }

    
let diffHH = Math.floor(diff/60);
let diffMM = diff%60;
console.log(`${diffHH}:${diffMM}`);

};*/

//Q4 chicken prob
//
/*let x= prompt("input for chicken");                         
let y= prompt("input for dick");
let z= prompt("input for total legs");        

if (z%y === 0 && z%x===0){
    alert("any");

  }  else if(z%x===0){
        alert("chiken")
    } else if (z%y===0){
        alert("dick");
    } else{
        alert("noneeee");
    }







