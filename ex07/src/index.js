function logicalndOperator(num) {
    if(num <= 80 && num >= 40) {
    return "Yes"
}
return "No";
}

console.log(logicalndOperator(0));
console.log(logicalndOperator(24));
console.log(logicalndOperator(45));
console.log(logicalndOperator(57));
console.log(logicalndOperator(100));
module.exports = logicalndOperator;