import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGames } from './hooks/useGames';
import logoImg from './assets/Logo.svg';
import axios from 'axios';
import { ArrowLeft, CopySimple, DiscordLogo } from 'phosphor-react';
import CopyToClipboard from 'react-copy-to-clipboard';

import { ToastContainer, toast } from 'react-toastify';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

interface Ad {
  id: string;
  name: string;
  weekDays: string;
  useVoiceChannel: boolean;
  yearsPlaying: number;
  hourStart: number;
  hourEnd: number;
}

interface Discord {
  tag: string;
  id: string;
}

export function GameDetail() {
  const { slug } = useParams();
  const [game, setGame] = useState<Game>();
  const [ads, setAds] = useState<Ad[]>([]);
  const [discord, setDiscord] = useState<Discord>();

  function notifyCopied() {
    toast('Copiado. Bom jogo!', {
      hideProgressBar: true,
      autoClose: 1000,
      theme: 'dark',
    });
  }

  function getTitle() {
    if (slug != undefined) {
      const gameTitle = slug.split('-').join(' ');
      return gameTitle;
    } else {
      return null;
    }
  }

  async function handleDiscord(adId: string) {
    const { data } = await axios.get(
      `http://192.168.15.8:3333/ads/${adId}/discord`
    );

    setDiscord({ tag: data.discord, id: adId });
  }

  useEffect(() => {
    async function getGames() {
      const gamesFetched = await useGames();
      const gameTitle = getTitle();

      const game = gamesFetched.find((game: Game) => game.title === gameTitle);

      setGame(game);

      const { data: ads } = await axios.get(
        `http://192.168.15.8:3333/games/${game.id}/ads`
      );

      setAds(ads);
    }

    getGames();
  }, []);

  return (
    <div className="flex flex-col items-center mx-auto my-20 max-w-[1344px] px-4">
      <div className="flex justify-between w-full">
        <Link
          to="/"
          className="text-zinc-100 font-bold flex gap-2 items-center"
        >
          <ArrowLeft size={16} />
          Voltar
        </Link>

        <img src={logoImg} className="w-20 md:w-28" />
      </div>

      <div className="w-full flex items-center mt-10 gap-10 flex-wrap md:flex-nowrap md:px-20">
        <img
          src={game?.bannerUrl}
          alt=""
          className="w-48 md:w-80 rounded mx-auto"
        />

        <div className="flex-1 flex flex-col">
          <strong className="text-white text-2xl capitalize font-semibold block mx-auto">
            {game?.title}
          </strong>
          <span className="text-zinc-200 text-xl mx-auto">
            {game?._count.ads} anúncios
          </span>

          <div className="flex flex-wrap gap-4 mt-16 h-64 overflow-auto relative py-6 justify-center">
            {ads.map((ad) => (
              <div
                key={ad.id}
                className="bg-zinc-900/80 py-6 px-4  text-white rounded-lg w-64 shadow-lg shadow-black/25 h-60 flex flex-col gap-2 relative before:absolute before:bg-nlw-gradient before:top-0 before:left-0 before:w-full before:block before:h-1 before:rounded-lg before:rounded-br-none before:rounded-bl-none before:z-10 "
              >
                <div>
                  <strong className="">Nick: </strong>
                  <span>{ad.name} </span>
                </div>

                <div>
                  <strong>Chat de voz: </strong>
                  <span
                    className={
                      ad.useVoiceChannel ? 'text-emerald-400' : 'text-red-400'
                    }
                  >
                    {ad.useVoiceChannel ? 'Sim' : 'Não'}
                  </span>
                </div>

                <div>
                  <strong className="">Há quantos anos joga: </strong>
                  <span>{ad.yearsPlaying}</span>
                </div>

                <div>
                  <strong className="">Dias que joga: </strong>
                  <span>{ad.weekDays.length}</span>
                  <span className="block">
                    De {ad.hourStart} até {ad.hourEnd}
                  </span>
                </div>

                {ad.id !== discord?.id ? (
                  <button
                    title="Ver discord"
                    onClick={() => handleDiscord(ad.id)}
                    className="bg-violet-500 px-4 py-2 rounded flex items-center justify-center  w-44 gap-2 mx-auto"
                  >
                    <DiscordLogo size={20} />
                    Ver discord
                  </button>
                ) : (
                  <CopyToClipboard text={discord.tag} onCopy={notifyCopied}>
                    <button
                      title="Ver discord"
                      onClick={() => handleDiscord(ad.id)}
                      className="bg-violet-500 px-4 py-2 rounded flex items-center justify-center  w-44 gap-2 mx-auto"
                    >
                      <CopySimple size={20} />
                      {discord.tag}
                    </button>
                  </CopyToClipboard>
                )}

                <ToastContainer />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
