// Home.js

import React, { Component } from 'react';
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Cover from './assets/images/Rectangle.jpg'
import Logo from './assets/images/dd-logo.svg'
import Plants from './assets/images/Home.svg'


class Home extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <div class="row header-content">
            <div class="col-lg-3 header-logo"><img className="header-logo" src={Logo} /></div>
            <div class=" col-md-12">
              <h1>Dylan Vanelli is a <span style={{color:'#DE5948'}}>UX Designer</span> using service design to streamline banking at Capital One.</h1>
            </div>
            <div class=" col-md-12 motto">
              <h3><b>Motto: </b>“Make the right thing, make the thing right.”</h3>
            </div>
          </div>
          </div>
          <div class="col-lg-12"><img className="plants" src={Plants} /></div>

        <div class="work-section">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h2> Selected works</h2>
            </div>
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
              </div>
          </div>
        </div>
        </div>
    </div>
    );
  }
}

export default Home;