
function myFunction(myParameter) {

    if(myParameter) {
        return "Parameter is true!";
    }
    return "Parameter is false!";
}

console.log(myFunction(10 < 15));
console.log(myFunction(15 < 10));
module.exports = myFunction;