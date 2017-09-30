import apisauce from "apisauce";

const BASE_URL = "http://0.0.0.0:4000/api/";
const postsUrl = () => `${BASE_URL}/posts`;

const rawInstance = apisauce.create({
  baseURL: `${BASE_URL}`
});

export default {
  getPosts: function getPosts() {
    return rawInstance.get(postsUrl()).then(response => response.data);
  }
};
