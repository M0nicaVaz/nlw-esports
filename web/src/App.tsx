import logoImg from './assets/Logo.svg';
import { MagnifyingGlassPlus } from 'phosphor-react';

export function App() {
  return (
    <div className="flex flex-col items-center mx-auto my-20 max-w-[1344px] px-4">
      <img src={logoImg} alt="" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu{' '}
        <span className="bg-nlw-gradient bg-clip-text text-transparent">
          duo
        </span>{' '}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game1.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              League of Legends
            </strong>
            <span className="text-zinc-300 text-sm ">4 anúncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game2.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0 ">
            <strong className="font-bold text-white block">DOTA 2 </strong>
            <span className="text-zinc-300 text-sm ">4 anúncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game3.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0 ">
            <strong className="font-bold text-white block">CS:GO </strong>
            <span className="text-zinc-300 text-sm ">4 anúncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game4.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0 ">
            <strong className="font-bold text-white block">APEX Legends</strong>
            <span className="text-zinc-300 text-sm ">4 anúncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game5.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0 ">
            <strong className="font-bold text-white block">Fortnite </strong>
            <span className="text-zinc-300 text-sm ">4 anúncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game6.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0 ">
            <strong className="font-bold text-white block">
              World of Warcraft
            </strong>
            <span className="text-zinc-300 text-sm ">4 anúncios</span>
          </div>
        </a>
      </div>

      <div className="bg-[#2A2634] px-8 py-6 self-stretch mt-8 rounded-lg relative flex justify-between items-center before:absolute before:bg-nlw-gradient before:-top-1 before:left-0 before:w-full before:block before:h-4 before:rounded-lg before:-z-10">
        <div>
          <strong className="text-2xl text-white font-black block">
            Não encontrou o seu duo?
          </strong>
          <span className="text-zinc-400">
            Publique um anúncio para encontrar novos players!
          </span>
        </div>

        <button className="py-3 px-4 bg-violet-500 text-white rounded flex items-center gap-3 hover:bg-violet-600">
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </button>
      </div>
    </div>
  );
}
