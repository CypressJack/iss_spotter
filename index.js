const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTime } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned IP:' , ip);
});

// fetchCoordsByIP('24.86.142.101', (error, data)=>{
//   console.log(data);
// })


// const testCoords = {
//   longitude: '-123.0961',
//   latitude: '49.2643'
// }


// fetchISSFlyOverTime(testCoords, (error, data)=>{
//   console.log(error);
//   console.log(data)
// });

