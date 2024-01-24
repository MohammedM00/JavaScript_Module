// Distance.js

// Helper function: Convert feet to meters
function feetToMeters(feet) {
    return feet * 0.3048;
  }
  
  // Helper function: Convert meters to feet
  function metersToFeet(meters) {
    return meters * 3.28084;
  }
  
  // Helper function: Convert miles to kilometers
  function milesToKm(miles) {
    return miles * 1.60934;
  }
  
  // Helper function: Convert kilometers to miles
  function kmToMiles(km) {
    return km * 0.621371;
  }
  
  // Main function: Calculate based on unit and value
  function calculate(unit, value) {
    switch (unit) {
      case 'feet':
        return feetToMeters(value);
      case 'meters':
        return metersToFeet(value);
      case 'miles':
        return milesToKm(value);
      case 'km':
        return kmToMiles(value);
      default:
        throw new Error('Invalid unit provided.');
    }
  }
  
  // Export all functions
  module.exports = {
    feetToMeters,
    metersToFeet,
    milesToKm,
    kmToMiles,
    calculate
  };
  