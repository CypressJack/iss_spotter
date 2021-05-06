const request = require("request");

const fetchMyIP = function(callback) {
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
  const freeGeo = `https://freegeoip.app/json/${ip}`
  request(freeGeo, (error, response, body) => {
    console.log(body);
    callback()
  });
}



module.exports = { 
  fetchMyIP,
  fetchCoordsByIP };
