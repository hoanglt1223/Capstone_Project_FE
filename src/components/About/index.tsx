import React, { useState } from 'react'
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap'
import styles from './about.module.scss'
const mockItems = [
  {
    src: 'https://www.w3schools.com/howto/img_avatar2.png',
    description: 'This is about me 1'
  },
  {
    src: 'https://www.w3schools.com/howto/img_avatar.png',
    description: 'This is about me 2'
  },
  {
    src: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
    description: 'This is about me 3'
  }
]

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === mockItems.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? mockItems.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  function goToIndex(newIndex: number) {
    if (animating) return
    setActiveIndex(newIndex)
  }

  const slides = mockItems.map(item => {
    return (
      <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.src}>
        <div className={styles.avatar}>
          <img src={item.src} alt={item.src} />
        </div>
        <div className={styles.description}>
          <p>{item.description}</p>
        </div>
      </CarouselItem>
    )
  })

  return (
    <div className={styles.container}>
      <Carousel interval={false} autoPlay={false} activeIndex={activeIndex} next={next} previous={previous}>
        {slides}
        <CarouselControl
          className={styles.arrowLeft}
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl className={styles.arrowRight} direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>
  )
}

export default About
