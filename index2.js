const { fetchMyIp, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss_promised');

fetchMyIp()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then(body => console.log(body));
  
  
