import React from 'react'
import Heroforall from '../components/heroforall'
import { learnerSec } from "../components/dummyData"
import Section from '../components/section'
import {faqArr} from '../components/dummyData'
import { TestimonialSlider } from '../TestimonialSlider'
import Faq from '../faq'
import KhanmigoPricing from '../khanmigoPricing'
import KhanmigoPromo from '../khanmigoPromo'

const Learners = () => {
  
    return (
      <>
        <Heroforall
          subhead="For learners"
          heading="Discover a new way to learn,<br />powered by AI."
          content="Khanmigo is your always-available tutor on  just about every topic. Now just $4/month.*"
          btnText="Get Khanmigo"
          image="/assets/learners.png"
          backgroundColor="#f6ddff"
        />
        <div className="content px-4">
        <h1 className='pt-5 text-center display-5 fw-semibold'>Experience the best AI-powered <br/> tool in education.</h1>
        </div>
        {learnerSec?.length ? learnerSec.map((section, index) => {
          return (
            <Section key={index} heading={section.heading} detail={section.detail} image={section.image} right={section.right} />
          )
        }) : null}
        <KhanmigoPromo />
        <KhanmigoPricing />
         <TestimonialSlider heading={"Khanmigo outshines all other AI chatbots."} para={"Trusted by 160 million learners, educators, and parents around the world for over 15 years."}/>
                    <h1 className='display-6 text-center my-5 pt-4 '>FAQ</h1>
                    {faqArr?.length ? faqArr.map((faq, index) => {
                        return <Faq key={index} question={faq.question} answer={faq.answer} eventKey={faq.eventKey} />
                    }) : null}
  
      </>
    )
  
}

export default Learners