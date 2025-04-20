import React from 'react'
import HeroSection from "../herosection"
import Client from '../client';
import Section from '../components/section';
import { sectionArr } from '../components/dummyData';
import { faqArr } from '../components/dummyData';
import { TestimonialSlider } from "../TestimonialSlider"
import Faq from '../faq';

const Home = () => {
    return (
        <>
            <HeroSection />
            <Client />
            <h1 className='display-6 text-center mt-5 pt-4 fw-semibold'>On-demand AI-powered <br /> support for education.</h1>
            {sectionArr?.length ? sectionArr?.map((item, index) => {
                return <Section key={index} title={item.title} heading={item.heading} detail={item.detail} image={item.image} right={item.right} />
            }) : null}
            <TestimonialSlider heading={"Praise for Khanmigo"} />
            <h1 className='display-6 text-center my-5 pt-4 '>FAQ</h1>
            {faqArr?.length ? faqArr.map((faq, index) => {
                return <Faq key={index} question={faq.question} answer={faq.answer} eventKey={faq.eventKey} />
            }) : null}
        </>
    )
}

export default Home