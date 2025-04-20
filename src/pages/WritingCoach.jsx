import React from 'react'
import Heroforall from '../components/heroforall'
import { writingCoach } from "../components/dummyData"
import Section from '../components/section'
import {faqArr} from '../components/dummyData'
import { TestimonialSlider } from '../TestimonialSlider'
import Faq from '../faq'
import KhanmigoPricing from '../khanmigoPricing'
import KhanmigoPromo from '../khanmigoPromo'

const WritingCoach = () => {
  return (
    <>
      <Heroforall
        heading="More writing practice, less <br/> cheating—with AI on your team."
        content="Khan Academy Writing Coach is now available for FREE <br/>  to teachers and their students!"
        btnText="Free teacher sign up"
        image="/assets/writingcoach.png"
        backgroundColor="#f4eee2"
      />
      <div className="content px-4">
      <h1 className='pt-5 text-center display-5 fw-semibold'>From start to revision: Writing Coach <br /> builds skills, not shortcuts.</h1>
      </div>
      {writingCoach?.length ? writingCoach.map((section, index) => {
        return (
          <Section key={index} heading={section.heading} detail={section.detail} image={section.image} right={section.right} />
        )
      }) : null}
      <KhanmigoPricing />
       <TestimonialSlider heading={"Khanmigo outshines all other AI chatbots."} para={"Trusted by 160 million learners, educators, and parents around the world for over 15 years."}/>
                  <h1 className='display-6 text-center my-5 pt-4 '>FAQ</h1>
                  {faqArr?.length ? faqArr.map((faq, index) => {
                      return <Faq key={index} question={faq.question} answer={faq.answer} eventKey={faq.eventKey} />
                  }) : null}

    </>
  )
}

export default WritingCoach