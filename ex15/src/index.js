function myDoWhile() {
    var myNumbers = "";
    var i = 0;
    do {
        myNumbers = myNumbers + i;
        if(i != 9){
            myNumbers = myNumbers + ", ";
        }
        i++;
    }
    while (i < 10);



return myNumbers;
}

console.log(myDoWhile());
module.exports = myDoWhile;