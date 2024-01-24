// index.js

const { calculate } = require('./Distance');

// Example usage for feetToMeters
const feetToMetersResult = calculate('feet', 30);
console.log(`${30} feet is ${feetToMetersResult.toFixed(3)} meters.`);

// Example usage for metersToFeet
const metersToFeetResult = calculate('meters', 10);
console.log(`${10} meters is ${metersToFeetResult.toFixed(3)} feet.`);

// Example usage for milesToKm
const milesToKmResult = calculate('miles', 5);
console.log(`${5} miles is ${milesToKmResult.toFixed(3)} kilometers.`);

// Example usage for kmToMiles
const kmToMilesResult = calculate('km', 8);
console.log(`${8} kilometers is ${kmToMilesResult.toFixed(3)} miles.`);
