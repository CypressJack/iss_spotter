const request = require("request");

const fetchMyIP = function (callback) {
  const ipAPI = "https://api.ipify.org/?format=json";
  request(ipAPI, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const ip = JSON.parse(body).ip;
    callback(null, ip);
  });
};

const fetchCoordsByIP = function (ip, callback) {
  const freeGeo = `https://freegeoip.app/json/${ip}`;
  const coords = {
    latitude: "",
    longitude: "",
  };
  request(freeGeo, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const data = JSON.parse(body);
      coords.latitude = data.latitude;
      coords.longitude = data.longitude;
      callback(error, coords);
    }
    if (response && response.statusCode !== 200) {
      const errMsg = `FreeGeoIP ERROR status code ${response.statusCode}`;
      callback(errMsg, null);
    }
    if (error) {

      callback(error, null);
    }
  });
};

module.exports = {
  fetchMyIP,
  fetchCoordsByIP,
};
