import { MagnifyingGlassPlus } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';

export function AdBanner() {
  return (
    <div className="bg-[#2A2634] px-8 py-6 self-stretch mt-8 rounded-lg relative flex flex-col justify-between items-center sm:flex-row  before:absolute before:bg-nlw-gradient before:-top-1 before:left-0 before:w-full before:block before:h-4 before:rounded-lg before:-z-10">
      <div>
        <strong className="text-2xl text-white font-black block">
          Não encontrou o seu duo?
        </strong>
        <span className="text-zinc-400">
          Publique um anúncio para encontrar novos players!
        </span>
      </div>

      <Dialog.Trigger className="py-3 px-4 bg-violet-500 text-white rounded flex items-center gap-3 hover:bg-violet-600 mt-4 sm:mt-0">
        <MagnifyingGlassPlus size={24} />
        Publicar anúncio
      </Dialog.Trigger>
    </div>
  );
}
