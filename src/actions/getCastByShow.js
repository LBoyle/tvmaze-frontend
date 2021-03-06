import axios from 'axios';

export default function getCastByShow(url, c) {
  return axios.get(`http://api.tvmaze.com/shows/${url}/crew`)
    .then(res => c(res.data))
    .catch(err => c({ error: err }));
}
