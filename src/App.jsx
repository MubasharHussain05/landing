
import { useEffect, useState } from 'react'
import './App.css'
import { Background } from './components/Background/Background'
import { Navbar } from './components/Background/Navbar/Navbar'
import { Hero } from './components/Background/Navbar/Hero/Hero'

function App() {
  let heroData=[
    {text1:"Drive into",text2:"What You Love"},
    {text1:"Indulge",text2:"Your Passion"},
    {text1:"Give into",text2:"your passion"}
  ]
  const [heroCount,setHeroCount]=useState(0)

  const [playSatus,setPlayStatus]=useState(false)

  useEffect(()=>{
    setInterval(() => {
      setHeroCount((count)=>{return count===2?0:count+1})
      
    }, 3000);
  },[])
  

  return (
    <>
      <Background playStatus={playSatus} heroCount={heroCount}/>
      <Navbar/>
      <Hero setPlayStatus={setPlayStatus}
      heroData={heroData[heroCount]}
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      playSatus={playSatus} />
    </>
  )
}

export default App
