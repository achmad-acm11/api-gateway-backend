const { default: axios } = require("axios");
const { URL_SERVICE_COURSE } = process.env;

module.exports = {
  create: async (req, res) => {
    try {
      const userId = req.user.data.id;
      const course_id = req.body.course_id;

      const response = await axios.post(`${URL_SERVICE_COURSE}/api/my-course`, {
        user_id: userId,
        course_id: course_id,
      });
      res.json(response.data);
    } catch (error) {
      const { status, data } = error.response;
      res.status(status).json(data);
    }
  },
};
