import React from 'react'
import circle from './circle.png'
import cross from './icons8-cross-64 (1).png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
let box = ["","","","","","","","",""];
const Play = () => {
    const navigate = useNavigate();
    let [chance,setChance] = useState(0);
    let [win,setWin] = useState(0);
    let [winner,setWinner] = useState('');
    let titleRef = useRef(null);
    const turn = (e,key)=>{
        console.log("Clicked");
        console.log(chance);
        console.log(e);
        if(win){
            return 0;
        }
        if(chance%2===0){
            titleRef.current.innerHTML = `<img src=${cross}>'s Turn`
            e.target.innerHTML = `<img src='${circle}'>`
            box[key]="o";
            setChance(chance+1);
        }
        else if(chance%2!==0){
            titleRef.current.innerHTML = `<img src=${circle}>'s Turn`
            e.target.innerHTML = `<img src =${cross}>`
            box[key]="x";
            setChance(chance+1);
        }
        check();
    }
    const check=()=>{
        if(box[0]===box[1] && box[1]===box[2] && box[1]!==""){
            finish(box[1]);
        }
        else if(box[3]===box[4] && box[4]===box[5]&& box[4]!==""){
            finish(box[4]);
            
        }
        else if(box[6]===box[7] && box[7]===box[8]&& box[7]!==""){
            finish(box[7]);
            
        }
        else if(box[0]===box[3] && box[3]===box[6]&& box[3]!==""){
            finish(box[3]);
            
        }
        else if(box[1]===box[4] && box[4]===box[7]&& box[4]!==""){
            finish(box[4]);
            
        }
        else if(box[2]===box[5] && box[5]===box[8]&& box[5]!==""){
            finish(box[5]);
            
        }
        else if(box[0]===box[4] && box[4]===box[8]&& box[4]!==""){
            finish(box[4]);
            
        }
        else if(box[2]===box[4] && box[4]===box[6]&& box[4]!==""){
            finish(box[4]);

        }
        else if(win===0 && box[0]!=="" && box[1]!=="" && box[2]!=="" && box[3]!=="" && box[4]!=="" && box[5]!=="" && box[6]!=="" && box[7]!=="" && box[8]!=="" )
        {
            draw(box[0]);
        }
    }
    const finish = (box)=>{
        console.log("WON");
        setWin(1);
        if(box==="x"){
            titleRef.current.innerHTML = `Congratulations! <img src=${cross}> Won `
        }
        if(box==="o"){
            titleRef.current.innerHTML = `Congratulations! <img src=${circle}> Won `
        }
        
    }
    const draw = (box)=>{
        titleRef.current.innerHTML = `Draw Between <img src=${cross}> and <img src=${circle}> `

    }
  return (
    <div className='play'>
        <div className='title'>
            <h1>Enjoy The  <span className='orange'>Tic</span> <span className='white'>Tac</span> <span className='green'>Toe</span> Game</h1>
        </div>
        <div className='board'>
        <div className='row1'>
            <div className='box' onClick={(e)=>{turn(e,0)}}></div>
            <div className='box' onClick={(e)=>{turn(e,1)}}></div>
            <div className='box' onClick={(e)=>{turn(e,2)}}></div>
        </div>
        <div className='row2'>
            <div className='box' onClick={(e)=>{turn(e,3)}}></div>
            <div className='box' onClick={(e)=>{turn(e,4)}}></div>
            <div className='box' onClick={(e)=>{turn(e,5)}}></div>
        </div>
        <div className='row3'>
            <div className='box' onClick={(e)=>{turn(e,6)}}></div>
            <div className='box' onClick={(e)=>{turn(e,7)}}></div>
            <div className='box' onClick={(e)=>{turn(e,8)}}></div>
        </div>
        </div>
        <div className='wins'>
            
            <h1 ref={titleRef} className='congrats'>
                </h1></div>
                <div>
        <button className='tryagain' onClick={()=>{
        window.location.reload();
    }}>Try Again</button>
    <button className='tryagain btn2' onClick={()=>{
        navigate('/');
    }}>Go Back</button>
        </div>
    </div>
  )
}

export default Play