function myForLoop1(){
    var evenNumbers = "";
    for (var i = 0; i <= 8; i+=2){
        evenNumbers = evenNumbers + i;
        if(i !=8){
            evenNumbers = evenNumbers + ", "
        }
    }

    return evenNumbers;
}

console.log(myForLoop1());


function myForLoop2(){
    var evenInverseNumbers = "";
    for (var i = 8; i >=0; i-=2){
        evenInverseNumbers = evenInverseNumbers + i;
        if(i !=0){
            evenInverseNumbers = evenInverseNumbers +", "
        }

    }
    return evenInverseNumbers;
}

console.log(myForLoop2());
module.exports = {
    myForLoop1,
    myForLoop2
}