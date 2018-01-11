const getFavouriteEpisodes = () => {
  if(localStorage.favouriteEpisodes) {
    return JSON.parse(localStorage.favouriteEpisodes);
  }
}

const setFavouriteEpisodes = item => {
  localStorage.setItem('favouriteEpisodes', JSON.stringify({ data: item }));
}

const addToFavouriteEpisodes = item => {
  let current;
  if(localStorage.getItem('favouriteEpisodes')) {
      current = JSON.parse(localStorage.getItem('favouriteEpisodes')).data;
      if(current.indexOf(item) === -1) current.push(item.toString());
      localStorage.setItem('favouriteEpisodes', JSON.stringify({ data: current }));
    } else {
      console.log('No favouriteEpisodes object');
      setFavouriteEpisodes([item.toString()]);
    }
}

const deleteFavouriteEpisode = (item, c) => {
  let current;
  if(localStorage.getItem('favouriteEpisodes')) {
    current = JSON.parse(localStorage.getItem('favouriteEpisodes')).data;
    current.splice(current.indexOf(item), 1);
    localStorage.setItem('favouriteEpisodes', JSON.stringify({ data: current }), () => c());
  } else {
    console.log('No favouriteEpisodes object');
  }
}

module.exports = {
  getFavouriteEpisodes,
  setFavouriteEpisodes,
  addToFavouriteEpisodes,
  deleteFavouriteEpisode
};
