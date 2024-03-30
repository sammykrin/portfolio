import React from 'react';
import './index.css';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faReact, faJsSquare, faPython, faHtml5, faCss3, faGithub, faAngular, faNodeJs, faGitAlt, faBootstrap } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <section className="container">
       <div id="skills">
            <span className="skillTitle">About Me</span>
             <span className="skillDesc">I am an innovative front-end developer with solid years of experience 
                    building and maintaining responsive websites and apps in collaborative 
                    enivroments with passion for teamwork and results.<br/>
                    I'm quietly confident, naturally curious and perpetually working on
                     improving my chops one design problem at a time.<br/>
                     If i need to define myself in one sentence that would be a family
                     person, tech-obsessed, joval,
                     video-gamer & dog lover!!! 
             </span>
       </div>

       
       <span className="skillbartitle">Stack and Tools</span>
       <div className="skillBars">
        <div className="skillBar">
                <FontAwesomeIcon icon={faJsSquare} color="#efd81d" className="skillbarfa"/> 
                <span id="skillBarItems">JavaScript</span>
            </div>

             <div className="skillBar">
                <FontAwesomeIcon icon={faPython} color="#28a4d9" className="skillbarfa"/>
                <span id="skillBarItems">Python</span>

            </div>

             <div className="skillBar">
                <FontAwesomeIcon icon={faReact} color="#5ed4f4" className="skillbarfa"/>
                <span id="skillBarItems">React</span>
            </div>

             <div className="skillBar">
                <FontAwesomeIcon icon={faReact} color="#5ed4f4" className="skillbarfa"/>
                <span id="skillBarItems">React Native</span>
            </div>

            <div className="skillBar">
                <FontAwesomeIcon icon={faHtml5} color="#f06529" className="skillbarfa" />
                <span id="skillBarItems">HTML</span>
            </div>

            <div className="skillBar">
                <FontAwesomeIcon icon={faCss3} color="#28a4d9" className="skillbarfa"/>
                <span id="skillBarItems">CSS</span>
            </div>

             <div className="skillBar">
                <FontAwesomeIcon icon={faGithub} color="#ec4d28" className="skillbarfa" />
                <span id="skillBarItems">Github</span>
            </div>

             <div className="skillBar">
                <FontAwesomeIcon icon={faAngular} color="#dd0031" className="skillbarfa" />
                <span id="skillBarItems">Angular</span>
            </div>

             <div className="skillBar">
                <FontAwesomeIcon icon={faNodeJs} color="#5ed4f4" className="skillbarfa" />
                <span id="skillBarItems">NodeJs</span>
            </div>

             <div className="skillBar">
                <FontAwesomeIcon icon={faGitAlt} color="#dd0031" className="skillbarfa" />
                <span id="skillBarItems">Git</span>
            </div>

             <div className="skillBar">
                <FontAwesomeIcon icon={faBootstrap} color="#efd81d" className="skillbarfa" />
                <span id="skillBarItems">Bootstrap</span>
            </div>
        </div>
    </section>
  );
}

export default About
