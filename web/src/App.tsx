import * as Dialog from '@radix-ui/react-dialog';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { GameBannher } from './components/GameBanner';
import { AdBanner } from './components/AdBanner';


import logoimg from './assets/logo.svg';
import './styles/main.css';
import { CreateAdModal } from './components/CreateAdModal';
;

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {

  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    axios('http://localhost:3001/games')
      .then(response => {
        setGames(response.data);
      })
  }, [])

  return (
    <div className='max-w-[1000px] mx-auto flex flex-col items-center my-10'>
      <img src={logoimg} alt="" />

      <h1 className='text-4xl text-white font-black mt-10'>
        Seu <span className='text-transparent bg-text-gradient bg-clip-text'>Duo</span> Está Aqui
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        {games.map(game => {
          return (
            <GameBannher
              key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsCount={game._count.ads}
            />
          )
        })}
      </div>

      <Dialog.Root>
        <AdBanner />
        <CreateAdModal />
      </Dialog.Root>
    </div>
  )
}

export default App;
