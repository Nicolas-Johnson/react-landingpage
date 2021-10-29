import React, { Component } from 'react';
import dataContext from '../dataContext';
import { animateScroll as scroll } from 'react-scroll';

class Footer extends Component {
  handleScroll = (to) => {
    scroll.scrollTo(to);
  };
  render() {
    const { main } = this.context;
    

    if(main){
      var name = main.name;
      var website = main.website;
      var networks= main.social.map((network) => {
        return <li key={network.name}><a rel='noreferrer' target="_blank" href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              {networks}
            </ul>
            <ul className="copyright">
              <li>&copy; Copyright 2017 <a title={ name } href={ website }>{ name }</a></li>
              <li>Design by <a title="Styleshout" rel='noreferrer' target="_blank" href="http://www.styleshout.com/">Styleshout</a></li>
            </ul>
          </div>
          <div id="go-top"><a title="Back to Top" href="#home"><i className="icon-up-open" onClick={() => this.handleScroll(0)}></i></a></div>
        </div>
      </footer>
    );
  }
}

Footer.contextType = dataContext;

export default Footer;
