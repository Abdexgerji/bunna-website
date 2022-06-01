import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ethiopian Bunna</title>
        <meta name='description' content='Ethiopia Bunna"s website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <nav>
        <img src='/ethiopia-bunna.webp' alt='bunna logo' />
        <div className='nav-div'>
          <ul className='nav-ul'>
            <li>
              <Link href='/'>
                <a className='current-page'>HOME</a>
              </Link>
            </li>
            <li>
              <Link href='/about'>
                <a className=''>ABOUT</a>
              </Link>
            </li>
            <li>
              <Link href='/contact'>
                <a className=''>CONTACT US</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <main className='home-main'>
        <div className='stadium-image'>
          <img src='/download (7).jpg' alt='bunna logo' />
          <h1 className='bunna-heading'>Ethiopia Bunna F.C.</h1>
        </div>
        {/* // sxn news*/}
        <h2 className='font-gradient'>Latest News</h2>
        <div>
          <div className='news-card'></div>
          <div className='news-card'></div>
          <div className='news-card'></div>
        </div>
        {/* // sxn accomplishment*/}
        {/* // sxn players*/}
        {/* // sxn coach*/}
      </main>

      <footer>footer</footer>
    </div>
  );
}
