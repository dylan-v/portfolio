import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


 
function Thumbnail(props) {
  return (
    <div className="shell">
      <Link to={props.link}>
      <div className="project">
        <div className="project-img">
        </div>
        <div className="project-details">
          <div className="project-title" >{props.title}</div>
          <div className="project-category">{props.category}</div>
        </div>
        </div>
            </Link>
    </div>
  )
}

 
export default Thumbnail;

