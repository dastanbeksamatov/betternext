import axios from 'axios';

// eslint-disable-next-line no-undef
const key = process.env.customKey;
// GET https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=how%20to%20learn%20coding&safeSearch=none&key=[YOUR_API_KEY] HTTP/1.1

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json

const baseUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=';

const makeQuery = async (searchTerm) => {
  const terms = searchTerm.replace(/\s/g, '%20');
  const queryUrl = `${baseUrl}${terms}&safeSearch=none&key=${key}`;
  const result = await axios.get(queryUrl);
  console.log(result);
  return result.data.items;
};

export default {
  makeQuery
};