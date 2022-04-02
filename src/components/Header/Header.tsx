import Link from "next/link";
import styles from "./styles.module.scss";


export function Hearder() {
    return (
    <>
        <header className={styles.container}>
            <div className={styles.containt}>
                <h1>Kepoweb</h1>
            </div>
            <nav className={styles.menu}>
                
                    <ul>
                        <li>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/marvel">
                                <a>Marvel</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dccommics">
                                <a>DC Comics</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/filmes">
                                <a>Filmes</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/series">
                                <a>Séries</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/cinema">
                                <a>Cinema</a>
                            </Link>
                        </li>
                    </ul>
            </nav>
            
        </header>
    </>
    )
} 
