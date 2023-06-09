   
function check(gender, shortBreath, chestPain, ldl, hdl, triglycerides, family, smoke, legs){
let count = 0;


  // const gender = document.getElementById("gender").value; 
  // const shortBreath = document.getElementById("shortBreath").value;
  // const chestPain = document.getElementById("chestPain").value;
  // const ldl = document.getElementById("ldl").value;
  // const hdl = document.getElementById("hdl").value;
  // const triglycerides = document.getElementById("triglycerides").value;
  // const family = document.getElementById("family").value;
  // const smoke = document.getElementById("smoke").value;
  // const legs = document.getElementById("legs").value;
 // let gender = document.getElementById("gender").value;
  //let shortBreath = document.getElementById("shortBreath").value;
//  let chestPain = document.getElementById("chestPain").value;

// male  
// if(gender=="male"){
  // if(age>45){
  //   count++;
  // }
  if(shortBreath=="yes"){
    count+=2
  }
   if(chestPain=="yes"){
    count+=2
  }
  if(ldl > 160){
    count+=3
  }
  if(hdl < 40){
    count+=3
  }
  if(triglycerides > 150){
    count+=3
  }
  if(family=="yes"){
    count++
  }
    if(legs=="yes"){
    count+=2
  }
    if(smoke=="yes"){
    count+=2
  }
// }
// //female
// else{
//   if(gender=="female"){
//   // if(age>50){
//   //   count++;
//   // }
//      if(shortBreath=="yes"){
//     count+=2
//   }
//     if(chestPain=="yes"){
//     count+=2
//   }
//     if(ldl > 160){
//     count+=3
//   }
//     if(hdl < 40){
//     count+=3
//   }
//     if(triglycerides > 150){
//     count+=3
//   }
//     if(family=="yes"){
//     count++
//   }
//     if(legs=="yes"){
//     count+=2
//   }
//     if(smoke=="yes"){
//     count+=2
//   }
// }
// }
  // let msg = "";
//  //const output = document.getElementById("msgOut").value; 
if(count>12){
    document.write("You are at high risk for heart disease"); 
}
else if(count > 6){
  document.write("You are at moderate risk for heart disease");
}
else{
  document.write("You are at low risk of heart disease");
}
  
}
