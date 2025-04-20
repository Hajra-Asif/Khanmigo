import React from 'react'
import Heroforall from '../components/heroforall'
import { teacherSec } from "../components/dummyData"
import Section from '../components/section'
import {faqArr} from '../components/dummyData'
import { TestimonialSlider } from '../TestimonialSlider'
import Faq from '../faq'


const Teachers = () => {
  return (
    <>
      <Heroforall
        subhead="For teachers"
        heading="Meet Khanmigo: your free, AI-powered <br />teaching assistant"
        content="Spend less time on prep and more time with your students. <br /> Khanmigo is now completely, 100% free."
        btnText="Sign up for free"
        image="/assets/teachers.png"
        backgroundColor="#c8d9f8"
      />
      <div className="content px-4">
      <h1 className='pt-5 text-center display-5 fw-semibold'>Every innovator needs an assistant.</h1>
      <p className='text-center fs-5 pt-2'>Khanmigo generates high-quality progress reports and classroom activities that build on <br /> your expertise and help you clear your to-do list faster.</p>
      </div>
      {teacherSec?.length ? teacherSec.map((section, index) => {
        return (
          <Section key={index} heading={section.heading} detail={section.detail} image={section.image} right={section.right} />
        )
      }) : null}
       <TestimonialSlider heading={"Trailblaze the future of teaching with a nonprofit you trust."} para={"Trusted by 160 million learners, educators, and parents around the world for over 15 years."}/>
                  <h1 className='display-6 text-center my-5 pt-4 '>FAQ</h1>
                  {faqArr?.length ? faqArr.map((faq, index) => {
                      return <Faq key={index} question={faq.question} answer={faq.answer} eventKey={faq.eventKey} />
                  }) : null}

    </>
  )
}

export default Teachers