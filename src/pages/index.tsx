import Head from 'next/head'
import { useEffect, useState } from 'react'
import {Hearder} from '../components/Header/Header'
import styles from '../styles/Home.module.scss'
import api from './api/marvel';

interface CharactersProps {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string
  }
}

interface EventsProps {
  id: number;
  title: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string
  };
  resourceURI: string
}

interface SeriesProps {
  id: number;
  title: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string
  };
  rating: string
}

 export default function Home() {

  const [events, setEvents] = useState<EventsProps[]>([])


// useEffect(() => {
//   async function getItens() {
//     try {
//       const {data} = await api.get('/event');
//       setEvents(data)
//     }catch {
//       console.log('Ops! Deu erro')
//     }
//   }
//   getItens()
// }, [])

useEffect(() => {
   api.get("/events")
  .then(response => setEvents(response.data.data.results))
  .catch(err => console.log('Ops! Deu o erro' + err))
}, []) 

  return (
    <>
      <Head>
        <title>Arena Nerd | O melhor conteúdo Nerd você encontra aqui!</title>
        <meta name="description" content="Tudo sobre o mundo nerd, filmes, séries e personagens da Marvel e DC Comics!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hearder />
      <div className={styles.conteiner}>
        <div className={styles.content}>
          <ul>
              {events.map(event => {
                return (
                  <li key={event.id}>
                    <img src={`${event.thumbnail.path}.${event.thumbnail.extension}`} alt={`Nome do ${event.title}`}/>
                    <span className="name">{event.title}</span>
                    <p>{`${event.description}`}</p>
                  </li>
                )
              })}
          </ul>
        </div>
        
      </div>
      
      </>
  )
}

