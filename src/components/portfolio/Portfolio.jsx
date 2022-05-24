import React from 'react'

import './portfolio.css'
import DeliveFoodImage from '../../assets/DeliveFood_Image.png'
import KyotoRestaurantImage from '../../assets/KyotoRestaurant_Image.png'
import FlappyBirdImage from '../../assets/FlappyBird_Image2.png'

const data = [
  {
    id: 1,
    image: DeliveFoodImage,
    title: 'Website supports purchases DeliveFood',
    github: 'https://github.com/Dat-Dinh711/UIT_DeliveFood',
    demo: 'https://dat-dinh711.github.io/DeliveFood/',
  },
  {
    id: 2,
    image: KyotoRestaurantImage,
    title: 'Japanese cuisine website Kyoto Restaurant',
    github: 'https://drive.google.com/drive/folders/1H0yZ2xmzl29K0Yev5Lyij1hCwIQ_0POF',
    demo: '',
  },
  {
    id: 3,
    image: FlappyBirdImage,
    title: 'Website simulation game Flappy Bird',
    github: 'https://github.com/Dat-Dinh711/Flappy_Bird',
    demo: 'https://flappy-bird-by-dat.surge.sh/',
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {
          data.map(item => {
            return (
              <article key={item.id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={item.image} alt={item.title} />
                </div>

                <h3>{item.title}</h3>

                <div className="portfolio__item-buttons">
                  <a href={item.github} className="btn" target='_blank'>
                    Github
                  </a>
                  <a href={item.demo} className="btn btn-primary" target='_blank'>
                    Live Demo
                  </a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio