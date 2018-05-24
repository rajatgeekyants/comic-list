import React from 'react';
import {connect} from 'react-redux';
import {clearComics, loadComics} from '../../actions';

function Comics (props) {
  return (
    <div>
      <button type="button" onClick={props.loadComics}>Load</button>
      <button type="button" onClick={props.clearComics}>Clear</button>
      <ComicList {...props} />
    </div>
  );
}

function ComicList (props) {
  if (props.items.length === 0) return null;
  return (
    <div>
      {props.items.map (item => <Comic {...item} key={item.title} />)}
    </div>
  );
}

function Comic (props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>Written By: {props.by}</h2>
    </div>
  );
}

function mapState (state) {
  return state;
}

function mapDispatch (dispatch) {
  return {
    loadComics: () => dispatch (loadComics ()),
    clearComics: () => dispatch (clearComics ()),
  };
}

export default connect (mapState, mapDispatch) (Comics);
