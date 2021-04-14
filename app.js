// console.log("Hello World")

const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

// one euro is:
const fromEuroToDollar = (valueInEuro)=>{
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar
}
const fromDollarToYen = (valueInDollar)=>{
    let valueInYen = valueInDollar * (127.9/1.2);
    return valueInYen
}
const fromYenToPound = (valueInYen)=>{
    let valueInPound = valueInYen * (0.8/127.9);
    return valueInPound
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };