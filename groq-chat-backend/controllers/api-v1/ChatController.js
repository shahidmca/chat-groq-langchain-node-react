const Helper = require("../../helpers/Helper");
const ChatHelper = require('../../helpers/ChatHelper');

module.exports = {
  PostChat: async (req, res) => {
    try {
      let body = req.body;
      let result = await ChatHelper.Get(body.content);
      return Helper.response(res, result?.status || 200, "Data fetched successfully", {data : { "answer" : result.data }});
    } catch (error) {
      console.error(`Error in catch: Data not getting, error: ${JSON.stringify(error)}`);
      return Helper.response(res, error.status, error.message, {error : error});
    }
  },

};
