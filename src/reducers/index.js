import {CLEAR_COMICS, LOAD_COMICS} from '../actions';

const comics = [
  {
    title: 'DC Universe Rebirth #1',
    url: 'https://www.dccomics.com/comics/dc-universe-rebirth-2016/dc-universe-rebirth-1',
    by: ['Geoff Johns'],
    starring: ['Wally West', 'The Flash', 'Batman'],
  },
  {
    title: 'Batman Rebirth #1',
    url: 'https://www.dccomics.com/comics/batman-2016/batman-rebirth-1',
    by: ['Scott Snyder', 'Tom King'],
    starring: ['Batman', 'Alfred Pennyworth', 'Jim Gordon', 'Lucius Fox'],
  },
  {
    title: 'Superman Rebirth #1',
    url: 'https://www.dccomics.com/comics/superman-2016/superman-rebirth-1',
    by: ['Peter J. Tomasi'],
    starring: [
      'Superman',
      'Batman',
      'Doomsday',
      'Jimmy Olsen',
      'Nightwing',
      'Lois Lane',
      'Wonder Woman',
      'Justice League',
    ],
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
