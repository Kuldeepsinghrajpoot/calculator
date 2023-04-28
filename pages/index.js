"use client"
import React, {useState } from 'react'
import Head from 'next/head';


export default function Home() {
  const [date, setDate] = useState(new Date());
  const [number, setNumber] = useState('');
  const [sum, setSum] = useState('');

function handleClick(e){
  // console.log("click");
  
  setNumber((number.concat(e.target.name)));
}
const calculateResult=()=>{
  setSum(eval(number).toString());

}
const clear=()=>{
 setSum("");
 setNumber("");
}

  return (
    <>
    <Head>
      <title>Calculator</title>
    </Head>
    <div className=" dark:bg-gray-800 w-screen fixed flex justify-center">
   Kuldeep Singh Rajpoot
 </div>
    <div className="bg-gray-200 w-screen h-screen flex justify-center items-center">
    <div className="w-64 h-auto bg-white rounded-2xl shadow-xl border-4 border-gray-100">
      <div className="w-auto mx-3 my-2 h-6 flex justify-between">
        <div className="text-sm">
          Calculator
          {/* {date.getHours() + ":" + date.getMinutes()} */}
        </div>
        <div className="flex items-center text-xs space-x-1">
          <i className="fas fa-signal"></i>
          <i className="fas fa-wifi"></i>
          <i className="fas fa-battery-three-quarters text-sm"></i>
        </div>
      </div>
      <div className="w-auto m-3 h-28 text-right space-y-2 py-2">
        <div className="text-gray-700">{number}</div>
        <div className="text-black font-bold text-3xl">{sum}</div>
      </div>
      <div className="w-auto m-1 h-auto mb-2">
        <div className="m-2 flex justify-between">
          <button onClick={clear} name='c' className="btn-yellow cursor-pointer" >C</button>
          <button onClick={handleClick} name=')' className="btn-grey cursor-pointer">(</button>
          <button onClick={handleClick} name='(' className="btn-grey cursor-pointer">)</button>
          <button onClick={handleClick} name='/' className="btn-orange cursor-pointer">/</button>
        </div>
        <div className="m-2 flex justify-between">
          <button onClick={handleClick} name="7" className="btn-grey cursor-pointer">7</button>
          <button onClick={handleClick} name="8" className="btn-grey cursor-pointer">8</button>
          <button onClick={handleClick} name="9" className="btn-grey cursor-pointer">9</button>
          <button onClick={handleClick} name="*" className="btn-orange cursor-pointer">x</button>
        </div>
        <div    className="m-2 flex justify-between">
          <button onClick={handleClick} name="4" className="btn-grey cursor-pointer">4</button>
          <button onClick={handleClick} name="5" className="btn-grey cursor-pointer">5</button>
          <button onClick={handleClick} name="6" className="btn-grey cursor-pointer">6</button>
          <button onClick={handleClick} name="-" className="btn-orange cursor-pointer">-</button>
        </div>
        <div className="m-2 flex justify-between">
      <button  name="1"className="btn-grey cursor-pointer" onClick={handleClick}>1</button>
          <button onClick={handleClick} name="2" className="btn-grey cursor-pointer">2</button>
          <button onClick={handleClick} name="3" className="btn-grey cursor-pointer">3</button>
          <button onClick={handleClick} name="+" className="btn-orange cursor-pointer">+</button>
        </div>
          <div className="m-2 flex justify-between">
          <button onClick={handleClick}  name='0' className="btn-grey-jumbo cursor-pointer">0</button>
          <div className="flex w-full ml-3 justify-between">
            <button onClick={handleClick} name='.'  className="btn-grey cursor-pointer">.</button>
            <button onClick={calculateResult} id='sum'  className="btn-green cursor-pointer">Ans</button>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <div className="w-20 h-1 bg-gray-100 rounded-l-xl rounded-r-xl"></div>
        </div>
      </div>
    </div>
    



  </div>
    </>
  )
}
