import axios from 'axios';

export default function getShow(url, c) {
  return axios.get(`http://api.tvmaze.com/shows/${url}`)
    .then(res => c(res.data))
    .catch(err => c({ error: err }));
}
