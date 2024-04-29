import React from 'react'
import Bannar from './components/bannar'
import Card from './components/cards'

const Home = () => {
  return (
    <div>
      <Bannar></Bannar>
      <div className=" relative -top-12 md:top-0 sm:-top-16 lg:top-3  text-center">
      <h1 className="text-3xl font-bold lg:p-6 sm:p-2 p-1">Find your Dream property</h1>
      <p className="pb-6 lg:p-6 sm:p-2 p-1">We understand that finding the perfect property is more than just a transaction. <br />
       It's about discovering a place where memories are made and dreams are realized.</p>
      </div>
      <Card></Card>
    </div>

  )
}

export default Home
