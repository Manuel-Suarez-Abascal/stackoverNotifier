const axios = require("axios");

/**
 * @param {string} questionTag -> tag of the question to be fetched
 * @returns {array} -> array of objects representing tag related questions from StackOverflow
 */
const getQuestions = async (questionTag) => {
  try {
    return await axios
      .get(
        `https://api.stackexchange.com/2.2/questions?order=desc&sort=creation&tagged=${questionTag}&site=stackoverflow&key=sRtlAYT6ufs8EkbTzH3hlQ((`
      )
      .then((res) => res.data.items);
  } catch (error) {
    console.log(error);
  }
};

export { getQuestions };
