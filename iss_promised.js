const request = require("request-promise-native");

const fetchMyIP = () => {
  return request("https://api.ipify.org?format=json");
};

const fetchCoordsByIP = (body) => {
  return request(`https://freegeoip.app/json/${JSON.parse(body).ip}`);
};

const fetchISSFlyOverTime = (body) => {
  const data = JSON.parse(body);
  const lat = data.latitude;
  const long = data.longitude;
  return request(
    `http://api.open-notify.org/iss/v1/?lat=${lat}&lon=${long}&alt=1650`
  );
};

const nextISSTimesForMyLocation = () => {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTime)
    .then((data)=> {
      const { response } = JSON.parse(data);
      return response;
    });
};

module.exports = {
  nextISSTimesForMyLocation,
};
