import logoImg from './assets/Logo.svg';
import { useEffect, useState } from 'react';
import { GameBanner } from './components/GameBanner';
import { AdBanner } from './components/AdBanner';
import * as Dialog from '@radix-ui/react-dialog';
import { AdModal } from './components/AdModal';

import { useGames } from './hooks/useGames';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

export function Home() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    async function getGames() {
      const gamesFetched = await useGames();
      setGames(gamesFetched);
    }

    getGames();
  }, []);

  return (
    <div className="flex flex-col items-center mx-auto my-20 max-w-[1344px] px-4">
      <img src={logoImg} alt="" />
      <h1 className="text-5xl text-white font-black mt-20 sm:text-6xl">
        Seu{' '}
        <span className="bg-nlw-gradient bg-clip-text text-transparent">
          duo
        </span>{' '}
        está aqui.
      </h1>

      <div className="grid grid-cols-2 gap-6 mt-16 sm:grid-cols-4 lg:grid-cols-6">
        {games.map((game) => (
          <GameBanner
            key={game.id}
            title={game.title}
            bannerUrl={game.bannerUrl}
            adsCount={game._count.ads}
          />
        ))}
      </div>

      <Dialog.Root>
        <AdBanner />

        <AdModal />
      </Dialog.Root>
    </div>
  );
}
