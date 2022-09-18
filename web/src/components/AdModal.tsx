import * as Dialog from '@radix-ui/react-dialog';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { Check, GameController } from 'phosphor-react';
import { Input } from './Form/Input';
import GameSelect from './Form/GameSelect';
import { FormEvent, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

export function AdModal() {
  const [weekDays, setWeekDays] = useState<string[]>([]);
  const [useVoiceChannel, setUseVoiceChannel] = useState<boolean>(false);

  const isFormValid = weekDays.length > 0;

  async function handleCreateAdd(e: FormEvent) {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    try {
      await axios.post(`http://192.168.15.8:3333/games/${data.game}/ads`, {
        name: data.name,
        yearsPlaying: Number(data.yearsPlaying),
        discord: data.discord,
        weekDays: weekDays.map(Number),
        hourStart: data.hourStart,
        hourEnd: data.hourEnd,
        useVoiceChannel: useVoiceChannel,
      });
      toast('Anuncio criado', {
        hideProgressBar: true,
        autoClose: 1000,
        theme: 'dark',
      });
    } catch (err) {
      toast('Erro', { hideProgressBar: true, autoClose: 1000, theme: 'dark' });
    }
  }

  return (
    <Dialog.Portal>
      <ToastContainer />
      <div className="bg-black/60 inset-0 fixed" />

      <Dialog.Content className="fixed bg-[#2a2634] py-8 px-4 sm:px-10 text-white top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 rounded-lg w-11/12 shadow-lg shadow-black/25 h-[90vh] overflow-auto sm:w-[480px]">
        <Dialog.Title className="text-3xl  font-black">
          Publique um anúncio
        </Dialog.Title>

        <form onSubmit={handleCreateAdd} className="mt-8 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <span className="font-semibold">Qual o game?</span>
            <GameSelect />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="name">Seu nome (ou nickname)?</label>
            <Input
              name="name"
              id="name"
              type="text"
              placeholder="Como te chamam dentro do game?"
            />
          </div>

          <div className="flex flex-col gap-2 sm:grid sm:grid-cols-2 sm:gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
              <Input
                name="yearsPlaying"
                id="yearsPlaying"
                type="number"
                placeholder="Tudo bem ser ZERO"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="discord">Qual seu discord?</label>
              <Input
                name="discord"
                id="discord"
                type="text"
                placeholder="usuário#0000"
              />
            </div>
          </div>

          <div className="flex gap-6 flex-col sm:flex-row">
            <div className="flex flex-col gap-2">
              <label htmlFor="weekDays">Quando costuma jogar?</label>
              <ToggleGroup.Root
                type="multiple"
                className="grid grid-cols-4 gap-2 px-10 sm:px-0"
                onValueChange={setWeekDays}
              >
                <ToggleGroup.Item
                  value="0"
                  title="Domingo"
                  className="w-8 h-8 rounded bg-zinc-900 radix-state-on:bg-violet-500"
                >
                  D
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="1"
                  title="Segunda"
                  className="w-8 h-8 rounded bg-zinc-900 radix-state-on:bg-violet-500"
                >
                  S
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="2"
                  className="w-8 h-8 rounded bg-zinc-900 radix-state-on:bg-violet-500"
                >
                  T
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="3"
                  title="Quarta"
                  className="w-8 h-8 rounded bg-zinc-900 radix-state-on:bg-violet-500"
                >
                  Q
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="4"
                  title="Quinta"
                  className="w-8 h-8 rounded bg-zinc-900 radix-state-on:bg-violet-500"
                >
                  Q
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="5"
                  title="Sexta"
                  className="w-8 h-8 rounded bg-zinc-900 radix-state-on:bg-violet-500"
                >
                  S
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="6"
                  title="Sábado"
                  className="w-8 h-8 rounded bg-zinc-900 radix-state-on:bg-violet-500"
                >
                  S
                </ToggleGroup.Item>
                <div className="w-8 h-8 rounded bg-zinc-900 radix-state-on:bg-violet-500" />
              </ToggleGroup.Root>
            </div>

            <div className="flex flex-col gap-2 flex-1">
              <label htmlFor="hourStart">Qual o horário do dia?</label>
              <div className="grid grid-cols-2 gap-2">
                <Input
                  name="hourStart"
                  id="hourStart"
                  type="time"
                  placeholder="De"
                />
                <Input
                  name="hourEnd"
                  id="hourEnd"
                  type="time"
                  placeholder="Até"
                />
              </div>
            </div>
          </div>

          <div className="mt-2 flex gap-2 text-sm">
            <Checkbox.Root
              className="w-6 h-6 rounded bg-zinc-900"
              id="voice"
              checked={useVoiceChannel}
              onCheckedChange={(checked) =>
                checked === true
                  ? setUseVoiceChannel(true)
                  : setUseVoiceChannel(false)
              }
            >
              <Checkbox.Indicator>
                <Check size={16} className="text-emerald-400 mx-auto" />
              </Checkbox.Indicator>
            </Checkbox.Root>
            <label htmlFor="voice">Costumo me conectar ao chat de voz</label>
          </div>

          <footer className="mt-4 flex gap-4 justify-center sm:justify-end">
            <Dialog.Close
              type="button"
              className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600"
            >
              Cancelar
            </Dialog.Close>
            <button
              type="submit"
              className="bg-violet-500 sm:px-5 px-3 h-12 rounded-md font-semibold hover:bg-violet-600 flex items-center gap-3 disabled:bg-violet-400"
              disabled={!isFormValid}
            >
              <GameController size={24} />
              Encontrar Duo
            </button>
          </footer>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
