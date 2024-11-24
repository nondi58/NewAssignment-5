
function calculateTax(income, expenses) {
    if (expenses > income) {
        return "Invalid Input";
    }
    else if (income < 0) {
        return "Invalid Input";

    }
    else if (expenses < 0) {
        return "Invalid Input";

    }
    else {
        const r = income - expenses;
        const reminder = r * 0.20;
        return reminder;
    }
}

function checkDigitsInName(name) {


    if (typeof (name) === 'string') {
        return 'false'
    }
    else if (typeof (name) === 'string' && (isNaN(parseInt(name)))) {
        return 'true';
    }
    else if (typeof (name) === 'number') {
        return 'nub'
    }


}


function sendNotification(email) {
    const chkIndex = email.indexOf('@');
    if (chkIndex === -1) {
        return "Invalid Email"
    }
    else if (chkIndex === 0) {
        return "Invalid Email"

    }
    else if (chkIndex === email.length - 1) {
        return "Invalid Email"

    }
    else if (chkIndex === '') {
        return "Invalid Email"

    }
    else {
        const userInfo = email.slice(0, chkIndex);
        const domInfo = email.slice(chkIndex + 1);
        const fullInformation = userInfo + " sent you an email from " + domInfo;

        return fullInformation;
    }
}

function calculateFinalScore(obj) {
    if (typeof (obj) !== "object") {
        return "Invalid Input";
    } else {
        let totalScore = obj.testScore + obj.schoolGrade;
        if (obj.isFFamily) {
            totalScore = totalScore + 20;

        }

        if (totalScore < 80) {

            return "false";
        } else {
            return "true";
        }

    }
}




function waitingTime(waitingTimes, serialNumber) {
    if (Array.isArray(waitingTimes) && typeof (serialNumber) === 'number') {
        let sum = 0;
        let avg = 0;
        let totalAvg;
        let curentSerial;
let remainArray;
let waitingTime;


        for (let i = 0; i < waitingTimes.length; i++) {
            sum = sum + waitingTimes[i];
            avg = sum / waitingTimes.length;
            totalAvg=(Math.round(avg));
          
            if(serialNumber>waitingTimes[i]){
                curentSerial=serialNumber-1;
                remainArray=curentSerial-waitingTimes.length;
                waitingTime=remainArray* totalAvg;
               }

        }
        return  waitingTime;

    }
    else {
        return "Invalid Input";
    }
}





