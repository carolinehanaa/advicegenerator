import React from 'react'
import dividerDesktop from '../images/pattern-divider-desktop.svg'
import dividerMobile from '../images/pattern-divider-mobile.svg'
import dice from '../images/icon-dice.svg'
import { FetchAdvice } from '../service/DataService'
import { useState, useEffect } from 'react'

function AdviceCard() {
    const [advice, setAdvice] = useState('');
    const [adviceNum, setAdviceNum] = useState('');

    async function adviceData() {
      const maxAdviceNum = 217; // Maximum number of advice slips available
      const randomAdviceNum = Math.floor(Math.random() * maxAdviceNum) + 1; // Generate a random number between 1 and maxAdviceNum
      let adviceFetch = await FetchAdvice(randomAdviceNum);
      console.log(adviceFetch);
  
      setAdvice(adviceFetch.slip.advice);
      setAdviceNum(adviceFetch.slip.id)
    }
  
    useEffect(() => {
      adviceData();
    }, []);


  return (
    <div>
        <div className='card'>
            <p>ADVICE #{adviceNum}</p>
            <h2>{advice}</h2>
            <img src={dividerDesktop} className='divider-desktop'  />
            <img src={dividerMobile} className='divider-mobile'  />
            <div className='dice'>
                <img onClick={adviceData} src={dice} alt='dice'/>
               
            </div>
        </div>
    </div>
  )
}

export default AdviceCard