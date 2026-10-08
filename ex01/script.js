function calculateGrade(score){
    if (typeof score!== "number"|| score< 0 || score>100){
        return "invalid number";
    }
    if (score>90){
        return "A";
    }
    else if (score >80){
        return "B";
    }

        else if (score >70){
        return "C";
    }
        else if (score >=50){
        return "D";
    }
        else {
        return "F";}
    
}
 function  checkAccess(age, hasTicket) {
    if (age >18 && hasTicket ===true ){
        return true;
    }
    else {
        return false;
    }
 }
 console.log( "age:18 and ticket is :true "+ checkAccess (18 , true));
  console.log( "age:22 and ticket is : false "+ checkAccess (22 , false));
  console.log("your grade is: 99 "+ calculateGrade(99));
  console.log("your grade is : 50 "+ calculateGrade(50));
    console.log("your grade is : f "+ calculateGrade( "f "));
