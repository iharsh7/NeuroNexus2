import React from 'react'
import circle from './circle.png'
import cross from './icons8-cross-64 (1).png'
import {useTypewriter, Cursor} from 'react-simple-typewriter';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate()
    const [typeEffect] = useTypewriter({
        words: ["TIC-TAC-TOE"],
        loop:{},
        typeSpeed: 410,
        delaySpeed: 190
       })
  return (
    <div className='home'>
         <h1 className='hometitle'>
            WELCOME TO GAME OF
            <span> </span>
            <span className='type'>
                {typeEffect}
            </span>
            <span> </span>
            
             
        </h1>
        <div>
            <button onClick={()=>{
                navigate('/play')
            }} className='btn'>Play Game</button>
        </div>
    </div>
  )
}

export default Home