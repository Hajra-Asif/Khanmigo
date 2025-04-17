import React from 'react'
import theWall from './assets/theWalllogo.svg'
import commonSense from './assets/commonsense.svg'
import washington from './assets/washington.svg'


const Client = () => {

    let clientArr = [
        { img : theWall , tagline : "“Forget ChatGPT. These are the best AI-powered apps.”" },
        { img : commonSense , tagline : "Khanmigo receives an overall 4-star rating making it a top-rated AI-for-education tool." },
        { img : washington , tagline : "“One teacher said she noticed students posing more questions to Khanmigo than they might typically ask.”" }
    ]

  return (
   <>
   <div className='d-flex justify-content-between gap-3 align-items-start mt-5 flex-column flex-lg-row '>
   {
    clientArr.map((client, index) => (
        <div key={index} className="client d-flex flex-column gap-3 text-center align-items-center justify-content-center">
            <img src={client.img} alt="client" className='w-50' />
            <cite className='w-75' >{client.tagline}</cite>
        </div>
    ))
   }
  </div>
   </>
  )
}

export default Client