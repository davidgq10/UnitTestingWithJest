// importar la función sum del archivo app.js
const { sum } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const dollars = fromEuroToDollar(3.5)

    // is 1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(dollars);
})

test("One Yen should be 0.0062548 Pound", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const Pound = fromYenToPound(1000)

    // is 1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    const expected = 1000 * (0.8/127.9); 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(Pound);
})

test("One dollar should be 154.2 Yen", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const Yen = fromDollarToYen(2)

    // is 1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    const expected = 2 * (127.9/1.2); 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(Yen);
})