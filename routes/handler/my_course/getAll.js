const { default: axios } = require("axios");
const { URL_SERVICE_COURSE } = process.env;

module.exports = {
  getAll: async (req, res) => {
    try {
      const user_id = req.user.data.id;
      const myCourses = await axios.get(`${URL_SERVICE_COURSE}/api/my-course`, {
        params: {
          user_id,
        },
      });
      res.json(myCourses.data);
    } catch (error) {
      const { status, data } = error.response;
      res.status(status).json(data);
    }
  },
};
