import React from 'react'
import Heroforall from '../components/heroforall'
import { parentsSec } from "../components/dummyData"
import Section from '../components/section'
import {faqArr} from '../components/dummyData'
import { TestimonialSlider } from '../TestimonialSlider'
import Faq from '../faq'
import KhanmigoPromo from '../khanmigoPromo'
import KhanmigoPricing from '../khanmigoPricing'

const Parents = () => {
  return (
    <>
    <Heroforall
      subhead="For parents"
      heading="Meet your new parenting hack: <br/> Khanmigo, an AI-powered tutor."
      content="The best AI tool for learning is your 24/7 homework <br/> helper. Now just $4/month.*"
      btnText="Get Khanmigo"
      image="/assets/parents.png"
      backgroundColor="#fee7ad"
    />
    <div className="content px-4">
    <h1 className='pt-5 text-center display-5 mt-5 fw-semibold'>Experience the best AI-powered <br/> tool in education.</h1>
    </div>
    {parentsSec?.length ? parentsSec.map((section, index) => {
      return (
        <Section key={index} heading={section.heading} detail={section.detail} image={section.image} right={section.right} />
      )
    }) : null}
    <KhanmigoPromo />
    <KhanmigoPricing />
     <TestimonialSlider heading={"Khanmigo outshines all other AI chatbots."} para={"Trusted by 160 million learners, educators, and parents around the world for over 15 years."}/>
                <h1 className='display-6 text-center my-5 pt-4 fw-semibold '>FAQ</h1>
                {faqArr?.length ? faqArr.map((faq, index) => {
                    return <Faq key={index} question={faq.question} answer={faq.answer} eventKey={faq.eventKey} />
                }) : null}

  </>
  )
}

export default Parents