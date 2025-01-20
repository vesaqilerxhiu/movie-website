import React from 'react'
import './plans.scss'
import plans from '../../data/plans.json'

function Plans() {
  return (
    <div className='plans-container'>
      <h1 className='plans-title'>Choose your plan</h1>
      <p>Find the perfect membership option that suits your movie-watching needs. Take a look at our carefully curated plans and pricing options below:</p>
      <div className='plans-layout'>
        {plans.map((plan) => (
          <div className='single-plan' key={plan.id}>
            <h2>{plan.name}</h2>
            <ul>
              {plan.features.map((feature, index) => (
                <li key={index}>&#10003; {feature}</li>
              ))}
            </ul>
            <h3>{plan.price} / month</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Plans
