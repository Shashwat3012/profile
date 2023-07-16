import React from 'react'

const Banner = () => {
  return (
    <section id='home' className='max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4'> 
        <h3 className='text-lg font-titleFont tracking-wide text-textGreen'>Hi my name is</h3>
        <h1 className='text-4xl lgl:text-6xl font-titleFont font-semiBold flex flex-col'>John Doe <span className='text-textDark mt-2 lgl:mt-4'>I build Web Apps</span> </h1>   
        <p className='text-base md:max-w-[650px] text-textDark font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi non vel repellat enim! Repudiandae voluptate cumque necessitatibus illum consectetur consequatur ipsum ullam officia laboriosam adipisci molestiae est, sit quam accusamus sed? Tempora neque fugiat sunt ad officiis ullam explicabo recusandae deleniti esse non, voluptatem deserunt placeat. Mollitia error quia laudantium autem fugiat dignissimos blanditiis odio sequi, temporibus odit laborum veritatis iusto, aliquam aut sed recusandae similique dolorem aperiam qui. <a href="#"> <span className='text-textGreen inline-flex  relative cursor-pointer h-7 overflow-x-hidden group'>Learn More <span className='absolute  w-full h-[1px] bg-textGreen left-0 bottom-1 translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500  '></span> </span> </a> </p>
        <button className='w-52 h-14  text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300'>Check out my profile</button>
    </section>
    
  )
}

export default Banner
