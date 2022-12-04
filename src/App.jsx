import React from 'react'
import qr from './assets/images/image-qr-code.png'


const App = () => {
  return (
    <main className='bg-blue-50 flex justify-center items-center min-h-screen pl-10 pr-10'>
        <section className='bg-white w-[400px]  rounded-lg p-5'>
            <img className=' rounded-lg ' src={qr} alt="" />
            <p className=' mt-5 text-xl text-blue-900 text-center  '>Imporvide your front-end skills by building projects</p>
            <p className='mt-5 mb-5  text-base text-gray-400 text-center  '>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </section>
    </main>
  )
}

export default App 