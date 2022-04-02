import Link from 'next/link'
import {Header} from '../components/Header/Header'


import styles from "../styles/404.module.scss"


export default function Custon404() {
    return (
        <>
            <div className={styles.container}>
                <Header />
                <div className={styles.content}>
                   
                    <h1>Ops! Ainda não consegui finalizar, mas fica tranquilo que em breve o 
                        site vai estar bacana e vc vai poder curtir todo o contúdo que será disponibilizado!</h1>

                    <button><Link href="/">Voltar</Link></button>
                </div>
            </div>
        </>
    )
}