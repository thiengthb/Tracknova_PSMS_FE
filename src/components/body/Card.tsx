import React from 'react'

interface Props {
    img: {
        src: string,
        alt: string
    }
    child: React.ReactNode
    imgBg?: string
    imgRound?: string
}

/*
    The general card template consist of 2 part:
        + The img div which need an img src, the image background color and and rounded radius
        + The child div which is sub component of the card
    Correctly use Card component:
      + First: create the card child which contains the main content
      + Seconde: add the created child to the Card's prop
*/ 
function Card({img, child, imgBg, imgRound}:Props) {
    const imgClass = ` p-[20px] ${imgRound} ${imgBg}`

  return (
    <div className="card flex rounded-[15px] border-1 border-[#858390] w-[376px] h-[80px]">
      <div className= {imgClass}>
        <img src= {img.src} alt= {img.alt} />
      </div>
      <div className=" px-[10px] card-content grow flex items-center">
        {child}
      </div>
    </div>
  )
}

export default Card
