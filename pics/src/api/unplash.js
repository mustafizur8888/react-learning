import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 3PpF6vEUNptQIc8bscBGtzRCQDkiDVDbxbD_CXS0Mhk',
  },
});
