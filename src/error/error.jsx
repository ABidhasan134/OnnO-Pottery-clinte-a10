import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div class=" xl:mt-24 bg-base-100 xl:mb-10">
        <div class=" xl:flex xl:justify-evenly grid justify-center gap-20 ">
        <img
            src="https://i.pinimg.com/736x/d9/00/6b/d9006bced22dcde87db0dd29364b0c16.jpg"
            class=" rounded-lg  xl:max-w-3xl w-auto xl:flex hidden "
          />
         <div className='bg-[#ECC9D8] grid justify-center p-10 xl:h-auto h-[100vh] xl:w-auto md:w-[100vh]'>
            <img src="https://img.freepik.com/premium-photo/coding-language-development-404-error-page-found-pink-background-bug-software-developer-concept-minimal-cartoon-sytle-3d-render-illustration-website-maintenance-programmer_598821-1378.jpg" alt="" />
            <h1 className='animate__animated animate__bounce font-bold sm:text-5xl text-2xl text-center mb-10'>Unable to find this page</h1>
            <Link to="/" className="btn bg-sky-400 border-none hover:bg-sky-600 mx-6">Go back to Home page</Link>
         </div>
          
        </div>
      </div>
  )
}

export default Error
