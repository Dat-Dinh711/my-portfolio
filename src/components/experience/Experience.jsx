import React from 'react'
import {BsFillPatchCheckFill} from 'react-icons/bs'

import './experience.css'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experiences</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Javascipt</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>UI/UX Design</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>ReactJS</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>NodeJS (ExpressJS)</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>SQL Server</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience