import * as Select from '@radix-ui/react-select';
import { CaretDown, CaretUp, Check } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { useGames } from '../../hooks/useGames';

interface Game {
  id: string;
  title: string;
}

function GameSelect() {
  const [games, setGames] = useState<Game[]>([]);

  const defaultId = '6b7fc125-d424-4ea5-a3f6-b8348a13b79c';

  useEffect(() => {
    async function getGames() {
      const gamesFetched = await useGames();
      setGames(gamesFetched);
    }

    getGames();
  }, []);

  return (
    <Select.Root name="game" defaultValue={defaultId}>
      <Select.SelectTrigger
        aria-label="Game"
        className="bg-zinc-900 py-3 px-4 rounded text-sm text-zinc-200 flex items-center justify-between capitalize"
      >
        <Select.SelectValue />

        <Select.SelectIcon>
          <CaretDown size={20} className="text-zinc-400" />
        </Select.SelectIcon>
      </Select.SelectTrigger>

      <Select.Portal>
        <Select.SelectContent className="bg-zinc-900 rounded overflow-hidden ">
          <Select.SelectScrollUpButton className="text-zinc-100 mx-auto py-2">
            <CaretUp size={20} />
          </Select.SelectScrollUpButton>

          <Select.SelectViewport>
            <Select.SelectGroup>
              {games.map((game) => {
                return (
                  <Select.SelectItem
                    key={game.id}
                    className="flex items-center justify-between py-2 px-3 m-1 bg-zinc-900 text-zinc-500 cursor-pointer rounded hover:bg-violet-500 hover:text-white capitalize group"
                    value={game.id}
                  >
                    <Select.SelectItemText>{game.title}</Select.SelectItemText>
                    <Select.SelectItemIndicator>
                      <Check
                        size={24}
                        className="text-emerald-500 group-hover:text-white"
                      />
                    </Select.SelectItemIndicator>
                  </Select.SelectItem>
                );
              })}
            </Select.SelectGroup>
          </Select.SelectViewport>

          <Select.SelectScrollDownButton className="text-zinc-100 mx-auto py-2">
            <CaretDown size={20} />
          </Select.SelectScrollDownButton>
        </Select.SelectContent>
      </Select.Portal>
    </Select.Root>
  );
}

export default GameSelect;
