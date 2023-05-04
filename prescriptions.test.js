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
  it("returns the correct total cost for timmy", () => {
    expect(totalCost(timmy.pricePerRefill, timmy.refills)).toBe(75);
  });

  // Test if the totalCost() function returns the correct total cost for rocky
  it("returns the correct total cost for rocky", () => {
    expect(totalCost(rocky.pricePerRefill, rocky.refills)).toBe(150);
  });
});

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
  it("returns the correct total cost with subscription discount for rocky", () => {
    expect(
      withDiscount(
        totalCost(rocky.pricePerRefill, rocky.refills),
        rocky.subscription
      )
    ).toBe(112.5);
  });
});

// Testing the prescription properties
describe("Prescription Tests", () => {
  // Test if rocky has prescription property with value "phenylephrine"
  test('Rocky should have prescription property with value "phenylephrine"', () => {
    expect(rocky).toHaveProperty("prescription", "phenylephrine");
  });
});

// Testing the pricePerRefill properties
describe("Price Tests", () => {
  // Test if rocky has pricePerRefill property with value 30
  test("Rocky should have pricePerRefill property with value 30", () => {
    expect(rocky).toHaveProperty("pricePerRefill", 30);
  });
});

// Testing the refills properties
describe("Refills Tests", () => {
  // Test if sarah has refills property with value 1
  test("Sarah should have refills property with value 1", () => {
    expect(sarah).toHaveProperty("refills", 1);
  });

  // Test if rocky has refills property with value 5
  test("Rocky should have refills property with value 5", () => {
    expect(rocky).toHaveProperty("refills", 5);
  });
});

// Testing the subscription properties
describe("Subscription Tests", () => {
  // Test if timmy has subscription property with value false
  test("Timmy should have subscription property with value false", () => {
    expect(timmy).toHaveProperty("subscription", false);
  });
});

// Testing the coupon properties
describe("Coupon Tests", () => {
  // Test if timmy has coupon property with value true
  test("Timmy should have coupon property with value true", () => {
    expect(timmy).toHaveProperty("coupon", true);
  });
});
