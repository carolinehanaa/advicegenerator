import React from 'react'
import dividerDesktop from '../images/pattern-divider-desktop.svg'
import dividerMobile from '../images/pattern-divider-mobile.svg'
import dice from '../images/icon-dice.svg'
import { FetchAdvice } from '../service/DataService'
import { useState } from 'react'

function AdviceCard() {
    const [advice, setAdvice] = useState('');
    const [adviceNum, setAdviceNum] = useState('');

    async function adviceData(){
    let adviceFetch = await FetchAdvice();
    console.log(adviceFetch);

    setAdvice(adviceFetch.slip.advice);
    setAdviceNum(adviceFetch.slip.id)
}
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