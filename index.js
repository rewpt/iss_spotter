// index.js
const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');


// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP('45.91.23.11', (error, coords) => {
//   if (error) {
//     console.log("Unable to fetch times: " , error);
//     return;
//   }
//   console.log('It worked! Returned Coords:' ,coords);
// });

// fetchISSFlyOverTimes({ latitude: 45.4995, longitude: -73.5848 }, (error, flyOvers) => {
//   if (error) {
//     console.log("Unable to fetch times: " , error);
//     return;
//   }
//   console.log('It worked! Returned Flyovers:' ,flyOvers);
// });
const logPasses = function(passTimes) {
  for (let pass of passTimes) {
    const dateTime = new Date(0);
    dateTime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${dateTime} for ${duration} seconds!`)
  }
}

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  logPasses(passTimes)
});

