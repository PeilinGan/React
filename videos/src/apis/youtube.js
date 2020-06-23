import axios from 'axios';
const KEY = 'AIzaSyDVsXenxxmJA3pu21g7KUoGQ36045kPf7Q';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: `${KEY}`,
  },
});
