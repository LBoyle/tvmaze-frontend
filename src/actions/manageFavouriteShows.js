const getFavouriteShows = () => {
  if(localStorage.favouriteShows) {
    return JSON.parse(localStorage.favouriteShows);
  }
}

const setFavouriteShows = (item) => {
  localStorage.setItem('favouriteShows', JSON.stringify({ data: item }));
}

const addToFavouriteShows = item => {
  let current;
  if(localStorage.getItem('favouriteShows')) {
      current = JSON.parse(localStorage.getItem('favouriteShows')).data;
      if(current.indexOf(item) === -1) current.push(item);
      localStorage.setItem('favouriteShows', JSON.stringify({ data: current }));
    } else {
      console.log('No favouriteShows object');
      setFavouriteShows([item]);
    }
}

const deleteFavouriteShow = (item, c) => {
  let current;
  if(localStorage.getItem('favouriteShows')) {
    current = JSON.parse(localStorage.getItem('favouriteShows')).data;
    current.splice(current.indexOf(item), 1);
    localStorage.setItem('favouriteShows', JSON.stringify({ data: current }));
    c();
  } else {
    console.log('No favouriteShows object');
  }
}

module.exports = {
  getFavouriteShows,
  setFavouriteShows,
  addToFavouriteShows,
  deleteFavouriteShow
};
