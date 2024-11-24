
function calculateTax(income, expenses) {
    if(expenses>income ){
        return "Invalid Input" ;
    }
    else if(income<0){
        return "Invalid Input" ;

    }
    else if(expenses<0){
        return "Invalid Input" ;

    }
    else{
        const r=income-expenses;
        const reminder=r*0.20;
        return reminder;
    }
}

function checkDigitsInName(name) {
   
 
    if(typeof(name)==='string'){
        return 'false'
    }
    else if(typeof(name)==='string'&&(isNaN(parseInt(name)) )){
        return 'true';
    }
    else if(typeof(name)==='number'){
        return 'nub'
    }
 
    
}


function sendNotification(email) {
   const chkIndex=email.indexOf('@');
   if(chkIndex===-1){
    return "Invalid Email"
   }
   else if(chkIndex===0  ){
    return "Invalid Email"

   }
   else if(chkIndex===email.length-1){
      return "Invalid Email"

   }
   else if(chkIndex===''){
      return "Invalid Email"

   }
   else{
    const userInfo=  email.slice(0,chkIndex );
    const domInfo=email.slice(chkIndex+1 );
    const fullInformation=userInfo + " sent you an email from " +domInfo;

    return fullInformation;
   }
}

function calculateFinalScore(obj) {
    if(typeof(obj) !=="object"){
        return  "Invalid Input";
    }else{ 
        let totalScore=obj.testScore+obj.schoolGrade;
        if(obj.isFFamily){
            totalScore=totalScore+20;

        }
      
        if(totalScore<80){

             return "false";
        }else{
            return"true";
        }  
           
    }
}




function  waitingTime(waitingTimes  , serialNumber) {
    if (Array.isArray(waitingTimes) && typeof(serialNumber)==='number'){
        let sum=0;
        for(let i of waitingTimes){
          
        }
        return sum;

    }
    else{
        return"Invalid Input";
    }
}
console.log(waitingTime([ 3, 5, 7, 11, 6 ], 10));


