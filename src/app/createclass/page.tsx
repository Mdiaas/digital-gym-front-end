import { Header } from '@/components/Header'
import Image from 'next/image'
import logo from "src/app/digital-gym.png" 
export default function Register() {
  return (
    <>
      <Header />
      <main className='h-screen'>
        <div className="h-full">
          <div
            className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div
              className="shrink-1 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                <Image src={logo} className= 'mx-auto' alt="logotype"></Image>
            </div>
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12 border-l-4 border-orange-700 pl-4">
              <form>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <label
                    htmlFor="name"
                    className="dark:text-neutral-200 dark:peer-focus:text-primary"
                    >Nome da aula
                  </label>
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-25 data-[te-input-state-active]:placeholder:opacity-25 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-25"
                    id="name"
                    placeholder="Exemplo: Musculação" />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <label
                    htmlFor="documentNumber"
                    className="dark:text-neutral-200 dark:peer-focus:text-primary"
                    >URL do vídeo
                  </label>
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-25 data-[te-input-state-active]:placeholder:opacity-25 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-25"
                    id="documentNumber"
                    placeholder="vimeo.com/url-video" />
                </div>
                <div className="text-center lg:text-left">
                  <button
                    type="button"
                    className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#ff7b00] transition duration-300 ease-in-out hover:bg-orange-700"
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    Criar aula
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
    
  )
}
