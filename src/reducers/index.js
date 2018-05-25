import {CLEAR_COMICS, LOAD_COMICS} from '../actions';

const comics = [
  {
    title: 'DC Universe Rebirth #1',
    url: 'https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2016/05/DCUREB_Cv1_ds_300dpi_cropped_5743b270aaaae3.39723701.jpg?itok=JpNJJ2_O',
    by: 'Geoff Johns',
    starring: 'Wally West, The Flash, Batman',
  },
  {
    title: 'Batman Rebirth #1',
    url: 'https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2018/05/batman_rbth_1_5b05eb12652614.67168903.jpg?itok=TsFdZMxI',
    by: 'Scott Snyder, Tom King',
    starring: 'Batman, Alfred Pennyworth, Jim Gordon, Lucius Fox',
  },
  {
    title: 'Superman Rebirth #1',
    url: 'https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2018/05/suprman_rbth_1_5b05f25e285617.29508579.jpg?itok=55de_Ul_',
    by: 'Peter J. Tomasi',
    starring: 'Superman, Batman, Doomsday, Jimmy Olsen, Nightwing, Lois Lane, Wonder Woman,  Justice League',
  },
];

const initialState = {
  items: [],
};

function comicsReducer (state = initialState, action) {
  switch (action.type) {
    case LOAD_COMICS:
      return {
        items: comics.slice (),
      };
    case CLEAR_COMICS:
      return {
        items: [],
      };
    default:
      return state;
  }
}

export default comicsReducer;
