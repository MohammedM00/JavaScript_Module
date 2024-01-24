# Distance Module

This is a simple JavaScript module for distance conversions.

## Functions

1. `feetToMeters(feet): number`
   - Converts feet to meters.

2. `metersToFeet(meters): number`
   - Converts meters to feet.

3. `milesToKm(miles): number`
   - Converts miles to kilometers.

4. `kmToMiles(km): number`
   - Converts kilometers to miles.

5. `calculate(unit, value): number`
   - Main function to calculate based on unit and value. Calls the appropriate conversion function.

## Usage

In your JavaScript project, you can use this module as follows:

```javascript
const { calculate } = require('./Distance');

// Example usage
const convertedValue = calculate('feet', 30);

console.log('Converted Value:', convertedValue);
