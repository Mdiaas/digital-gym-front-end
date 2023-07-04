import { Header } from '@/components/Header'
import Image from 'next/image'
import logo from "src/app/digital-gym.png" 
export default function Register() {
  return (
    <>
      <Header />
      <div className=' h-screen flex flex-col gap-4 justify-center items-center'>
          <div className="rounded-xl w-1/2 grid grid-cols-12 bg-orange-700 shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform">
            <div className="col-span-12 md:col-span-1">
            </div>
            <div className="col-span-11 xl:-ml-5">
              <p className="text-black font-semibold"> Aula de musculação </p>
            </div>
            <div className="md:col-start-2 col-span-11 xl:-ml-5">
              <p className="text-sm text-gray-200"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum qui necessitatibus fugit natus eum repellendus perferendis quis magni quas nisi voluptatum cumque commodi, architecto ut magnam amet pariatur accusantium id. </p>
            </div>
            <div className='col-span-12 text-end'>
              <button type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Assistir aula</button>
            </div>
          </div>
      </div>
    </>
  )
}
