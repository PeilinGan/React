import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => async (dispatch) => {
  const posts = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: posts.data });
};

export const fetchUser = (userId) => (dispatch) => {
  _fetchUser(userId, dispatch);
};

//lodash one-time memorization to memorize the same api request
const _fetchUser = _.memoize(async (userId, dispatch) => {
  const user = await jsonPlaceholder.get(`/users/${userId}`);
  dispatch({ type: "FETCH_USER", payload: user.data });
});
