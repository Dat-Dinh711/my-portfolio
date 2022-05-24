import React from 'react'
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './testimonials.css'
import Avatar1 from '../../assets/avatar1.jpg'
import Avatar2 from '../../assets/avatar2.png'
import Avatar3 from '../../assets/avatar3.jpg'
import Avatar4 from '../../assets/avatar4.jpg'

const data = [
  {
    id: 1,
    avatar: Avatar1,
    name: 'Nguyễn Hà Đoan Trang',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex maiores cum eius sit aspernatur dolorem dolorum, alias laudantium hic numquam consequatur enim porro accusantium repudiandae eum quibusdam cupiditate sed tempora!'
  },
  {
    id: 2,
    avatar: Avatar2,
    name: 'Nguyệt Cát',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex maiores cum eius sit aspernatur dolorem dolorum, alias laudantium hic numquam consequatur enim porro accusantium repudiandae eum quibusdam cupiditate sed tempora!'
  },
  {
    id: 3,
    avatar: Avatar3,
    name: 'Hiểu Vân',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex maiores cum eius sit aspernatur dolorem dolorum, alias laudantium hic numquam consequatur enim porro accusantium repudiandae eum quibusdam cupiditate sed tempora!'
  },
  {
    id: 4,
    avatar: Avatar4,
    name: 'Băng Tâm',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex maiores cum eius sit aspernatur dolorem dolorum, alias laudantium hic numquam consequatur enim porro accusantium repudiandae eum quibusdam cupiditate sed tempora!'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(item => {
            return (
              <SwiperSlide key={item.id} className="testimonial">
                <div className="client__avatar">
                  <img src={item.avatar} alt={item.name} />
                </div>
                <h5 className="client__name">{item.name}</h5>
                <small className="client__review">{item.review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials