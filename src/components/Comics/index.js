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
  /*if (props.items.length === 0) return null;*/
  return (
    <div>
      <table>
        <thead>
          <tr style={{textAlign: 'center'}}>
            <th>Name</th>
            <th>Cover</th>
            <th>Written By</th>
            <th>Starring</th>
          </tr>
        </thead>
        {props.items.map (item => <Comic {...item} key={item.title} />)}
      </table>
    </div>
  );
}

function Comic (props) {
  return (
    <tbody>
      <td>{props.title}</td>
      <img src={props.url} alt="Cover" />
      <td>{props.by}</td>
      <td>{props.starring}</td>
    </tbody>
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
