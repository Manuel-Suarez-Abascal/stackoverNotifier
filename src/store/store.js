const axios = require("axios");

const getQuestions = async questionTag => {
  return await axios
    .get(
      `https://api.stackexchange.com//2.2/questions?order=desc&sort=creation&tagged=${questionTag}&site=stackoverflow&key=sRtlAYT6ufs8EkbTzH3hlQ((`
    )
    .then(res => res.data.items);
};

export { getQuestions };
