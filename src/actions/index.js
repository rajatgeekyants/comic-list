export const LOAD_COMICS = 'LOAD_COMICS';
export const CLEAR_COMICS = 'CLEAR_COMICS';

export function loadComics () {
  return {
    type: LOAD_COMICS,
  };
}

export function clearComics () {
  return {
    type: CLEAR_COMICS,
  };
}
