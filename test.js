const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound} = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.17 dollars", function() {

    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.17 dollars, then 3.5 euros should be (3.5 * 1.17)
    const expected = 3.5 * 1.17; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.095); // 1 euro is 1.17 dollars, then 3.5 euros should be = (3.5 * 1.17)
});



test("One dollar should be 147.33 yens", function() {

    const yens = fromDollarToYen(4);

    // If 1 dollar is 147.33 yens, then 4 dollars should be (4 * 147.33)
    const expected = 4 * 147.33; 
    
    // This is the comparison for the unit test
     expect(fromDollarToYen(4)).toBe(589.32); // 1 dollar is 147.33 yens, then 4 dollars should be = (4 * 147.33)
});



test("One yen should be 0.0050 pounds", function() {

    const pounds = fromYenToPound(3.5);

    // If 1 yen is 0.0050 pounds, then 3.5 yens should be (3.5 * 0.0050)
    const expected = 3.5 * 0.0050; 
    
    // This is the comparison for the unit test
     expect(fromYenToPound(3.5)).toBe(0.0175); // 1 yen is 0.0050 pounds, then 3.5 yens should be = (3.5 * 0.0050)
});