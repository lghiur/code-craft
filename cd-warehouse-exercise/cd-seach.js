const cdStock = require('./cd-stock');

const filterByParameter = (cds, filterBy, value) => cds
  .filter(cd => cd[filterBy] === value)

const searchCD = ({artist, title}) => {
  if(title && artist) {
    let filteredByTitle = filterByParameter(cdStock, 'title', title);
    let filteredByArtist = filterByParameter(filteredByTitle, 'artist', artist);

    return filteredByArtist;
  }

  if(artist) {
    return filterByParameter(cdStock, 'artist', artist);
  }

  if(title) {
    return filterByParameter(cdStock, 'title', title);
  }

  return cdStock;
};

module.exports = searchCD;