import React, { Component } from 'react';
import dataContext from '../dataContext';

class About extends Component {
  render() {
    const { main } = this.context;
    if(main){
      var name = main.name;
      var profilepic= "images/"+main.image;
      var bio = main.bio;
      var city = main.address.city;
      var state = main.address.state;
      var zip = main.address.zip;
      var phone= main.phone;
      var email = main.email;
      var resumeDownload = main.resumedownload;
    }

    return (
        <section id="about">
        <div className="row">
            <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Nicolas Johnson Profile Pic" />
            </div>
            <div className="nine columns main-col">
            <h2>About Me</h2>

                <p>{bio}</p>
                <div className="row">
                <div className="columns contact-details">
                    <h2>Contact Details</h2>
                    <p className="address">
                    <span>{ name }</span><br />
                    <span>{ city }<br />
                        { state }, { zip }
                    </span><br />
                    <span>{phone}</span><br />
                    <span><a href={`mailto: ${ email }`}>{ email }</a></span>
                    </p>
                </div>
                <div className="columns download">
                    <p>
                    <a href={ resumeDownload } className="button" target="blank">
                        <i className="fa fa-download"></i>Download Resume
                    </a>
                    </p>
                </div>
                </div>
            </div>
        </div>
        </section>
    );
  }
}

About.contextType = dataContext;

export default About;
