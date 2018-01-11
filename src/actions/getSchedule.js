import axios from 'axios';

export default function getSchedule(date, c) {
  return axios.get(`http://api.tvmaze.com/schedule?country=US&date=${date}`)
    .then(res => c(res.data))
    .catch(err => c({ error: err }));
}
