import axios from 'axios';

const apiKey = '65rHBII969yJBHLScUrFnxay5MlXWL9x';

export default {
  fetchGifs(query) {
    return axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}`);
  },
};
