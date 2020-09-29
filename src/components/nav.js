import React, { Component } from 'react';
import MCSlogo from "../images/mcs-durham-logo.png";

class Nav extends Component {
  render() {
    return (
      <nav>
          <ul>
          <img src={MCSlogo} style={{width:120, height: 110, borderRadius: '10px', marginTop: -7}} alt="profile" />
          </ul>
          <ul>
              <li><a href="https://mcsdurham.org/about-mcs">ABOUT MCS</a></li>
              <li><a href="https://mcsdurham.org/support-mcs">SUPPORT MCS</a></li>
              <li><a href="https://mcsdurham.org/community">COMMUNITY</a></li>
              
          </ul>
      </nav>
    );
  }
}

export default Nav;
