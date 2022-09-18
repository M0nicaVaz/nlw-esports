import axios from 'axios';

export async function useGames() {
  const { data: games } = await axios('http://192.168.15.8:3333/games');

  return games;
}
