import React, { Component } from 'react';
import dataContext from '../dataContext';

class Resume extends Component {
  render() {
    const { resume } = this.context;

    if(resume){
      var skillmessage = resume.skillmessage;
      var education = resume.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = resume.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p className="newline">{work.description}</p>
        </div>
      })
      var skills = resume.skills.map((skill) => {
      var projectImage = 'images/tech/'+skill.image;
        return <div key={skill.name} className="columns feature-item">
                  <img className='skill' alt={skill.name} src={projectImage} />
                  <h5>{skill.name}</h5>
                  <p>{skill.description}</p>
               </div>
      })
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {education}
              </div>
            </div>
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
            {work}
          </div>
        </div>
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Favorite Tech</span></h1>
          </div>
          <div>
            <div className="nine columns main-col"><p className="lead center">{skillmessage}</p></div>
			  <ul className="bgrid-quarters s-bgrid-halves cf">
			    {skills}
			  </ul>
		  </div>
        </div>
      </section>
    );
  }
}

Resume.contextType = dataContext;

export default Resume;
