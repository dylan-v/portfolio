// Home.js

import React, { Component } from 'react';
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Cover from './assets/images/Rectangle.jpg'

class Home extends Component {
  render() {
    return (
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <h1>Dylan Vanelli.</h1>
              <h3>A UX Designer at Capital One passionate about uniting creativity and cross-disciplinary expertise to develop novel solutions to solve complex problems.</h3>
            </div>
            </div>
            <div class="row">
            <div class="col-sm">
              <Thumbnail
                link="/SynXis"
                image={Cover}
                title="Twitter Newsfeed"
                category="Mobile App"
              />
              </div>
              <div class="col-sm">

              <Thumbnail
                link="/project2"
                image={Cover}
                title="Airbnb Experiences"
                category="Website"
              />
              </div>
              <div class="col-sm">

              <Thumbnail
                link="/project3"
                image={Cover}
                title="Photoshop Redesign"
                category="Desktop App"
              />
              </div>
          </div>
        </div>
        
    );
  }
}

export default Home;