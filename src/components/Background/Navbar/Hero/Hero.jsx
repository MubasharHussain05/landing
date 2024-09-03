import './Hero.css'
import arrow_icon from '/src/assets/arrow_btn.png'
import play_icon  from '/src/assets/play_icon.png'
import pouse_icon  from '/src/assets/pause_icon.png'

export const Hero = ({setPlayStatus,heroData,heroCount,setHeroCount,playSatus}) => {
  return (
    <div className='hero'>
    <div  className='hero-text'>
      <p>{heroData.text1}</p>
      <p>{heroData.text2} </p>
    </div>
    <div className='hero-explore'>
      <p>Explore the feature</p>
      <img src={arrow_icon} alt='error' />
    </div>
    <div className='hero-dot-play'>
      <ul className='hero-dots'>
      <li onClick={()=>setHeroCount(0)} className={heroCount===0?"hero-dot orange":"hero-dot"}></li>
      <li onClick={()=>setHeroCount(1)}  className={heroCount===1?"hero-dot orange":"hero-dot"}></li>
      <li onClick={()=>setHeroCount(2)}  className={heroCount===2?"hero-dot orange":"hero-dot"}></li>

      </ul>
      <div className='hero-play'>
        <img onClick={()=>setPlayStatus(!playSatus)} src={playSatus?pouse_icon:play_icon}/>
      </div>
    </div>

    </div>
  )
}
