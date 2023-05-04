// Import the necessary functions and variables from the JavaScript file
const {
  totalCost,
  withDiscount,
  withCoupon,
  timmy,
  sarah,
  rocky,
} = require("./prescriptions.js");

// Testing the totalCost() function
describe("totalCost()", () => {
  // Test if the totalCost() function returns the correct total cost for sarah
  it("returns the correct total cost for sarah", () => {
    expect(totalCost(sarah.pricePerRefill, sarah.refills)).toBe(50);
  });

  // Test if the totalCost() function returns the correct total cost for timmy

  // Test if the totalCost() function returns the correct total cost for rocky
 

// Testing the withDiscount() function
describe("withDiscount()", () => {
  // Test if the withDiscount() function returns the correct total cost with subscription discount for sarah
  it("returns the correct total cost with subscription discount for sarah", () => {
    expect(
      withDiscount(
        totalCost(sarah.pricePerRefill, sarah.refills),
        sarah.subscription
      )
    ).toBe(37.5);
  });

  // Test if the withDiscount() function returns the correct total cost with subscription discount for rocky
 
// Testing the prescription properties
describe("Prescription Tests", () => {
  // Test if rocky has prescription property with value "phenylephrine"
  
// Testing the pricePerRefill properties

  // Test if rocky has pricePerRefill property with value 30
  

// Testing the refills properties

  // Test if sarah has refills property with value 1

  // Test if rocky has refills property with value 5
 

// Testing the subscription properties

  // Test if timmy has subscription property with value false

// Testing the coupon properties

  // Test if timmy has coupon property with value true
