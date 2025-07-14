
// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

const fromDollarToYen = function(valueInDollar) {
    // Convert the given valueInDollar to yen
    let valueInYen = valueInDollar * 147.33;
    // return the yen value
    return valueInYen;
}

const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollar
    let valueInDollar = valueInEuro * 1.17;
    // return the dollar value
    return valueInDollar;
}

const fromYenToPound = function(valueInYen) {
    // Convert the given valueInYen to Pound
    let valueInPound = valueInYen * 0.0050;
    // return the pound value
    return valueInPound;
}

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
// We include fromEuroToDollar here as well because it needs to be exported
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }
