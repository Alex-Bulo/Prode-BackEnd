const axios = require("axios");
const { apiAuth, APIROUTE } = require("./apiConfi");

module.exports = {
  getFixtureByLeague: async (id, year) => {
    try {
    
      const apiResponse = await axios.request({
        ...apiAuth,
        url: `${APIROUTE}/fixtures`,
        params: { league: id, season: year },
      });

      return apiResponse.data;
    } catch (error) {
      console.log(error);
    }
  },
};
