function checkEligibility(age) {
    
    if(typeof age !== 'number') {
        return "Invalid Age Input, Age Should Only Be Number !!"
    }else if (age< 18){
        return false
    }else{
        return true;
    }
    
  }

console.log(checkEligibility(18));
