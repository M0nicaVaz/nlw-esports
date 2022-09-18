import { Link } from 'react-router-dom';

export interface GameBannerProps {
  bannerUrl: string;
  title: string;
  adsCount: number;
}

export function GameBanner(props: GameBannerProps) {
  const slug = props.title.split(' ').join('-');

  return (
    <Link to={`/game/${slug}`} className="relative rounded-lg overflow-hidden">
      <img src={props.bannerUrl} alt="" className="w-full" />

      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block capitalize">
          {props.title}
        </strong>
        <span className="text-zinc-300 text-sm ">
          {props.adsCount} anúncios
        </span>
      </div>
    </Link>
  );
}
