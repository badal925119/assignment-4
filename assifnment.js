function calculateTax(income, expenses) {
    if(typeof income !== 'number' || typeof expenses !== 'number' || income < 0 || expenses < 0){
        return 'Invalid Input'
    }
   let savingAmount = income -expenses;
   if(income < expenses){
    return "Invalid Input" 
   }
   let tax = savingAmount*.20
   return tax;
}

console.log(calculateTax(10000, 3000));



function sendNotification(email) {
    if(email.includes('@')){
        let name =email.split('@')[0]
   let domain = email.split('@')[1]
   return  name+' sent you an email from '+domain;
    }
    else{
        return "Invalid Email" 
    } 
  
}
console.log(sendNotification('farhan34@yahoo.com'))



function checkDigitsInName(name) {
    if(typeof name !== 'string'){
        return 'Invalid Input'
    }
    let nambers =[1,2,3,4,5,6,7,8,9,0]
    let x = false;
    for( let i=0 ; i < nambers.length; i++){
        if(name.includes(nambers[i])){  
              x = true 
        }
    }
      return x;
}
console.log(checkDigitsInName('Raj123'));




function calculateFinalScore(obj) {
    if(typeof obj !== 'object' ){
        return "Invalid Input"
    }
   let totalScore= obj.testScore+obj.schoolGrade
   if(obj.isFFamily){
    totalScore = totalScore +(totalScore*0.20)
   }
 if(totalScore >=80){
    return true
 }
 else{
    return false
 }
   
}

console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  } ))


function  waitingTime(waitingTimes  , serialNumber) {
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number'){
        return 'Invalid Input'
    }
    let namber = 0;
   for(let item of waitingTimes){
       namber=namber+item
   }
   let avarage = Math.round(namber/waitingTimes.length)
   let remainingCadidate = serialNumber - waitingTimes.length -1;
   let waitTime = avarage * remainingCadidate
   return waitTime; 
}
console.log(waitingTime([13, 2], 6))