import React from 'react';
import { FaAward } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';
import { VscFolderLibrary } from 'react-icons/vsc';

import './about.css';
import ME from '../../assets/avatar-about.jpg';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 Year Working</small>
            </article>

            <article className="about__card">
              <GiSkills className="about__icon" />
              <h5>Skills</h5>
              <small>
                HTML, CSS, Javascipt, NodeJS, MongoDB, PostgreSql, AWS, Azure
                Devops
              </small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>3 Completed Projects</small>
            </article>
          </div>

          <p>
            I am a happy, sociable person. A young Software Engineer with full
            of passion, enthusiasm. I have experience working on team projects
            to develop websites at school. Thereby I understand how to use
            programing languages and technologies to develop an application. I
            am interested in learning a new programing language or technology to
            increase the quality of work. Hope I can contribute to the general
            development of the company.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
