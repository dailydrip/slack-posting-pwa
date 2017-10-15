import apisauce from "apisauce";

const BASE_URL = "http://phoenix-slack-posting.dailydrip.com/api";
const postsUrl = () => `${BASE_URL}/posts`;

const rawInstance = apisauce.create({
  baseURL: `${BASE_URL}`
});

export default {
  getPosts: function getPosts() {
    return rawInstance.get(postsUrl()).then(response => response.data);
  }
};
