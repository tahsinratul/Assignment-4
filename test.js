function cashOut(money) {
    let charge = (money*1.75)/100

    if(typeof(money) !== 'no' || money < 0){
        return 'Invalid';
    } 
    else{
        return charge;
    }
}



function validEmail(email) {
    if (typeof email !== "string") {
        return "Invalid";
    }
    const specialChars = ".-+_@";
    
    if (email.includes(" ")) {
        return false;
    }

    if (specialChars.includes(email[0])) {
        return false;
    }
    
    const atIndex = email.indexOf("@");
    if (atIndex <= 0 || atIndex >= email.length - 1) {
        return false;
    }

    if (!email.endsWith(".com")) {
        return false;
    }
    return true;
}





function electionResult(votes){
    if (!Array.isArray(votes)) {
        return "Invalid";
    }
    let mangoVotes = 0;
    let bananaVotes = 0;
    for (let i = 0; i < votes.length; i++) {
        const vote = votes[i]
        if (vote === "mango") {
            mangoVotes++;
        } else if (vote === "banana") {
            bananaVotes++;
        }
    }
    if (mangoVotes > bananaVotes) {
        return "Mango";
    } else if (bananaVotes > mangoVotes) {
        return "Banana";
    } else {
        return "Draw";
    }
}




function isBestFriend(f1,f2){

}



function calculateWatchTime(times) {
    if (!times.every(item => typeof item === 'number')) {
        return "Invalid";
    }
    let totalSeconds = times.reduce((times, time2) => times + time2, 0);
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;
    
    return { hour: hours, minute: minutes, second: seconds };
}
