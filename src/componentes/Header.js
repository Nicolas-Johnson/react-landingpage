import React, { /*Component*/ } from "react";
import dataContext from '../dataContext';
import { animateScroll as scroll } from 'react-scroll';

class Header extends React.Component {
  handleScroll = (to) => {
    scroll.scrollTo(to);
  };
  render() {
    const { main } = this.context;
    if (main) {
      var name = main.name;
      var occupation = main.occupation;
      var description = main.description;
      // var jobDescription = main.jobDescription;
      // var employer = main.employer;
      var city = main.address.city;
      var networks = main.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url} rel='noreferrer' target="_blank">
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li>
              <a className="current" href="#home" onClick={() => this.handleScroll(0)}>
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about" onClick={() => this.handleScroll(950)}>
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume" onClick={() => this.handleScroll(1495)}>
                Resume
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio" onClick={() => this.handleScroll(8340)}>
                Works
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">I'm {name}.</h1>
            <h3>
              I'm a <span>{occupation}</span> based in <span>{city}</span>,
              <span> {description}</span>.
            </h3>
            <hr />
            <ul className="social">{networks}</ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle" onClick={() => this.handleScroll(950)}></i>
          </a>
        </p>
      </header>
    );
  }
}

Header.contextType = dataContext;

export default Header;
