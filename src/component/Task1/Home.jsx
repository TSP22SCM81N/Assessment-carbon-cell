import React from 'react'
import PopulationGraph from '../Task2/PopulationGraph'
import '../Task2/PopulationGraph.css'
import CryptoPrices from '../Task3/CryptoPrices'
import '../Task3/CryptoPrices.css'
import MetaMaskIntegration from '../Task4/MetaMaskIntegration'
import '../Task4/MetaMaskIntegration.css'

const Home = () => {
  return (
    <div>
      <MetaMaskIntegration/>
      <PopulationGraph/>
      <CryptoPrices/>
      
    </div>
  )
}

export default Home