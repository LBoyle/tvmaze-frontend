import axios from 'axios';

// url is '/shows/:id'
export default function getShow(url, c) {
  return axios.get(`http://api.tvmaze.com${url}`)
    .then(res => c(res.data))
    .catch(err => c({ error: err }));
}
