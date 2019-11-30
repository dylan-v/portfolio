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
            <div class="col-12">
              <h1>I’m Dylan, a designer who makes products and services human-centered.</h1>
            </div>
            </div>
            <div class="row">
            <div class="col-xl-8">
              <Thumbnail
                link="/SynXis"
                image={Cover}
                title="Twitter Newsfeed"
                category="Mobile App"
              />
              </div>
              <div class="col-xl-4 ">

              <Thumbnail
                link="/Project2"
                image={Cover}
                title="Airbnb Experiences"
                category="Website"
              />
              </div>
              <div class="col-lg-4">

              <Thumbnail
                link="/project3"
                image={Cover}
                title="Photoshop Redesign"
                category="Desktop App"
              />
              </div>
              <div class="col-lg-8">

              <Thumbnail
                link="/project3"
                image={Cover}
                title="Photoshop Redesign"
                category="Desktop App"
              />
              </div>
              <div class="col-lg-4">

              {/* <Thumbnail
                link="/project3"
                image={Cover}
                title="Photoshop Redesign"
                category="Desktop App"
              /> */}
              </div>
          </div>
        </div>
        
    );
  }
}

export default Home;