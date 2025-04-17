
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header'
import HeroSection from './herosection'
import Client from './client';
import Section from './components/section';
import { sectionArr } from './components/dummyData';
import {TestimonialSlider} from "./TestimonialSlider"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <HeroSection />
      <Client />
      <h1 className='display-6 text-center mt-5 pt-4'>On-demand AI-powered <br /> support for education.</h1>
      {sectionArr?.length ? sectionArr?.map((item, index) => {
        return <Section key={index} title={item.title} heading={item.heading} detail={item.detail} image={item.image} right={item.right} />
      }) : null}
       <TestimonialSlider />

      <br /><br /><br />
    </>
  )
}

export default App
