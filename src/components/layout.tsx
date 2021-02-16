import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

const name = 'GenZ Stoic';
export const siteTitle = 'GenZ Stoic';

export default function Layout({ children, home }: { children: React.ReactNode; home?: boolean }): JSX.Element {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/fonts/Montserrat/Montserrat-Regular.ttf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/Montserrat/Montserrat-Bold.ttf" as="font" crossOrigin="" />
        <meta name="description" content="GenZ Stoic Blog" />
        <meta property="og:image" content="/images/profile.jpg" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary" />
        <meta name="theme-color" content="#0F0F0F" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Image
        className={styles.heroImg}
        src="/images/hero-bg.png"
        alt="Hero Background"
        layout="fill"
        priority={true}
        quality={100}
        objectFit="cover"
      />
      <div className={styles.container}>
        <header className={styles.header}>
          {home ? (
            <>
              <Image
                priority={true}
                src="/images/profile.jpg"
                width={140}
                height={140}
                className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                alt="Digital art by Werner Hornung"
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
              <section className={`${utilStyles.headingMd} ${utilStyles.lightText}`}>
                <p>an unexamined life is not worth living</p>
              </section>
            </>
          ) : (
            <>
              <Link href="/">
                <a>
                  <Image
                    priority={true}
                    src="/images/profile.jpg"
                    width={80}
                    height={80}
                    className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                    alt="Digital art by Werner Hornung"
                  />
                </a>
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/">
                  <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
              </h2>
              <section className={utilStyles.lightText}>
                <p style={{ marginTop: 0, marginBottom: 10 }}>an unexamined life is not worth living</p>
              </section>
            </>
          )}
        </header>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
