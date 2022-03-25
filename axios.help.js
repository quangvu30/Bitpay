const axios = require("axios");

async function GET(url) {
  let config = {
    method: "get",
    url: url,
  };

  try {
    let result = await axios(config);
    return result.data;
  } catch (err) {
    return err;
  }
}

async function POST(url, data) {
  let config = {
    method: "post",
    url: url,
    data: data,
  };

  try {
    let result = await axios(config);
    return result.data;
  } catch (err) {
    return err;
  }
}

module.exports = { GET, POST };
