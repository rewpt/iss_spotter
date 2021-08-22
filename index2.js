// const { fetchMyIp, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss_promised');

// fetchMyIp()
//   .then(fetchCoordsByIP)
//   .then(fetchISSFlyOverTimes)
//   .then(body => console.log(body));

const logPasses = function(passTimes) {
  for (let pass of passTimes) {
    const dateTime = new Date(0);
    dateTime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${dateTime} for ${duration} seconds!`)
  }
}

const { nextISSTimesForMyLocation } = require('./iss_promised');

nextISSTimesForMyLocation()
.then((passTimes) => {
  logPasses(passTimes);
})
.catch(error => {
  console.log("It didn't work: ", error.message);
});
  