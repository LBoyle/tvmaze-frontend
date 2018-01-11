import axios from 'axios';

export default function getEpisode(url, c) {
  return axios.get(`http://api.tvmaze.com/episodes/${url}`)
    .then(res => c(res.data))
    .catch(err => c({ error: err }));
}
