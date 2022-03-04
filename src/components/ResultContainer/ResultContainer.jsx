import React from 'react'
import './ResultContainer.css'


const nameCheapUrl = 'https://namecheap.com/domains/registration/results/?domain='

function ResultContainer({result}) {
  return (

    result.length > 0 &&
    <div className="result-container">
        {
            result.map((ithResult)=>(
                <a href={`${nameCheapUrl}${ithResult}`} className="link" target="_blank">
                    <h2 className="results" key={ithResult}>{ithResult}</h2>
                </a>
            ))
        }
    </div>
  )
}

export default ResultContainer