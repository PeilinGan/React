const { selectSong } = require('../actions');

import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'I want it that way', duration: '2:45' },
    { title: 'All star', duration: '3:20' },
    { title: 'Graduate', duration: '6:06' },
  ];
};

const selectedSongReducer = (selectSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectSong;
};

export default combineReducers({
  songs: songsReducer,
  selectSong: selectedSongReducer,
});
