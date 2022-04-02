import Head from 'next/head'
import { useEffect, useState } from 'react'
import {Header} from '../components/Header/Header'
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
  resourceURI: string;
  next: string
}

interface EventsPropsSSG {
  series: []
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

 export default function Home({series}: EventsPropsSSG) {

  const [events, setEvents] = useState<EventsProps[]>([])


useEffect(() => {
  async function getItens() {
    try {
      // const {data} = await api.get('/events');
      // setEvents(data.data.results)
      console.log(series)
      setEvents(series)
    }catch (error) {
      console.error('Ops! Deu erro' + error)
    }
  }
  getItens()
}, [])

// useEffect(() => {
//    api.get("/events")
//   .then(response => setEvents(response.data.data.results))
//   .catch(err => console.log('Ops! Deu o erro' + err))
// }, []) 

  return (
    <>
      <Head>
        <title>Kepoweb | O melhor conteúdo Nerd você encontra aqui!</title>
        <meta name="description" content="Tudo sobre o mundo nerd, filmes, séries e personagens da Marvel e DC Comics!" />
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.conteiner}>
        <div className={styles.content}>
          <ul>
              {events.map(event => {
                return (
                  <li key={event.id}>
                    <img src={`${event.thumbnail.path}.${event.thumbnail.extension}`} alt={`${event.title}`} />
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

export async function getStaticProps() {
  const res = await api.get('/events')
  const series = await res.data.data.results

  return {
    props: {
      series
    },
    revalidate: 60 * 60 * 24 //24 horas
  }
}

