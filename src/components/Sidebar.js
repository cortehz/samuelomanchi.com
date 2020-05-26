import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import Scroll from './Scroll';

import avatar from '../assets/images/Asset3@4x.png';
// import avatar2 from '../assets/images/avatar.png';

// import config from '../../config';

export class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { content: 'About', href: 'about' },
        { content: 'Experience', href: 'experience' },
        { content: 'Portfolio', href: 'portfolio' },
        { content: 'Education', href: 'education' },
        { content: 'Skills', href: 'skills' },
        { content: 'Awards', href: 'awards' },
      ],
    };
  }

  render() {
    const { tabs } = this.state;
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        id="sideNav"
      >
        <a className="navbar-brand" href="#page-top">
          <span className="d-block d-lg-none">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src={avatar}
              alt=""
              width="50px"
            />
          </span>
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src={avatar}
              alt=""
              width="90px"
            />
          </span>
        </a>
        <div className="navbar-collapse" id="navbarSupportedContent">
          <Scrollspy
            items={tabs.map(s => s.href)}
            currentClassName="active"
            offset={-300}
            className="navbar-nav"
          >
            {tabs.map((tab, i) => {
              const { href, content } = tab;
              return (
                <li className="nav-item" key={href}>
                  <Scroll type="id" element={href}>
                    <a className="nav-link" href={`#${href}`} target="_blanck">
                      {content}
                    </a>
                  </Scroll>
                </li>
              );
            })}
          </Scrollspy>
        </div>
      </nav>
    );
  }
}

export default Sidebar;
