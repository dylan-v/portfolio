import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Button(props) {
  return (
      <Link to={props.link}>
        <div className="btn" id="btn-about">
            <p className="btn-text"></p>
        </div>
        </Link>
  )
}

 
export default Thumbnail;

