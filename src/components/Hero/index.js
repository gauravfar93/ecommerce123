import React from 'react'

const Hero = () => {
  return (
    <section className="text-gray-600 body-font mt-20">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Hello
        <br className="hidden lg:inline-block"/>What would you like to buy?
      </h1>
      <p className="mb-8 leading-relaxed">Search between millions of products from hundreds different online shops. Our price comparison service helps you find the best deal on the market.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Explore</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Buy now</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
      <img className="object-cover object-center rounded " alt="hero" src="https://images.squarespace-cdn.com/content/v1/5b48c29f9f8770367788f244/1611582700101-JMIIX69SHSXK1X96XE91/ke17ZwdGBToddI8pDm48kHKmDLrMZO7HHpcyjMqbzOMUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcBVek0a0L5ZzZO5sIOvWwrqKYA-dXl4sYwgdPtOa0B174TByWOce_SwawEQNsQ9Qi/ecommerce+marketing+strategy"/>
    </div>
  </div>
</section>
  )
}

export default Hero
