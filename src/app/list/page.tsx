import { Header } from '@/components/Header'
import Image from 'next/image'
import logo from "src/app/digital-gym.png" 
export default function Register() {
  return (
    <>
      <Header />
      <main className='h-screen'>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="text-center text-sm font-light">
                  <thead
                    className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                    <tr>
                      <th scope="col" className=" px-6 py-4">Aula</th>
                      <th scope="col" className=" px-6 py-4">#</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap  px-6 py-4 font-medium">Musculação</td>
                      <td className="whitespace-nowrap  px-6 py-4">
                        <button>Assistir aula</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
